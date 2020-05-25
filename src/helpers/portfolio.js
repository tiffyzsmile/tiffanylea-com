import portfolio from 'data/portfolio';

export const getItemTags = item => {
  return [].concat(item.tags, item.cms);
};

export const getTagSlug = tag => {
  return tag
    .replace(/[\s]+/g, '-') // replace spaces with '-'
    .replace(/[^A-Z0-9-]+/gi, '') // remove special characters with nothing
    .toLocaleLowerCase();
};

export const getItemTagSlugs = item => {
  return getItemTags(item).map(tag => getTagSlug(tag));
};

export const getAllTags = () => {
  const tags = portfolio
    .filter(item => {
      return item.display;
    })
    .map(item => {
      return getItemTags(item);
    });

  // only return each item once
  const uniqueTags = [].concat(...tags).filter((v, i, a) => a.indexOf(v) === i);

  return uniqueTags.map(tag => {
    return { slug: getTagSlug(tag), name: tag };
  });
};

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
