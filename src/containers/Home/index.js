import React from 'react';
import Page from 'components/Page';
import './styles.css';

const Home = () => {
  return (
    <Page title="Home" description="Home">
      <section className="homepage">
        <h1>Hi, my name is Tiffany May, I am a web developer.</h1>
        <img src="/images/cartoonImageHome.gif" alt="Tiffany as a Cartoon" />
        <p>
          I have a passion for what I do and am looking for a challenging
          environment to continue learning and growing from.&nbsp;
        </p>
        <p>
          My dream environment would include some of the following
          characteristics:
        </p>
        <ul>
          <li>
            Values all roles in the concept, design, development and testing
            process
          </li>
          <li>
            Continuously raising the bar and taking pride in all work performed
          </li>
          <li>
            A true dedication and understanding of Web Standards and Best
            Practice
          </li>
          <li>
            A talented team of individuals that share a common passion for Web
            Technologies
          </li>
        </ul>
      </section>
    </Page>
  );
};

export default Home;
