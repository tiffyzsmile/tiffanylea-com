import { useStateValue } from 'containers/Admin/State';

const getFilterOptions = (fieldsToFilter = ['id']) => {
  // get global state filters object
  const [{ filters }] = useStateValue();

  // get search and category from the filters obj
  const { search, category } = filters;

  // set default limit to 500 for all
  const queryOptions = { variables: { limit: 500 } };

  if (search) {
    // If search string passed in loop through fields to
    // output the appropriate match pattern obj for each
    const matchStatements = [];
    fieldsToFilter.forEach(f => {
      const match = {};
      match[f] = { wildcard: `*${search}*` };
      matchStatements.push(match);
    });

    queryOptions.variables.filter = {
      or: [...matchStatements]
    };
  }

  // If category is present add it to the filters
  if (category) {
    queryOptions.variables.filter = { category: { match: category } };
  }

  return queryOptions;
};

export default getFilterOptions;
