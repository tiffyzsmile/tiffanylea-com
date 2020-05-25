import React, { useEffect } from 'react';
import Page from 'components/Page';
import Filter from 'components/Filter';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useProjects from 'hooks/useProjects';
import useTags from 'hooks/useTags';
import { useStateValue } from 'containers/Admin/State';
import { H1 } from 'components/Typography';
import './styles.scss';

const Portfolio = ({ match }) => {
  const [
    {
      currentSearch,
      filters: { tag },
      sort
    },
    dispatch
  ] = useStateValue();
  const { getProjects } = useProjects();
  const { projectsLoading, data: projects = [], projectsError } = getProjects({
    search: currentSearch,
    sort
  });
  const { getTags } = useTags();
  const { tagsLoading, data: tags = [], tagsError } = getTags({});

  useEffect(() => {
    console.log('SearchFilter values', currentSearch);
    console.log('match.params', match.params);
    dispatch({
      type: 'updateFilters',
      newFilters: { ...match.params }
    });
  }, [match.params]);

  console.log('using tag', tag);
  useEffect(() => {
    dispatch({
      type: 'updateData',
      data: {
        tags: {
          loading: tagsLoading,
          data: tags,
          error: tagsError
        }
      }
    });
  }, [tags]);
  useEffect(() => {
    dispatch({
      type: 'updateData',
      data: {
        projects: {
          loading: projectsLoading,
          data: projects,
          error: projectsError
        }
      }
    });
  }, [tags]);

  const portfolioItems = projects.map(item => {
    return (
      <li key={item.id}>
        <Link to={`/project/${item.id}`}>
          <img alt={item.name} src={item.logo} />
        </Link>
      </li>
    );
  });
  return (
    <Page title="Portfolio" description="Portfolio">
      <Filter />
      <section className="fullWidth portfolio">
        <H1>Portfolio</H1>
        <ul id="portfolio-list">{portfolioItems}</ul>
      </section>
    </Page>
  );
};

Portfolio.propTypes = {
  match: PropTypes.shape({}).isRequired
};

export default Portfolio;
