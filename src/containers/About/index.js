import React from 'react';
import Page from 'components/Page';
import Sidebar from 'components/Sidebar';
import './styles.css';

const About = () => {
  return (
    <Page title="About Me" description="All about Tiffany Lea May" fullWidth>
      <div className="beachImg">
        <img alt="Beach" src="/images/beach-mid.jpg" />
      </div>
      <div className="setWidth">
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
            from home out of CA for another 2 years.
            <br />
            <br />
            From there it was time to venture out into the California job
            market. I landed my first California job at SKECHERS USA Inc in June
            of 2014. Skechers allowed me to learn, grow and excel as an
            engineer, team member and leader.
            <br />
            <br />
            In March of 2018 I was offered an opportunity to help on a project
            at BCGDV. The goal was to digitalize the home and title buying
            process. I worked as a contractor for 6 months and then became a
            Lead Engineer full time at Endpoint Closing. I enjoyed my time at
            Endpoint but over time it became clear it was no longer a good fit
            for me. I parted with Endpoint Closing in July 2019.
            <br />
            <br />
            So far my time away has been such a blessing! I set out to recenter
            myself and focus on my career goals and I have gained that and so
            much more. I&#39;ve spent my time learning about all the new shiny
            and fun things I haven&#39;t had time for over the last few years.
            From AWS to Adobe I&#39;m deep diving into it all! I hope to
            re-enter the job market in a few months with a renewed sense of
            self, passion and sharpened skill set to bring even more value to my
            next team.
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
    </Page>
  );
};

export default About;
