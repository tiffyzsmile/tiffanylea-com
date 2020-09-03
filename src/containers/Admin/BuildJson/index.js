import React from 'react';
import useProjects from 'hooks/useProjects';
import useTags from 'hooks/useTags';
import { getProjectsJsonOutput, getTagsJsonOutput } from './helpers';

const BuildJson = () => {
  const { getProjects } = useProjects();
  const { loading: loadingProjects, data: projects = [] } = getProjects({
    showDisplayOnly: true
  });
  const { getTags } = useTags();
  const { loading: loadingTags, data: tags = [] } = getTags({
    showDisplayOnly: true
  });
  // TODO: need to update single portfolio item page tags
  // prob need to output original tags list again
  // OR output tags on project differently like .... hashed by categorykey?
  // {aws: [amplify, cognito], role: [manager, dev]}
  return (
    <div>
      <h1>Build JSON Source Files</h1>

      <p>The API was bad for performance so back to the JSON!</p>
      <p>Copy and paste the json below into respective files. </p>
      <p>Automate this when you have time...</p>
      <br />
      <br />
      <div>
        <h2>Projects</h2>
        <p>This goes to /tiffanylea-com/src/data/projects.js</p>
        {loadingProjects && <p>Loading...</p>}
        {projects.length > 0 && (
          <textarea
            defaultValue={JSON.stringify(getProjectsJsonOutput(projects))}
          />
        )}
      </div>
      <div>
        <h2>Tags</h2>
        <p>This goes to /tiffanylea-com/src/data/tags.js</p>
        {loadingTags && <p>Loading...</p>}
        {tags.length > 0 && (
          <textarea defaultValue={JSON.stringify(getTagsJsonOutput(tags))} />
        )}
      </div>
    </div>
  );
};

export default BuildJson;
