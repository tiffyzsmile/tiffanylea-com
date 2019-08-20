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

export const getPortfolioItems = filter => {
  return portfolio
    .filter(item => {
      // only returns results with display set to true
      return item.display;
    })
    .filter(item => {
      if (filter) {
        // if filter is passed then only return items that match
        return getItemTagSlugs(item).indexOf(filter) >= 0;
      }
      // else return all items
      return item;
    });
};
