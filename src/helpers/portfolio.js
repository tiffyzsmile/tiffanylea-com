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
      .filter((tag, index, self) => {
        // return if tag is not in current category
        if (tag.tag.category !== category) {
          return false;
        }

        // This is super slow but I don't have time for this right now
        // It is limiting array of object tags to unique values based on id
        // This won't be a problem if I ensure things are only tagged once
        return self.map(x => x.tag.id).indexOf(tag.tag.id) === index;
      })
      .map(tag => {
        return { name: tag.tag.name, id: tag.tag.id };
      });

    const uCatTags = Array.from(new Set(catTags));
    return {
      category: categories[category],
      categoryId: category,
      tags: uCatTags
    };
  });
  console.log('projectTags', projectTags);
  return projectTags;
};

export default {
  getProjectsWithTagsAndCategories,
  getProjectTagsByCategory
};
