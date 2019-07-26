import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="content setwidth">
      <Helmet>
        <title>Tiffany Lea May | Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <section className="homepage">
        <h1>Hi, my name is Tiffany May, I am a web developer.</h1>
        <img
          src="/images/cartoonImageHome.png"
          alt="Tiffany as a Cartoon"
          className="pullRight"
        />
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
    </div>
  );
};

export default Home;
