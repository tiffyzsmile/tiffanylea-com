/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = `mutation CreateProject(
  $input: CreateProjectInput!
  $condition: ModelProjectConditionInput
) {
  createProject(input: $input, condition: $condition) {
    id
    name
    description
    url
    employer {
      id
      name
      startdate
      projects {
        nextToken
      }
    }
    client {
      id
      name
      projects {
        id
        name
        description
        url
      }
    }
  }
}
`;
export const updateProject = `mutation UpdateProject(
  $input: UpdateProjectInput!
  $condition: ModelProjectConditionInput
) {
  updateProject(input: $input, condition: $condition) {
    id
    name
    description
    url
    employer {
      id
      name
      startdate
      projects {
        nextToken
      }
    }
    client {
      id
      name
      projects {
        id
        name
        description
        url
      }
    }
  }
}
`;
export const deleteProject = `mutation DeleteProject(
  $input: DeleteProjectInput!
  $condition: ModelProjectConditionInput
) {
  deleteProject(input: $input, condition: $condition) {
    id
    name
    description
    url
    employer {
      id
      name
      startdate
      projects {
        nextToken
      }
    }
    client {
      id
      name
      projects {
        id
        name
        description
        url
      }
    }
  }
}
`;
export const createEmployer = `mutation CreateEmployer(
  $input: CreateEmployerInput!
  $condition: ModelEmployerConditionInput
) {
  createEmployer(input: $input, condition: $condition) {
    id
    name
    startdate
    projects {
      items {
        id
        name
        description
        url
      }
      nextToken
    }
  }
}
`;
export const updateEmployer = `mutation UpdateEmployer(
  $input: UpdateEmployerInput!
  $condition: ModelEmployerConditionInput
) {
  updateEmployer(input: $input, condition: $condition) {
    id
    name
    startdate
    projects {
      items {
        id
        name
        description
        url
      }
      nextToken
    }
  }
}
`;
export const deleteEmployer = `mutation DeleteEmployer(
  $input: DeleteEmployerInput!
  $condition: ModelEmployerConditionInput
) {
  deleteEmployer(input: $input, condition: $condition) {
    id
    name
    startdate
    projects {
      items {
        id
        name
        description
        url
      }
      nextToken
    }
  }
}
`;
export const createClient = `mutation CreateClient(
  $input: CreateClientInput!
  $condition: ModelClientConditionInput
) {
  createClient(input: $input, condition: $condition) {
    id
    name
    projects {
      id
      name
      description
      url
      employer {
        id
        name
        startdate
      }
      client {
        id
        name
      }
    }
  }
}
`;
export const updateClient = `mutation UpdateClient(
  $input: UpdateClientInput!
  $condition: ModelClientConditionInput
) {
  updateClient(input: $input, condition: $condition) {
    id
    name
    projects {
      id
      name
      description
      url
      employer {
        id
        name
        startdate
      }
      client {
        id
        name
      }
    }
  }
}
`;
export const deleteClient = `mutation DeleteClient(
  $input: DeleteClientInput!
  $condition: ModelClientConditionInput
) {
  deleteClient(input: $input, condition: $condition) {
    id
    name
    projects {
      id
      name
      description
      url
      employer {
        id
        name
        startdate
      }
      client {
        id
        name
      }
    }
  }
}
`;
