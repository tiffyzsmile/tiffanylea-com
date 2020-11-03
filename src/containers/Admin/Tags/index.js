import React from 'react';
import useTags from 'hooks/useTags';
import Button from 'components/Button';
import { SearchFilter } from 'components/Form/Filters';
import TagsTable from 'containers/Admin/Tags/TagsTable';
import { useHistory } from 'react-router-dom';
import { useStateValue } from 'containers/Admin/State';
import { filterTagsByCategory } from 'helpers/tags';

const Tags = () => {
  const [{ currentCategory, currentSearch }] = useStateValue();
  const history = useHistory();
  const { getTags, deleteTag } = useTags();
  const { data = [] } = getTags({
    subscribe: true,
    search: currentSearch
  });
  const tags = filterTagsByCategory({ tags: data, category: currentCategory });

  return (
    <div>
      <h1>Tags ({tags.length})</h1>
      <div style={{ float: 'right' }}>
        <Button styleAs="link" onClick={() => history.push(`/admin/tag`)}>
          Add Tag
        </Button>
      </div>
      <SearchFilter />
      <TagsTable
        tags={tags}
        onDelete={(tagId) =>
          deleteTag({
            tagIdToDelete: tagId
          })
        }
      />
    </div>
  );
};

export default Tags;
