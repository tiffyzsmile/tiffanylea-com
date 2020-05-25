import React from 'react';
import FilterItem from 'components/Filter/FilterItem';
import './styles.css';
import categories from 'data/categories';
import { useStateValue } from 'containers/Admin/State';

const Filter = () => {
  const [
    {
      filters: { category },
      tags: { loading, data }
    }
  ] = useStateValue();
  // const content = [];
  const visibleTags = [];

  // if category filter has been clicked
  //
  if (category) {
    visibleTags.push(
      { id: 'go-back', link: '/portfolio', name: `<--- Go Back` },
      ...data
        .filter(t => t.category === category)
        .map(t => {
          return { ...t, link: `/portfolio/${category}/${t.id}` };
        })
    );
    // visibleTags.push([
    //   {
    //     id: 'current',
    //     link: '/portfolio',
    //     name: `${categories[category]} (click to remove)`
    //   }
    // ]);
    // content.push(goBackLink);
    // content.push(currentCategory);
  } else {
    Object.keys(categories).map(categoryKey =>
      visibleTags.push({
        id: categoryKey,
        link: `/portfolio/${categoryKey}`,
        name: categories[categoryKey]
      })
    );
    // content.push(categoryList);
  }
  console.log('loading', loading);
  console.log('visibleTags', visibleTags);

  // const goBackLink = (
  //   <FilterItem key="go-back" link="/portfolio" text={`<--- Go Back`} />
  // );

  // const currentCategory = (
  //   <FilterItem
  //     key="current"
  //     link="/portfolio"
  //     text={`${categories[category]} (click to remove)`}
  //   />
  // );
  // const categoryList = Object.keys(categories).map(categoryKey => {
  //   return (
  //     <FilterItem
  //       key={categoryKey}
  //       link={`/portfolio/${categoryKey}`}
  //       text={categories[categoryKey]}
  //     />
  //   );
  // });
  //
  const content = visibleTags.map(t => {
    return <FilterItem key={t.id} link={t.link} text={t.name} />;
  });

  return (
    <section className="portfolio-filter">
      <nav>
        <ul>{content}</ul>
      </nav>
    </section>
  );
};

Filter.propTypes = {};

export default Filter;
