import React from 'react';
import Page from 'components/Page';
import { H1, H2, Strong } from 'components/Typography';
import './styles.scss';

const Skills = () => {
  return (
    <Page title="Skills" description="My tech Skills">
      <div className="content setwidth skills">
        <H1>Skills</H1>
        <p>
          <Strong>TLDR</Strong>: The many different tools, technologies,
          methodologies and blabla that I{`'`}ve had to dive into at full depths
          over the years is overwhelming. This is a gigantic WIP.
        </p>
        <section className="grid">
          <div>
            <H2>Languages</H2>
            <ul>
              <li>HTML5 (Markup)</li>
              <li>CSS3 (Markup)</li>
              <li>JSON (Data)</li>
              <li>XML (Data)</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>CoffeeScript</li>
              <li>Velocity</li>
              <li>XSLT</li>
              <li>PHP</li>
              <li>ASP / ASP.NET</li>
              <li>ActionScript</li>
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
            <div>
              <ul>
                <li>OrientDB (Graph)</li>
                <li>Neo4j (Graph)</li>
                <li>DynamoDB (Key-Value)</li>
                <li>MongoDB (Document)</li>
                <li>CouchDB (Document)</li>
                <li>Cloudant (Document)</li>
                <li>MySQL (Relational)</li>
                <li>MariaDB (Relational)</li>
              </ul>
            </div>
          </div>
          <div>
            <H2>E-Commerce</H2>
            <ul>
              <li>Custom in-house</li>
              <li>AspDotNetStorefront</li>
              <li>Magento</li>
              <li>WooCommerce (WordPress)</li>
              <li>Ubercart (Drupal)</li>
              <li>VirtueMart (Joomla!)</li>
              <li>ZenCart</li>
              <li>
                Payment Gateways
                <ul>
                  <li>Braintree</li>
                  <li>Element</li>
                  <li>PayPal</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <H2>CMS Platforms</H2>
            <div>
              <ul>
                <li>Custom in-house</li>
                <li>phpBB</li>
                <li>Blackbaud</li>
                <li>WordPress</li>
                <li>Cascade Server</li>
                <li>Drupal</li>
                <li>Joomla!</li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Libraries/Frameworks</H2>
            <div>
              <ul>
                <li>React</li>
                <li>React-Native</li>
                <li>Backbone.js</li>
                <li>Marionette</li>
                <li>Angular.js</li>
                <li>Lo-Dash/Underscore</li>
                <li>jQuery/Zepto</li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Code Tools</H2>
            <div>
              <ul>
                <li>ESLint (Lint)</li>
                <li>Babel (Compile)</li>
                <li>Prettier (Format)</li>
                <li>Rollup (Bundler)</li>
                <li>Webpack (Bundler)</li>
                <li>RequireJS (Loader)</li>
              </ul>
            </div>
          </div>
          <div>
            <H2>User Interface (UI)</H2>
            <div>
              <ul>
                <li>Design Review</li>
                <li>Modular Design</li>
                <li>Functional Design</li>
                <li>
                  Software
                  <ul>
                    <li>Sketch</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Fireworks</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <H2>User Experience (UX)</H2>
            <div>
              <ul>
                <li>UX Audit</li>
                <li>Accessibility</li>
                <li>Usability</li>
                <li>Information architecture (IA)</li>

                <li>
                  User Testing
                  <ul>
                    <li>UserTesting.com</li>
                    <li>A/B Testing</li>
                    <li>Third Party Resources</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Analytics</H2>
            <div>
              <ul>
                <li>UserTesting.com</li>
                <li>Google Analytics (GA)</li>
                <li>Google Tag Manager (GTM)</li>
                <li>Segment</li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Other</H2>
            <div>
              <ul>
                <li>Functional Programming</li>
                <li>Responsive Web Design (RWD)</li>
                <li>Section 508 Compliance</li>
                <li>W3C Web Standards</li>
                <li>Cross Browser Compatibility</li>
                <li>Creative Problem Solving</li>
                <li>Software Development Life Cycle (SDLC)</li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Devops</H2>
            <div>
              <ul>
                <li>Continuous Integration (CI)</li>
                <li>Continuous Delivery (CD)</li>
                <li>AWS Amplify</li>
                <li>Gitlab CI/CD</li>
                <li>Jenkins</li>
                <li>Gulp</li>
                <li>Grunt</li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Application Type</H2>
            <div>
              <ul>
                <li>Startup</li>
                <li>Brand</li>
                <li>Fundraising</li>
                <li>Auto Auction</li>
                <li>E-Commerce</li>
                <li>Mobile</li>
                <li>Intranet</li>
                <li>Informational</li>
                <li>Business to Business (B2B)</li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Industry</H2>
            <div>
              <ul>
                <li>Real Estate</li>
                <li>E-Commerce</li>
                <li>Higher Ed</li>
                <li>Manufacturing</li>
                <li>Automotive</li>
                <li>Attorneys/Law Firms</li>
                <li>Financial</li>
                <li>Medical Supplies</li>
                <li>Natural Gas/Power Utilities</li>
                <li>Tourism</li>
                <li>Global</li>
                <li>Non-profits and Religious</li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Project Management</H2>
            <div>
              <ul>
                <li>
                  Planning
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
              </ul>
            </div>
          </div>
          <div>
            <H2>Testing</H2>
            <div>
              <ul>
                <li>Jest</li>
                <li>Enzyme</li>
                <li>CasperJS</li>
                <li>Karma</li>
                <li>Jasmine</li>
                <li>Sinon.js</li>
                <li>Squire.js</li>
              </ul>
            </div>
          </div>
          <div>
            <H2>Server Management</H2>
            <div>
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
