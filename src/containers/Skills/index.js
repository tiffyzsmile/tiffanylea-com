import React from 'react';
import { Helmet } from 'react-helmet';

const Skills = () => {
  return (
    <div>
      <Helmet>
        <title>Tiffany Lea May | Skills</title>
        <meta name="description" content="My skills" />
      </Helmet>
      <div className="content setwidth">
        <h1>Skills</h1>
        <section className="gridWrap gridWrap2">
          <div className="gridBox">
            <div className="skill-group">
              <div className="skill html5">
                <div className="bar" />
                <div className="label">HTML5</div>
              </div>
              <div className="skill css3">
                <div className="bar" />
                <div className="label">CSS3</div>
              </div>
              <div className="skill js">
                <div className="bar" />
                <div className="label">Javascript</div>
              </div>
            </div>
          </div>
          <div className="gridBox">
            <div className="skill-group">
              <div className="skill php">
                <div className="bar" />
                <div className="label">PHP</div>
              </div>
              <div className="skill asp">
                <div className="bar" />
                <div className="label">ASP</div>
              </div>
              <div className="skill xml">
                <div className="bar" />
                <div className="label">XML/XSLT</div>
              </div>
            </div>
          </div>
          <div className="gridBox">
            <div className="skill-group">
              <div className="skill responsive">
                <div className="bar" />
                <div className="label">Responsive</div>
              </div>
              <div className="skill json">
                <div className="bar" />
                <div className="label">JSON</div>
              </div>
              <div className="skill ajax">
                <div className="bar" />
                <div className="label">AJAX</div>
              </div>
              <div className="skill mongodb">
                <div className="bar" />
                <div className="label">MongoDB</div>
              </div>
            </div>
          </div>
          <div className="gridBox">
            <div className="skill-group">
              <div className="skill jquery">
                <div className="bar" />
                <div className="label">jQuery</div>
              </div>
              <div className="skill node">
                <div className="bar" />
                <div className="label">Node.js</div>
              </div>
              <div className="skill backbone">
                <div className="bar" />
                <div className="label">Backbone.js</div>
              </div>
              <div className="skill angular">
                <div className="bar" />
                <div className="label">Angular.js</div>
              </div>
            </div>
          </div>
          <div className="gridBox gridImg2 boxStyle1">
            <h2>Content Management Systems</h2>
            <img
              src="/images/skills-cms-cascade-server.jpg"
              alt="Cascade Server"
            />
            <img src="/images/skills-cms-drupal.jpg" alt="Drupal" />
          </div>
          <div className="gridBox gridImg2 boxStyle1">
            <h2>Blogging Platforms</h2>
            <img
              src="/images/skills-blogging-platform-wordpress.jpg"
              alt="Wordpress"
            />
          </div>
          <div className="gridBox gridImg2 boxStyle1">
            <h2>e-Commerce</h2>
            <img
              src="/images/skills-ecommerce-aspdotnetstorefront.jpg"
              alt="aspdotnetStorefront"
            />
            <img src="/images/skills-ecommerce-magento.jpg" alt="Magento" />
          </div>
          <div className="gridBox gridImg3 boxStyle1">
            <h2>Other</h2>
            <img
              src="/images/skills-other-w3c-compliant.jpg"
              alt="W3C Compliant"
            />
            <img
              src="/images/skills-other-508-compliant.jpg"
              alt="508 Comploant"
            />
            <img
              src="/images/skills-other-cross-browser-compatibility.jpg"
              alt="Cross Browser Compatibility"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
