import React from 'react';
import Page from 'components/Page';
import { H1, H2, H3 } from 'components/Typography';
import './styles.scss';

const Resume = () => {
  return (
    <Page title="Resume" description="Resume">
      <div className="content setwidth resume">
        <section className="intro">
          <a
            target="_blank"
            className="adobe"
            href="/pdfs/TiffanyLeaMay_resume_11_2020.pdf"
          >
            <img src="/images/icons/adobe.png" alt="Adobe PDF" /> Adobe PDF
          </a>
          <H1>Tiffany Lea May</H1>
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

        <section className="summary">
          <H2>Summary</H2>
          <p>
            Engineering leader with 12+ years of experience. Ready to leverage
            decision-making abilities for all things engineering and be heavily
            involved in all aspects of product development.
          </p>
        </section>
        <section className="skills">
          <H2>Skills Profile</H2>
          <ul>
            <li>
              Modular mindset and a passion for automation in streamlining
              multi-platform applications across mobile devices and web
              efficiently
            </li>
            <li>
              Extensive background in data structure architecture and
              management, user experience, best practice, web standards, full
              project life cycle, responsive design, accessibility, performance,
              code reuse/modular mindset
            </li>
            <li>
              Ability to plan, design and build elegantly simple solutions
              regardless of problem complexity, tech stack or industry
            </li>
            <li>
              Natural leader, thinker and engineer with a user focused drive and
              a high bar for quality solutions
            </li>
          </ul>
        </section>
        <section className="employment">
          <H2>Employment History</H2>
          <article>
            <p className="date">7/19 — Current</p>
            <H3>Founder, Director of Front End Engineering, Tiffany Lea LLC</H3>
            <p className="location">West Hollywood, CA</p>
            <ul>
              <li>Web development and consulting services</li>
              <li>
                React, React Native, GraphQL, Apollo, Storybook, NPM, Github,
                AWS, Amplify, Cloud Formation, AppSync, Cloud Watch, S3,
                Route53, DynamoDB, Cognito, Android, iOS, Continuous integration
                (CI), continuous delivery (CD)
              </li>
            </ul>
          </article>
          <article>
            <p className="date">3/18 — 7/19 (1 year 6 months)</p>
            <H3>Lead of Front End Engineering, Endpoint Closing</H3>
            <p className="location">El Segundo, CA</p>
            <ul>
              <li>
                Led the development of both web and native applications from
                inception to production
              </li>
              <li>
                Architected a smart-form builder that dynamically generates
                forms throughout the entire home-closing process
              </li>
              <li>
                Directed the design team in adapting a more component-based
                process and mindset
              </li>
              <li>
                Facilitated the creation of a universal component library to
                support reuse between multiple applications and platforms
              </li>
              <li>
                Assisted in the planning and implementation of the first
                iteration of website analytics
              </li>
              <li>Performed multiple site audits focused on UX and security</li>
              <li>
                Company-wide UX lunch and learn, focused on usability and
                accessibility
              </li>
              <li>
                React, React Native, Redux, Reselect, Jest, NPM, Jira, Webpack,
                Rollup.js, Babel, ESLint, responsive web design (RWD), Gitlab
                CI, AWS, DynamoDB, Lambda
              </li>
            </ul>
          </article>
          <article>
            <p className="date">6/14 — 3/18 (3 years 10 months)</p>
            <H3>Manager of Front End Engineering, SKECHERS USA, Inc.</H3>
            <p className="location">Manhattan Beach, CA</p>
            <ul>
              <li>
                5-6 Direct reports, reported directly to VP of Digital
                Department for all things front end
              </li>
              <li>
                Collaborated across various departments and vendors regarding
                UX, analytics and A/B testing
              </li>
              <li>
                Responsible for architecture and execution of front end
                solutions for multiple high traffic sites:
                <ul>
                  <li>
                    Consumer-facing e-commerce site, extended to 5 locales and
                    growing
                  </li>
                  <li>
                    E-commerce admin portal to manage products, discounts, site
                    content/features, orders and customers for each individual
                    locale
                  </li>
                  <li>
                    B2B solution used within companies like Starbucks and Taco
                    Bell
                  </li>
                  <li>
                    B2B admin portal to manage products, discounts, site
                    content/features and orders for each individual company
                  </li>
                  <li>
                    SKECHERS Pier to Pier Friendship Walk event signup and
                    donation site, email campaigns, system admin
                  </li>
                  <li>SKECHERS corporate site</li>
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
                    AI chatbot to assist shoppers in finding the perfect shoes
                    based on 3 selections
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
            <H3>Lead Web Developer, Beacon Technologies</H3>
            <p className="location">Greensboro, NC</p>
            <ul>
              <li>Develop medium and large scale web sites for clients </li>
              <li>
                Involved in all aspects and phases of the project lifecycle from
                proposals to launch
              </li>
              <li>
                Mentor and train team members with continuous documenting of
                standards, best practice and processes
              </li>
              <li>
                Projects:
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
                    3+ Intranet solutions with a mix of blogs, forums, and
                    custom features
                  </li>
                  <li>
                    2+ Web services to automate content migration that on
                    average required 3-5 temporary hires for 3 months
                  </li>
                  <li>
                    Built and maintained an internal knowledge base system
                  </li>
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
            <p className="date">11/08 — 12/09 (1 year 2 months)</p>
            <H3>Web Developer, Get You Found Online Marketing</H3>
            <p className="location">Greensboro, NC</p>
            <ul>
              <li>
                Contracted to design and develop medium and large scale web
                sites for clients
              </li>
              <li>
                Work involved theming, configuring and customizing Drupal and
                Magento based websites
              </li>
              <li>
                Involved in all aspects and phases of the project lifecycle
              </li>
              <li>
                Projects:
                <ul>
                  <li>
                    5+ Custom CMS integrations and site development for medium
                    to large-sized sites
                  </li>
                  <li>5+ Basic static sites for small to medium-sized sites</li>
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
            <H3>Web Developer, Inter-Tech Communications - CarolinaNet</H3>
            <p className="location">Greensboro, NC</p>
            <ul>
              <li>
                Design and develop medium and large scale web sites for clients
              </li>
              <li>Second level IT support</li>
              <li>
                Projects:
                <ul>
                  <li>
                    35+ Microsite&#39;s which included domain, DNS, website and
                    email setup and configuration
                  </li>
                  <li>15+ Small to medium-sized business sites</li>
                  <li>5+ Custom MySpace&#39;s</li>
                  <li>
                    Blackberry server management, migration to Plesk Business
                    Automation, and multiple weekly e-newsletters
                  </li>
                </ul>
              </li>
              <li>
                PHP, classic ASP, SQL, RDMS, MySql, phpMyAdmin, domain
                registrar, DNS, virtual private servers (VPS), Virtuozzo, Plesk,
                Plesk Business Automation, Joomla, ZenCart, Drupal, design,
                HTML, CSS, Javascript, W3C, SEO, Google Analytics, Autotask,
                advanced CMS configuration, e-commerce, Adobe Creative Suite
              </li>
            </ul>
          </article>
        </section>
        <section className="education">
          <H2>Education</H2>
          <H3>
            AAS Web Technologies, Guilford Technical Community College, NC
            (2008)
          </H3>
          <ul>
            <li>
              Academic Achievement Award for highest GPA in Web Technologies
              Department (2007, 2008)
            </li>
          </ul>
          <H3>
            An Event Apart, The web design conference for UX & front-end experts
            (2012, 2015, 2017, 2019)
          </H3>
          <H3>Adobe MAX, The Creativity Conference (2019)</H3>
        </section>
      </div>
    </Page>
  );
};

export default Resume;
