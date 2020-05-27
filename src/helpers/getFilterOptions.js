// TODO: make all listing pages use this

const getFilterOptions = ({ search, fieldsToFilter = [] }) => {
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

  return queryOptions;
};

export default getFilterOptions;
