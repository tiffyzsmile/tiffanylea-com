import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { getProject as getProjectQuery, listProjects } from 'graphql/queries';
import {
  createProject as createProjectMutation,
  updateProject as updateProjectMutation,
  deleteProject as deleteProjectMutation
} from 'graphql/mutations';
import {
  formatDateForAWS,
  formatDateFromAWS,
  formatJsonFromAws
} from 'helpers/forms';
import getFilterOptions from 'helpers/getFilterOptions';

const getFormattedInput = ({
  id,
  name,
  date,
  description,
  features,
  display,
  url,
  logo,
  images,
  employer,
  client
}) => {
  const formattedInput = {};

  if (id) {
    formattedInput.id = id;
  }

  // if no employer selected use null to clear selection else pass selection
  formattedInput.projectEmployerId = !employer.id ? null : employer.id;

  // if no client selected use null to clear selection else pass selection
  formattedInput.projectClientId = !client.id ? null : client.id;

  // if no description passed use null to clear description else pass description
  formattedInput.description = !description ? null : description;

  if (date) {
    formattedInput.date = formatDateForAWS(date);
  }

  if (features) {
    formattedInput.features = features.map(feature => JSON.stringify(feature));
  }

  return {
    name,
    features,
    display,
    url,
    logo,
    images,
    ...formattedInput
  };
};

const useProjects = () => {
  const [newProject] = useMutation(gql(createProjectMutation));
  const [changeProject] = useMutation(gql(updateProjectMutation));
  const [removeProject] = useMutation(gql(deleteProjectMutation));

  const getProject = projectIdToGet => {
    const { loading, data, error } = useQuery(gql(getProjectQuery), {
      variables: { id: projectIdToGet }
    });

    const project = data ? data.getProject : data;
    // Need to convert aws format 'yyyy-mm-dd' back to date object
    // for react-datepicker
    if (project && project.date) {
      project.date = formatDateFromAWS(project.date);
    }

    // Need to parse awsjson
    if (project && project.features) {
      project.features = project.features.map(feature => {
        return formatJsonFromAws(feature);
      });
    }

    return { loading, data: project, error };
  };

  const getProjects = ({ search, showDisplayOnly = false }) => {
    const { loading, data, error } = useQuery(
      gql(listProjects),
      getFilterOptions({
        search,
        fieldsToFilter: ['id', 'name', 'description'],
        showDisplayOnly
      })
    );
    const projects = data ? data.listProjects.items : data;
    if (projects) {
      // Sort projects by date
      // Temporary for listProjects query
      projects.sort((a, b) => {
        const dateA = parseInt(a.date.replace(/-/g, ''), 10);
        const dateB = parseInt(b.date.replace(/-/g, ''), 10);
        return dateB - dateA;
      });
    }
    return { loading, data: projects, error };
  };

  const addProject = (projectToAdd, onCompleted) => {
    const input = getFormattedInput(projectToAdd);

    newProject({
      variables: {
        input
      }
    }).then(({ data: { createProject } }) => onCompleted(createProject));
  };

  const deleteProject = projectToDelete => {
    removeProject({
      variables: {
        input: projectToDelete
      },
      refetchQueries: [{ query: gql(listProjects), variables: { limit: 500 } }]
    });
  };

  const updateProject = projectToUpdate => {
    const input = getFormattedInput(projectToUpdate);

    const { loading, data, error } = changeProject({
      variables: {
        input
      }
    });
    const project = data ? data.updateProject : data;
    return { loading, data: project, error };
  };

  return {
    getProject,
    getProjects,
    addProject,
    deleteProject,
    updateProject
  };
};

export default useProjects;
