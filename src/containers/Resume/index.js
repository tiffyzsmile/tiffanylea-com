import React from 'react';
import Page from 'components/Page';
import { H1, H2, H3, H4 } from 'components/Typography';
import './styles.scss';

const Resume = () => {
  return (
    <Page title="Resume" description="Resume">
      <div className="content setwidth resume">
        <section className="intro">
          <a
            target="_blank"
            className="adobe"
            href="/pdfs/TiffanyLeaMay_resume_2023_03.pdf"
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
            Engineering leader with 15+ years of experience. Ready to leverage
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
              Extensive background in data structure architecture, user
              experience, full project life cycle, responsive design,
              accessibility, performance
            </li>
            <li>
              Ability to plan, design and build elegantly simple solutions
              regardless of problem complexity, tech stack or industry
            </li>
          </ul>
        </section>
        <section className="employment">
          <H2>Employment History</H2>
          <article>
            <p className="date">2/21 — Current</p>
            <H3>Quantum Metric</H3>
            <p className="location">Colorado Springs, CO (Remote)</p>
            <div className="role">
              <p className="date">1 year</p>
              <H4>Staff Software Engineer</H4>
              <p>
                Worked across teams and departments to create the foundations
                for Margarita Design System:
              </p>
              <ul>
                <li>
                  Worked with the UXR team to survey engineers about the current
                  ecosystem and pain points
                </li>
                <li>
                  Planned and executed solutions for docs, component explorer,
                  guidelines, UI library, Figma integration, and more...
                </li>
                <li>
                  Building in automation and better developer experience
                  wherever possible
                </li>
                <li>
                  Involved in interface inventories, pattern discovery,
                  guideline creation, personas, user journeys, etc
                </li>
                <li>
                  Share progress with the engineering department via multiple
                  channels
                </li>
              </ul>
            </div>
            <div className="role">
              <p className="date">1 year</p>
              <H4>Senior Software Engineer</H4>
              <ul>
                <li>
                  Creation and ongoing maintenance of Storybook including
                  documentation to help align vocabulary, architecture, and
                  thought process
                </li>
                <li>
                  Working across engineering, product, and design to define a
                  Design System road map
                </li>
                <li>
                  Contributed to many teams/features including replay, live
                  replay, dashboards and sandbox
                </li>
                <li>
                  Participated in hiring, ongoing documentation, defining code
                  standards and more
                </li>
              </ul>
            </div>
            <p className="small">
              Typescript, React, MobX, D3, Storybook, Figma, GraphQL, SCSS,
              Docker
            </p>
          </article>
          <article>
            <p className="date">7/19 — 2/21 (1 year 8 months)</p>
            <H3>Founder, Tiffany Lea LLC</H3>
            <p className="location">West Hollywood, CA</p>
            <ul>
              <li>Web development and consulting services</li>
            </ul>
            <p className="small">
              React, React Native, GraphQL, Apollo, Storybook, NPM, Github, AWS,
              Amplify, Cloud Formation, AppSync, Cloud Watch, S3, Route53,
              DynamoDB, Cognito, Android, iOS, Continuous integration (CI),
              continuous delivery (CD)
            </p>
          </article>
          <article>
            <p className="date">3/18 — 7/19 (1 year 6 months)</p>
            <H3>Endpoint Closing</H3>
            <p className="location">El Segundo, CA</p>

            <div className="role">
              <p className="date">1 year</p>
              <H4>Lead of Front End Engineering</H4>
              <ul>
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
                <li>
                  Company-wide UX lunch and learn, focused on usability and
                  accessibility
                </li>
              </ul>
            </div>
            <div className="role">
              <p className="date">6 months</p>
              <H4>Senior JavaScript Engineer, BCG Digital Ventures</H4>
              <ul>
                <li>
                  Contract work during incubation & initial development phase of
                  Endpoint Closing
                </li>
                <li>
                  Assisted in developing both web and native applications from
                  inception to production
                </li>
                <li>
                  Architected a smart-form builder that dynamically generates
                  forms based on JSON schemas for the entire closing process,
                  including digital signatures and money transfers
                </li>
              </ul>
            </div>
            <p className="small">
              React, React Native, Redux, Reselect, Jest, NPM, Jira, Webpack,
              Rollup.js, Babel, ESLint, responsive web design (RWD), Gitlab CI,
              AWS, DynamoDB, Lambda
            </p>
          </article>
          <article>
            <p className="date">6/14 — 3/18 (3 years 10 months)</p>
            <H3>SKECHERS USA, Inc.</H3>
            <p className="location">Manhattan Beach, CA</p>

            <div className="role">
              <p className="date">1 year</p>
              <H4>Manager of Front End Engineering</H4>
              <ul>
                <li>
                  5-6 Direct reports, reported directly to VP of Digital
                  Department for all things front end
                </li>
                <li>
                  Integrated a custom Data Layer into Google Tag Manager to
                  provide enhanced analytics for multiple vendors
                </li>
                <li>
                  AI chatbot to assist shoppers in finding the perfect shoes
                  based on 3 selections
                </li>
                <li>
                  Responsible for architecture and execution of front end
                  solutions for multiple high traffic sites
                </li>
              </ul>
            </div>
            <div className="role">
              <p className="date">10 months</p>
              <H4>Senior Javascript Engineer</H4>
              <ul>
                <li>
                  Rewrote B2B solution used within companies like Starbucks and
                  Taco Bell including separate admin site to manage products,
                  discounts, site content/features and orders for each company
                </li>
                <li>
                  Collaborated across departments and vendors regarding
                  responsive solutions, UI/UX, analytics and A/B testing of
                  multiple websites
                </li>
              </ul>
            </div>
            <div className="role">
              <p className="date">1 year</p>
              <H4>Javascript Engineer</H4>
              <ul>
                <li>
                  Extended skechers.com to multiple locales by adding
                  functionality, payment processors and other locale specific
                  features
                </li>
                <li>
                  Per locale settings, language and feature toggles could be
                  adjusted via admin portal
                </li>
                <li>SKECHERS corporate site</li>
              </ul>
            </div>
            <div className="role">
              <p className="date">1 year</p>
              <H4>Front-End Developer</H4>
              <ul>
                <li>Implemented responsive solutions for existing websites</li>
                <li>
                  Managed SkechersFriendshipWalk.com and assisted in any
                  technical needs (registration, email campaigns, analytics,
                  system admin)
                </li>
                <li>
                  Joined team in rewriting Skechers.com from the ground up
                  including a separate admin site for product, order and site
                  management
                </li>
              </ul>
            </div>

            <p className="small">
              Backbone, Marionette, CoffeeScript, Handlebars, Zepto, Angular,
              RequireJS, Jasmine, Karma, Squire, Sinon, CasperJS, Sass,
              Bootstrap, HTML5, CSS3, react/redux, Scala, Blackbaud, Constant
              Contact, Google Tag Manager, Jekyll, Jenkins, build automation
            </p>
          </article>
          <article>
            <p className="date">11/09 — 6/14 (4 years 8 months)</p>
            <H3>Lead Web Developer, Beacon Technologies</H3>
            <p className="location">Greensboro, NC</p>
            <ul>
              <li>
                Involved in all aspects and phases of the project lifecycle from
                proposals to launch
              </li>
              <li>
                Mentor and train team members with continuous documenting of
                standards, best practice and processes
              </li>
              <li>
                30+ Custom Cascade Server integrations for small, medium and
                large companies and universities
              </li>
              <li>10+ AspDotNetStorefront sites </li>
              <li>
                10+ Flash/ActionScript widgets which read in data from custom
                Cascade Server integrations
              </li>
              <li>5+ Custom Wordpress blog integrations</li>
              <li>
                5+ In house e-commerce solutions for large global businesses
              </li>
              <li>
                3+ Intranet solutions with a mix of blogs, forums, and custom
                features
              </li>
              <li>
                2+ Web services to automate content migration that on average
                required 3-5 temporary hires for 3 months
              </li>
              <li>Built and maintained an internal knowledge base system</li>
            </ul>
            <p className="small">
              Cascade Server, AspDotNetStorefront, Drupal, WordPress, phpBB,
              Magento, PHP, ASP.NET, classic ASP, XML, XSLT, Velocity, HTML,
              CSS, Javascript, jQuery, W3C, 508, responsive web design (RWD),
              design review, Software Development Life Cycle (SDLC), waterfall,
              SEO, Google Analytics, user experience, accessibility, usability,
              cross-browser compatibility, e-commerce, higher-ed, information
              architecture (IA), creative problem solving, team lead, intranets
            </p>
          </article>
          <article>
            <p className="date">11/08 — 12/09 (1 year 2 months)</p>
            <H3>Web Developer, Get You Found Online Marketing</H3>
            <p className="location">Greensboro, NC</p>
            <ul>
              <li>
                Contracted to design and develop medium to large scale web sites
                for clients
              </li>
              <li>
                Involved in all aspects and phases of the project lifecycle
              </li>
              <li>
                10+ Custom CMS integrations including theming, configuring and
                customizing Drupal and Magento based websites
              </li>
            </ul>
            <p className="small">
              PHP, SQL, RDMS, MySql, phpMyAdmin, Drupal, Magento, WordPress,
              Joomla, HTML, CSS, Javascript, W3C, Software Development Life
              Cycle (SDLC), advanced CMS setup and configuration, e-commerce
            </p>
          </article>
          <article>
            <p className="date">9/07 — 2/09 (1 year 6 months)</p>
            <H3>Web Developer, Inter-Tech Communications - CarolinaNet</H3>
            <p className="location">Greensboro, NC</p>
            <ul>
              <li>
                Blackberry server management, migration to Plesk Business
                Automation, multiple weekly e-newsletters, second level IT
                support
              </li>

              <li>
                35+ Microsite&#39;s which included domain, DNS, website and
                email setup and configuration
              </li>
              <li>15+ Small to medium-sized business sites</li>
              <li>5+ Custom MySpace&#39;s</li>
            </ul>
            <p className="small">
              PHP, classic ASP, SQL, RDMS, MySql, phpMyAdmin, domain registrar,
              DNS, virtual private servers (VPS), Virtuozzo, Plesk, Plesk
              Business Automation, Joomla, ZenCart, Drupal, design, HTML, CSS,
              Javascript, W3C, SEO, Google Analytics, Autotask, advanced CMS
              configuration, e-commerce, Adobe Creative Suite
            </p>
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
