import categories from 'data/categories';

// create a better structured array of projects
// for easier access to tags and categories
export const getProjectsWithTagsAndCategories = projects => {
  const projectsWithTags = projects.map(project => {
    const projectCategories = [];
    const tags = [];
    if (project.tags.items.length) {
      project.tags.items.forEach(projectTag => {
        tags.push(projectTag.tag.id);
        if (!projectCategories.includes(projectTag.tag.category)) {
          projectCategories.push(projectTag.tag.category);
        }
      });
    }
    return { ...project, tags, categories: projectCategories };
  });
  return projectsWithTags;
};

export const getProjectTagsByCategory = tags => {
  // const tagsByCategory = [];
  const tagCategories = [];
  // get array of categories
  tags.forEach(projectTag => {
    if (!tagCategories.includes(projectTag.tag.category)) {
      tagCategories.push(projectTag.tag.category);
    }
  });
  const projectTags = tagCategories.map(category => {
    const catTags = tags
      .filter(tag => tag.tag.category === category)
      .map(tag => tag.tag.name);

    const uCatTags = Array.from(new Set(catTags));
    return {
      category: categories[category],
      tags: uCatTags
    };
  });
  return projectTags;
};

export default {
  getProjectsWithTagsAndCategories,
  getProjectTagsByCategory
};
