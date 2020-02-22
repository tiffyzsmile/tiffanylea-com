import React from 'react';
import Page from 'components/Page';
import Filter from 'components/Filter';
import { getAllTags } from 'helpers/portfolio';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useProjects from 'hooks/useProjects';
import { useStateValue } from 'containers/Admin/State';
import { H1 } from 'components/Typography';
import './styles.scss';

const Portfolio = ({ match }) => {
  const [
    {
      filters: { search },
      sort
    }
  ] = useStateValue();
  const { getProjects } = useProjects();
  const { loading, data = [], error } = getProjects({ search, sort });
  // need to figure out how to add filters from url back in
  console.log('match.params.filter', match.params.filter);
  console.log('loading, data = [], error ', loading, data, error);
  const portfolioItems = data.map(item => {
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
      <Filter tags={getAllTags()} />
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
