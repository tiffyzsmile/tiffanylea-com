export const filterTagsByCategory = ({ tags = [], category }) => {
  if (!category) {
    return tags;
  }
  const filteredTags = tags.filter(tag => {
    if (category) {
      return tag.category === category;
    }
    return tag;
  });

  return filteredTags;
};

export default {
  filterTagsByCategory
};
