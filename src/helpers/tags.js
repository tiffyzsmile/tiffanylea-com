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
  // Sort list alphabetically by name
  filteredTags.sort((a, b) => (a.name < b.name ? -1 : Number(a.name > b.name)));
  return filteredTags;
};

export default {
  filterTagsByCategory
};
