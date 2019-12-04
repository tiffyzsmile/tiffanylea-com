import React from 'react';
import Page from 'components/Page';
import { H1, H2 } from 'components/Typography';
import './styles.scss';

const Skills = () => {
  return (
    <Page title="Skills" description="My tech Skills">
      <div className="content setwidth">
        <H1>Skills</H1>
        <p>
          Items still need organizing and styling... just updating for test.
        </p>
        <section className="grid">
          <div>
            <H2>Languages</H2>
            <ul>
              <li>
                Mark Up
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </li>
              <li>
                Data
                <ul>
                  <li>JSON</li>
                  <li>XML</li>
                </ul>
              </li>
              <li>
                Programming
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>CoffeeScript</li>
                  <li>Velocity</li>
                  <li>XSLT</li>
                  <li>PHP</li>
                  <li>ASP / ASP.NET</li>
                  <li>ActionScript</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <H2>AWS</H2>
            <ul>
              <li>Amplify Console</li>
              <li>Amplify CLI</li>
              <li>Simple Email Service SES</li>
              <li>Command Line Interface</li>
              <li>Budgets</li>
              <li>Cognito</li>
              <li>Route 53</li>
              <li>CloudFormation</li>
              <li>CloudTrail</li>
              <li>DynamoDB</li>
              <li>AppSync</li>
              <li>Simple Storage Service S3</li>
              <li>Lambda</li>
            </ul>
          </div>
          <div>
            <H2>Databases</H2>
            <div className="grid">
              <ul>
                <li>
                  Graph Database
                  <ul>
                    <li>OrientDB</li>
                    <li>Neo4j</li>
                  </ul>
                </li>
                <li>
                  Key-Value Store
                  <ul>
                    <li>DynamoDB</li>
                  </ul>
                </li>
                <li>
                  Document Store
                  <ul>
                    <li>MongoDB</li>
                    <li>CouchDB</li>
                    <li>Cloudant</li>
                  </ul>
                </li>
                <li>
                  Relational Database
                  <ul>
                    <li>MySQL</li>
                    <li>MariaDB</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <H2>E-Commerce/CMS</H2>
            <ul>
              <li>
                Payment Gateways
                <ul>
                  <li>Braintree</li>
                  <li>PayPal</li>
                </ul>
              </li>
              <li>
                E-Commerce
                <ul>
                  <li>Custom in-house</li>
                  <li>AspDotNetStorefront</li>
                  <li>Magento</li>
                  <li>WooCommerce (WordPress)</li>
                  <li>Ubercart (Drupal)</li>
                  <li>VirtueMart (Joomla!)</li>
                  <li>ZenCart</li>
                </ul>
              </li>
              <li>
                CMS/Blogging/Forum Platforms
                <ul>
                  <li>Custom in-house</li>
                  <li>phpBB</li>
                  <li>Blackbaud</li>
                  <li>WordPress</li>
                  <li>Cascade Server</li>
                  <li>Drupal</li>
                  <li>Joomla!</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <H2>Libraries and Frameworks</H2>
            <div className="grid">
              <ul>
                <li>
                  Libraries
                  <ul>
                    <li>React</li>
                    <li>React-Native</li>
                    <li>Backbone.js</li>
                    <li>Angular.js</li>
                    <li>Lo-Dash/Underscore</li>
                    <li>jQuery/Zepto</li>
                  </ul>
                </li>
                <li>
                  Frameworks
                  <ul>
                    <li>Marionette</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Modules</H2>
            <div className="grid">
              <ul>
                <li>
                  Bundlers
                  <ul>
                    <li>Rollup</li>
                    <li>Webpack</li>
                  </ul>
                </li>
                <li>
                  Loaders
                  <ul>
                    <li>RequireJS</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Design/UI/UX</H2>
            <div className="grid">
              <ul>
                <li>
                  Design
                  <ul>
                    <li>Design Review</li>
                    <li>Modular Design</li>
                    <li>Functional Design</li>
                  </ul>
                </li>
                <li>
                  User Experience (UX)
                  <ul>
                    <li>UX Audit</li>
                    <li>Accessibility</li>
                    <li>Usability</li>
                    <li>Information architecture (IA)</li>
                  </ul>
                </li>
                <li>
                  User Testing
                  <ul>
                    <li>UserTesting.com</li>
                    <li>A/B Testing</li>
                    <li>Third Party Resources</li>
                  </ul>
                </li>
                <li>
                  Analytics
                  <ul>
                    <li>UserTesting.com</li>
                    <li>Google Analytics (GA)</li>
                    <li>Google Tag Manager (GTM)</li>
                    <li>Segment</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Other</H2>
            <div className="grid">
              <ul>
                <li>Functional Programming</li>
                <li>Responsive Web Design (RWD)</li>
                <li>Section 508 Compliance</li>
                <li>W3C Web Standards</li>
                <li>Cross Browser Compatibility</li>
                <li>Creative Problem Solving</li>
                <li>Software Development Life Cycle (SDLC)</li>
                <li>
                  Continuous Integration/Delivery (CI/CD)
                  <ul>
                    <li>AWS Amplify</li>
                    <li>Gitlab CI/CD</li>
                    <li>Jenkins</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Industry/Type</H2>
            <div className="grid">
              <ul>
                <li>Startup</li>
                <li>Real Estate</li>
                <li>Mobile</li>
                <li>Brand</li>
                <li>Fundraising</li>
                <li>E-Commerce</li>
                <li>Higher Ed</li>
                <li>Financial</li>
                <li>Intranet</li>
                <li>Informational</li>
                <li>Global</li>
                <li>Business to Business (B2B)</li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Code Quality</H2>
            <div className="grid">
              <ul>
                <li>
                  Project Management
                  <ul>
                    <li>Atlassian Jira</li>
                  </ul>
                </li>
                <li>
                  Documentation
                  <ul>
                    <li>StackEdit</li>
                    <li>Storybook</li>
                    <li>Confluence</li>
                  </ul>
                </li>
                <li>
                  Linting
                  <ul>
                    <li>ESLint</li>
                  </ul>
                </li>
                <li>
                  Compiler
                  <ul>
                    <li>Babel</li>
                  </ul>
                </li>
                <li>
                  Formatting
                  <ul>
                    <li>Prettier</li>
                  </ul>
                </li>
                <li>
                  Testing
                  <ul>
                    <li>Jest</li>
                    <li>Enzyme</li>
                    <li>CasperJS</li>
                    <li>Karma</li>
                    <li>Jasmine</li>
                    <li>Sinon.js</li>
                    <li>Squire.js</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Server Management</H2>
            <div className="grid">
              <ul>
                <li>Virtuozzo</li>
                <li>Parallels Business Automation</li>
                <li>HSPcomplete</li>
                <li>Plesk</li>
                <li>CPanel</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
};

export default Skills;
