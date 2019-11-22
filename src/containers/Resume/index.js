import React from 'react';
import Page from 'components/Page';
import './styles.scss';

const Resume = () => {
  return (
    <Page title="Resume" description="Resume">
      <div className="content setwidth resume">
        <section className="intro">
          <a
            target="_blank"
            className="adobe"
            href="/pdfs/TiffanyLeaMay_resume_2019.pdf"
          >
            <img src="/images/icons/adobe.png" alt="Adobe PDF" /> Adobe PDF{' '}
          </a>
          <h1>Tiffany Lea May</h1>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/tiffanymay">
                linkedin.com/in/tiffanymay
              </a>
            </li>
            <li>Los Angeles, CA</li>
            <li>336-471-6968 </li>
            <li>
              <a href="mailto:tiffyzsmile@gmail.com">tiffyzsmile@gmail.com</a>
            </li>
          </ul>
        </section>
        <section className="skills">
          <h2>Skills Profile</h2>
          <ul>
            <li>
              Strong knowledge of design/development, user experience, best
              practice, web standards, architecture and full project life cycle
            </li>
            <li>
              Exceptional understanding of front end technologies: HTML/CSS/JS,
              responsive design, accessibility, performance, components
            </li>
            <li>
              Ability to plan, design and build websites ranging from small
              static sites to large dynamic sites
            </li>
            <li>
              Preferred Stack: React/React Native, functional patterns, hooks,
              AWS, NPM, Webpack (apps), Rollup.js (libraries)
            </li>
          </ul>
        </section>
        <section className="employment">
          <h2>Employment History</h2>
          <article>
            <p className="date">3/18 — 7/19 (1 year 6 months)</p>
            <h3>Lead of Front End Engineering, Endpoint Closing</h3>
            <p className="location">El Segundo, CA</p>
            <ul>
              <li>
                Hands on for both web and native product from incubation plans
                to production grade product
              </li>
              <li>
                Directed design team in adapting a more component based process
                and mindset
              </li>
              <li>
                Headed planning and implementation of a universal component
                library to support reuse between multiple applications and
                platforms
              </li>
              <li>
                Noteworthy projects:
                <ul>
                  <li>
                    Cross platform form builder that read in complex JSON
                    schemas for all stages of buying a home, including digital
                    signature and money transfers
                  </li>
                  <li>Advised on analytics, UX, scrum</li>
                  <li>
                    Lead UX presentation for entire company lunch and learn,
                    focused on usability and accessibility
                  </li>
                </ul>
              </li>
              <li>
                React, React Native, Redux, Reselect, Jest, NPM, Jira, Webpack,
                Rollup.js, Babel, ESLint, Segment, responsive web design (RWD),
                Gitlab CI, AWS, DynamoDB, Lambda
              </li>
            </ul>
          </article>
          <article>
            <p className="date">6/14 — 3/18 (3 years 10 months)</p>
            <h3>Manager of Front End Engineering, SKECHERS USA, Inc.</h3>
            <p className="location">Manhattan Beach, CA</p>
            <ul>
              <li>Reported directly to VP of Digital Department</li>
              <li>
                Handled hiring, managing, mentoring and scrum (Scrum Master) for
                5-6 Direct reports
              </li>
              <li>
                Collaborated across various departments and venders regarding
                UX, analytics and A/B testing
              </li>
              <li>
                Responsible for architecting and executing front end solutions
                for multiple high traffic sites including:
                <ul>
                  <li>
                    Consumer facing e-commerce site, extended to 5 locales and
                    growing
                  </li>
                  <li>
                    E-commerce admin portal to manage products, discounts, site
                    content/features, orders and customers for each individual
                    locale
                  </li>
                  <li>
                    B2B solution used within companies like Starbucks and Taco
                    Bell to purchase selected work shoes at a discount
                  </li>
                  <li>
                    B2B admin portal to manage products, discounts, site
                    content/features and orders for each individual company
                  </li>
                  <li>Skechers corporate site</li>
                  <li>
                    SKECHERS Pier to Pier Friendship Walk event signup and
                    donation site, email campaigns, system admin
                  </li>
                </ul>
              </li>
              <li>
                Noteworthy projects:
                <ul>
                  <li>
                    Integrated a custom Data Layer into Google Tag Manager to
                    provide enhanced analytics for multiple vendors
                  </li>
                  <li>
                    AI Chat bot to assist shoppers in finding the perfect shoes
                    based on 3 selections
                  </li>
                  <li>
                    React/Redux environment and complete POC to prepare
                    migration of legacy code base
                  </li>
                  <li>
                    Rewrote skechers.com from the ground up including separate
                    admin site for product, order and site management
                  </li>
                </ul>
              </li>
              <li>
                Backbone, Marionette, CoffeeScript, Handlebars, Zepto, Angular,
                RequireJS, Jasmine, Karma, Squire, Sinon, CasperJS, Sass,
                Bootstrap, HTML5, CSS3, react/redux, Scala, Blackbaud, Constant
                Contact, Google Tag Manager, Jekyll, Jenkins, build automation
              </li>
            </ul>
          </article>
          <article>
            <p className="date">11/09 — 6/14 (4 years 8 months)</p>
            <h3>Lead Web Developer, Beacon Technologies</h3>
            <p className="location">Greensboro, NC</p>
            <ul>
              <li>Develop medium and large scale web sites for clients </li>
              <li>
                Involved in all aspects and phases of project lifecycle from
                proposals to launch
              </li>
              <li>
                Mentor and train team members with continuous documenting of
                standards, best practice and processes
              </li>
              <li>
                Noteworthy Projects:
                <ul>
                  <li>
                    30+ Custom Cascade Server integrations for small, medium and
                    large companies and universities
                  </li>
                  <li>10+ AspDotNetStorefront sites </li>
                  <li>
                    10+ Flash/ActionScript widgets which read in data from
                    custom Cascade Server integrations
                  </li>
                  <li>5+ Custom Wordpress blog integrations</li>
                  <li>
                    5+ In house e-commerce solutions for large global businesses
                  </li>
                  <li>
                    3+ Intranet solutions with mix of blogs, forums, and custom
                    features{' '}
                  </li>
                  <li>
                    2+ Web services to automate content migration that on
                    average required 3-5 temporary hires for 3 months
                  </li>
                  <li>Built and maintained internal knowledgeable system</li>
                </ul>
              </li>
              <li>
                Cascade Server, AspDotNetStorefront, Drupal, WordPress, phpBB,
                Magento, PHP, ASP.NET, classic ASP, XML, XSLT, Velocity, HTML,
                CSS, Javascript, jQuery, W3C, 508, responsive web design (RWD),
                design review, Software Development Life Cycle (SDLC),
                waterfall, SEO, Google Analytics, user experience,
                accessibility, usability, cross-browser compatibility,
                e-commerce, higher-ed, information architecture (IA), creative
                problem solving, team lead, intranets
              </li>
            </ul>
          </article>
          <article>
            <p className="date">12/08 — 12/09 (1 year 2 months)</p>
            <h3>Web Developer, Get You Found Online Marketing</h3>
            <p className="location">Greensboro, NC</p>
            <ul>
              <li>
                Contracted to design and develop medium and large scale web
                sites for clients
              </li>
              <li>
                Majority of work involved theming, configuring and customizing
                Drupal and Magento based websites
              </li>
              <li>Involved in all aspects and phases of project lifecycle</li>
              <li>
                Noteworthy projects:
                <ul>
                  <li>
                    5+ Custom CMS integrations and site development for medium
                    to large sized sites
                  </li>
                  <li>
                    5+ Basic static sites for medium to large sized sites{' '}
                  </li>
                </ul>
              </li>
              <li>
                PHP, SQL, RDMS, MySql, phpMyAdmin, Drupal, Magento, WordPress,
                Joomla, HTML, CSS, Javascript, W3C, Software Development Life
                Cycle (SDLC), advanced CMS setup and configuration, e-commerce
              </li>
            </ul>
          </article>
          <article>
            <p className="date">9/07 — 2/09 (1 year 6 months)</p>
            <h3>Web Developer, Inter-Tech Communications - CarolinaNet</h3>
            <p className="location">Greensboro, NC</p>
            <ul>
              <li>
                Design and develop medium and large scale web sites for clients
              </li>
              <li>Second level IT support</li>
              <li>
                Noteworthy projects:
                <ul>
                  <li>
                    35+ Microsite&#39;s which included domain, DNS, website and
                    email setup and configuration{' '}
                  </li>
                  <li>10+ Small business sites</li>
                  <li>5+ Medium business sites</li>
                  <li>5+ Custom MySpace&#39;s</li>
                  <li>Blackberry server management</li>
                  <li>Migration to Plesk Business Automation</li>
                  <li>Multiple weekly e-newsletters</li>
                </ul>
              </li>
              <li>
                PHP, classic ASP, SQL, RDMS, MySql, phpMyAdmin, domain
                registrar, DNS, virtual private servers (VPS), Virtuozzo, Plesk,
                Plesk Business Automation, Joomla, ZenCart, Drupal, design,
                HTML, CSS, Javascript, W3C, SEO, Google Analytics, Autotask,
                advanced CMS setup and configuration, e-commerce, Adobe Creative
                Suite, Microsoft Office
              </li>
            </ul>
          </article>
        </section>
        <section className="education">
          <h2>Education</h2>
          <h3>
            AAS Web Technologies, Guilford Technical Community College, NC
            (2008)
          </h3>
          <ul>
            <li>
              Academic Achievement award for highest GPA in Web Technologies
              Department (2007, 2008)
            </li>
          </ul>
        </section>
      </div>
    </Page>
  );
};

export default Resume;
