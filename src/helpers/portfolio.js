// create a better structured array of projects
// for easier access to tags and categories
export const getProjectsWithTagsAndCategories = projects => {
  const projectsWithTags = projects.map(project => {
    const categories = [];
    const tags = [];
    if (project.tags.items.length) {
      project.tags.items.forEach(projectTag => {
        tags.push(projectTag.tag.id);
        if (!categories.includes(projectTag.tag.category)) {
          categories.push(projectTag.tag.category);
        }
      });
    }
    return { ...project, tags, categories };
  });
  return projectsWithTags;
};

export default {
  getProjectsWithTagsAndCategories
};
