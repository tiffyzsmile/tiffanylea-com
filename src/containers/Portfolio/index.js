import React, { useEffect } from 'react';
import queryString from 'query-string';
import Page from 'components/Page';
import Filter from 'components/Filter';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useProjects from 'hooks/useProjects';
import { H1 } from 'components/Typography';
import { getProjectsWithTagsAndCategories } from 'helpers/portfolio';
import PortfolioItem from './PortfolioItem';
import './styles.scss';

const Portfolio = ({ match, location }) => {
  const { getProjects } = useProjects();
  const { data: projects = [] } = getProjects({
    showDisplayOnly: true
  });
  const { projectId } = match.params;
  const { category, tag } = queryString.parse(location.search);

  useEffect(() => {
    if (projectId && document.getElementById(projectId)) {
      document.getElementById(projectId).scrollIntoView();
    }
  }, [projects]);

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
    const projectDetail = [];
    let isCurrent = false;
    if (projectId === item.id) {
      isCurrent = true;
      projectDetail.push(
        <li key={`fullRow${item.id}`} className="fullRow">
          <PortfolioItem
            project={item}
            closeLink={`/portfolio${location.search}`}
          />
        </li>
      );
    }
    const link = isCurrent ? '/portfolio' : `/portfolio/${item.id}`;
    return (
      <React.Fragment key={item.id}>
        <li className={isCurrent ? 'current' : ''} id={item.id}>
          <Link to={link + location.search}>
            <img alt={item.name} src={item.logo} />
          </Link>
        </li>
        {projectDetail}
      </React.Fragment>
    );
  });

  return (
    <Page title="Portfolio" description="Portfolio">
      <Filter category={category} tag={tag} />
      <section className="fullWidth portfolio">
        <H1>Portfolio ({visibleProjects.length})</H1>
        <ul id="portfolio-list">{portfolioItems}</ul>
      </section>
    </Page>
  );
};

Portfolio.propTypes = {
  match: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired
};

export default Portfolio;
