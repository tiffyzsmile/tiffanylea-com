import React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from 'components/Sidebar';
import './styles.css';

const About = () => {
  return (
    <div>
      <div className="beachImg">
        <Helmet>
          <title>Tiffany Lea May | About Me</title>
          <meta name="description" content="All about Tiffany Lea May" />
        </Helmet>
        <img alt="Beach" src="/images/beach-mid.jpg" />
      </div>
      <div className="content setwidth">
        <section className="leftCol">
          <h1>About Me</h1>
          <p>
            My name is Tiffany and I am a Web Designer/Developer. I discovered
            my passion in 2005 when editing MySpace profiles. I taught myself
            everything I could by reading library books and through trial and
            error. I continued on to GTCC where I studied for my A.A.S in Web
            Technologies. After just a year of school in September of 2007 I was
            hired on at Inter-Tech Communications as a Web Developer. I
            continued to work there while graduating with honors in 2008.
            <br />
            <br />
            In October of 2008 Carolinanet purchased the Web Services division
            of Inter-Tech Communications. They welcomed me to their existing
            team. I left Carolinanet in February of 2009 because it was not a
            good fit for me.
            <br />
            <br />
            I then worked as a developer on a contract basis for Get You Found
            Online Marketing. I enjoyed working for Get You Found but still
            seeked full time employment as a web developer. <br />
            <br />
            In September 2009 I was contacted by Beacon Technologies about a
            full time position. After almost 3 years at Beacon Technologies I
            decided it was time to follow my dreams to California! I was happy
            to hear that Beacon was on board for my move and allowed me to work
            from home out of CA for another 2 years. In May of 2014 I was laid
            off from Beacon Technologies. <br />
            <br />
            Being laid off forced me to venture out into the California job
            market and I landed my first California job at SKECHERS USA Inc in
            June of 2014. I am enjoying my time at Skechers and am excited about
            what the future holds!
            <br />
            <br />
            My skills range from design and development of medium to large scale
            websites to creating and implementing new solutions that make the
            entire process flow better. I enjoy a challenge and am always
            looking for new technologies. I’m very passionate about my work and
            I am happy to say I still love doing it.
            <br />
          </p>
        </section>
        <Sidebar />
      </div>
    </div>
  );
};

export default About;
