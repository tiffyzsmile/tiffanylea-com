const tagsByCategory = {
  analytics: {
    name: 'Analytics',
    tags: [
      {
        id: 'google-analytics',
        name: 'Google Analytics',
        category: 'analytics'
      },
      {
        id: 'google-tag-manager',
        name: 'Google Tag Manager',
        category: 'analytics'
      },
      { id: 'segment-io', name: 'Segment', category: 'analytics' }
    ]
  },
  aws: {
    name: 'AWS',
    tags: [
      { id: 'aws-amplify', name: 'Amplify', category: 'aws' },
      { id: 'aws-appsync', name: 'AppSync', category: 'aws' },
      { id: 'aws-cloudformation', name: 'CloudFormation', category: 'aws' },
      { id: 'aws-cloudfront', name: 'CloudFront', category: 'aws' },
      { id: 'aws-cloudwatch', name: 'CloudWatch', category: 'aws' },
      { id: 'aws-cognito', name: 'Cognito', category: 'aws' },
      { id: 'aws-dynamodb', name: 'DynamoDB', category: 'aws' },
      { id: 'aws-elasticsearch', name: 'Elasticsearch', category: 'aws' },
      {
        id: 'aws-identity-and-access-management-iam',
        name: 'IAM',
        category: 'aws'
      },
      { id: 'aws-lambda', name: 'Lambda', category: 'aws' },
      { id: 'aws-pinpoint', name: 'Pinpoint', category: 'aws' },
      { id: 'aws-route-53', name: 'Route 53', category: 'aws' },
      { id: 'aws-simple-storage-service-s3', name: 'S3', category: 'aws' },
      { id: 'aws-simple-email-service', name: 'SES', category: 'aws' }
    ]
  },
  cms: {
    name: 'CMS',
    tags: [
      { id: 'cascade-server', name: 'Cascade Server', category: 'cms' },
      { id: 'cms-custom-in-house', name: 'Custom in-house', category: 'cms' },
      { id: 'drupal', name: 'Drupal', category: 'cms' },
      { id: 'cms-wordpress', name: 'Wordpress', category: 'cms' }
    ]
  },
  data: {
    name: 'Data',
    tags: [
      { id: 'data-cloudant', name: 'Cloudant', category: 'data' },
      { id: 'data-couch-db', name: 'CouchDB', category: 'data' },
      { id: 'data-dynamodb', name: 'DynamoDB', category: 'data' },
      { id: 'data-mariadb', name: 'MariaDB', category: 'data' },
      { id: 'data-mongodb', name: 'MongoDB', category: 'data' },
      { id: 'data-mysql', name: 'MySQL', category: 'data' },
      { id: 'data-orient-db', name: 'OrientDB', category: 'data' },
      { id: 'data-neo4j', name: 'neo4j', category: 'data' }
    ]
  },
  'e-commerce': {
    name: 'E-Commerce',
    tags: [
      {
        id: 'ecomm-aspdotnetstorefront',
        name: 'AspDotNetStorefront',
        category: 'e-commerce'
      },
      {
        id: 'ecom-custom-in-house',
        name: 'Custom in-house',
        category: 'e-commerce'
      },
      { id: 'ecomm-magento', name: 'Magento', category: 'e-commerce' },
      { id: 'ecom-other', name: 'Other', category: 'e-commerce' }
    ]
  },
  framework: {
    name: 'Framework',
    tags: [
      { id: 'framework-angularjs', name: 'AngularJS', category: 'framework' },
      {
        id: 'framework-backbone-js',
        name: 'Backbone.js',
        category: 'framework'
      },
      { id: 'framework-react', name: 'React', category: 'framework' },
      {
        id: 'framework-react-native',
        name: 'React-Native',
        category: 'framework'
      }
    ]
  },
  industry: {
    name: 'Industry',
    tags: [
      {
        id: 'attorneys-law-firms',
        name: 'Attorneys/Law Firms',
        category: 'industry'
      },
      { id: 'automotive', name: 'Automotive', category: 'industry' },
      {
        id: 'customer-experience-analytics',
        name: 'CX analytics',
        category: 'industry'
      },
      { id: 'e-commerce', name: 'E-Commerce', category: 'industry' },
      { id: 'financial', name: 'Financial', category: 'industry' },
      { id: 'global', name: 'Global', category: 'industry' },
      { id: 'higher-ed', name: 'Higher Ed', category: 'industry' },
      { id: 'language', name: 'Language', category: 'industry' },
      { id: 'manufacturing', name: 'Manufacturing', category: 'industry' },
      { id: 'medical', name: 'Medical', category: 'industry' },
      { id: 'non-profit', name: 'Non-Profit', category: 'industry' },
      { id: 'real-estate', name: 'Real Estate', category: 'industry' },
      { id: 'religious', name: 'Religious', category: 'industry' },
      { id: 'tourism', name: 'Tourism', category: 'industry' },
      { id: 'utilities', name: 'Utilities', category: 'industry' }
    ]
  },
  language: {
    name: 'Language',
    tags: [
      { id: 'asp', name: 'ASP', category: 'language' },
      { id: 'asp-net', name: 'ASP.NET', category: 'language' },
      { id: 'actionscript', name: 'ActionScript', category: 'language' },
      { id: 'coffeescript', name: 'CoffeeScript', category: 'language' },
      { id: 'html', name: 'HTML', category: 'language' },
      { id: 'json', name: 'JSON', category: 'language' },
      { id: 'javascript', name: 'JavaScript', category: 'language' },
      { id: 'php', name: 'PHP', category: 'language' },
      { id: 'typescript', name: 'TypeScript', category: 'language' },
      { id: 'velocity', name: 'Velocity', category: 'language' },
      { id: 'xml', name: 'XML', category: 'language' },
      { id: 'xslt', name: 'XSLT', category: 'language' }
    ]
  },
  'project-type': {
    name: 'Project Type',
    tags: [
      { id: 'blog', name: 'Blog', category: 'project-type' },
      {
        id: 'type-b2b',
        name: 'Business to Business (B2B)',
        category: 'project-type'
      },
      { id: 'type-e-commerce', name: 'E-Commerce', category: 'project-type' },
      { id: 'type-fundraising', name: 'Fundraising', category: 'project-type' },
      {
        id: 'type-informational',
        name: 'Informational',
        category: 'project-type'
      },
      { id: 'type-intranet', name: 'Intranet', category: 'project-type' },
      { id: 'type-mobile', name: 'Mobile', category: 'project-type' },
      { id: 'responsive', name: 'Responsive', category: 'project-type' },
      { id: 'type-startup', name: 'Startup', category: 'project-type' }
    ]
  },
  role: {
    name: 'Role',
    tags: [
      { id: 'back-end', name: 'Back End', category: 'role' },
      { id: 'cms-configuration', name: 'CMS Configuration', category: 'role' },
      { id: 'consultant', name: 'Consultant', category: 'role' },
      { id: 'role-design', name: 'Design', category: 'role' },
      { id: 'front-end', name: 'Front End', category: 'role' },
      { id: 'full-stack', name: 'Full Stack', category: 'role' },
      { id: 'lead', name: 'Lead', category: 'role' },
      { id: 'manager', name: 'Manager', category: 'role' }
    ]
  },
  sdlc: {
    name: 'SDLC',
    tags: [
      { id: 'agile', name: 'Agile', category: 'sdlc' },
      { id: 'scrum', name: 'Scrum', category: 'sdlc' },
      { id: 'waterfall', name: 'Waterfall', category: 'sdlc' }
    ]
  },
  tooling: {
    name: 'Tooling',
    tags: [
      { id: 'tooling-babel', name: 'Babel', category: 'tooling' },
      { id: 'tooling-eslint', name: 'ESLint', category: 'tooling' },
      { id: 'library-lodash', name: 'Lo-Dash', category: 'tooling' },
      { id: 'marionette-js', name: 'Marionette.js', category: 'tooling' },
      { id: 'tooling-prettier', name: 'Prettier', category: 'tooling' },
      { id: 'tooling-requirejs', name: 'RequireJS', category: 'tooling' },
      { id: 'tooling-rollup', name: 'Rollup', category: 'tooling' },
      {
        id: 'library-underscore-js',
        name: 'Underscore.js',
        category: 'tooling'
      },
      { id: 'tooling-webpack', name: 'Webpack', category: 'tooling' },
      { id: 'library-zepto-js', name: 'Zepto.js', category: 'tooling' },
      { id: 'library-jquery', name: 'jQuery', category: 'tooling' }
    ]
  },
  'user-experience-ux': {
    name: 'User Experience',
    tags: [
      {
        id: 'accessibility-508',
        name: '508 Compliant',
        category: 'user-experience-ux'
      },
      {
        id: 'ux-accessibility',
        name: 'Accessibility',
        category: 'user-experience-ux'
      },
      {
        id: 'cross-browser-compatibility',
        name: 'Cross Browser Compatibility',
        category: 'user-experience-ux'
      },
      {
        id: 'ui-design-review',
        name: 'Design Review',
        category: 'user-experience-ux'
      },
      {
        id: 'ux-information-architecture',
        name: 'Information architecture',
        category: 'user-experience-ux'
      },
      { id: 'ux-ux-audit', name: 'UX Audit', category: 'user-experience-ux' },
      { id: 'ux-usability', name: 'Usability', category: 'user-experience-ux' },
      {
        id: 'ux-user-testing',
        name: 'User Testing',
        category: 'user-experience-ux'
      },
      {
        id: 'ux-usertesting-com',
        name: 'UserTesting.com',
        category: 'user-experience-ux'
      }
    ]
  },
  year: {
    name: 'Year',
    tags: [
      { id: '2007', name: '2007', category: 'year' },
      { id: '2008', name: '2008', category: 'year' },
      { id: '2009', name: '2009', category: 'year' },
      { id: '2010', name: '2010', category: 'year' },
      { id: '2011', name: '2011', category: 'year' },
      { id: '2012', name: '2012', category: 'year' },
      { id: '2013', name: '2013', category: 'year' },
      { id: '2014', name: '2014', category: 'year' },
      { id: '2015', name: '2015', category: 'year' },
      { id: '2016', name: '2016', category: 'year' },
      { id: '2017', name: '2017', category: 'year' },
      { id: '2018', name: '2018', category: 'year' },
      { id: '2019', name: '2019', category: 'year' },
      { id: '2020', name: '2020', category: 'year' },
      { id: '2021', name: '2021', category: 'year' },
      { id: '2022', name: '2022', category: 'year' },
      { id: '2023', name: '2023', category: 'year' }
    ]
  }
};

export default tagsByCategory;
