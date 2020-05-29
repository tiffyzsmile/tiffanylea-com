import React from 'react';
import Page from 'components/Page';
import Filter from 'components/Filter';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useProjects from 'hooks/useProjects';
import { H1 } from 'components/Typography';
import { getProjectsWithTagsAndCategories } from 'helpers/portfolio';
import './styles.scss';

const Portfolio = ({ match }) => {
  const { getProjects } = useProjects();
  const { data: projects = [] } = getProjects({
    showDisplayOnly: true
  });
  const { category, tag } = match.params;

  const visibleProjects = getProjectsWithTagsAndCategories(projects).filter(
    project => {
      if (!category) {
        return project;
      }
      if (!tag) {
        return project.categories.includes(category);
      }
      return project.tags.includes(tag);
    }
  );

  const portfolioItems = visibleProjects.map(item => {
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
      <Filter category={match.params.category} tag={match.params.tag} />
      <section className="fullWidth portfolio">
        <H1>Portfolio ({visibleProjects.length})</H1>
        <ul id="portfolio-list">{portfolioItems}</ul>
      </section>
    </Page>
  );
};

Portfolio.propTypes = {
  match: PropTypes.shape({}).isRequired
};

export default Portfolio;
