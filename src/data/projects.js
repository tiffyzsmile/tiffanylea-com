/* eslint-disable */
const projects = [
  {
    id: 'tiffanylea-web',
    name: 'Tiffany Lea',
    date: '2020-06-01',
    description:
      'My own portfolio site to keep track of projects and have a playground for new tech.',
    features: [],
    url: 'https://www.tiffanylea.com/',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-home.png',
        originalAlt: 'Tiffany Lea',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-about.png',
        originalAlt: 'Tiffany Lea',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-about.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-resume.png',
        originalAlt: 'Tiffany Lea',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-resume.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-portfolio.png',
        originalAlt: 'Tiffany Lea',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-portfolio.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-portfolio-item.png',
        originalAlt: 'Tiffany Lea',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-portfolio-item.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-portfolio-filters.png',
        originalAlt: 'Tiffany Lea',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-portfolio-filters.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-reviews.png',
        originalAlt: 'Tiffany Lea',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-reviews.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-contact.png',
        originalAlt: 'Tiffany Lea',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea-contact.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web/tiffany-lea__logo.svg',
    employer: {
      id: 'tiffany-lea-llc',
      name: 'Tiffany Lea LLC',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/tiffany-lea-llc__logo.svg'
    },
    client: {
      id: 'tiffany-lea-llc',
      name: 'Tiffany Lea LLC',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/tiffany-lea-llc__logo.svg'
    },
    tags: [
      'framework-react',
      '2020',
      'agile',
      'aws-dynamodb',
      'aws-appsync',
      'aws-cloudformation',
      'aws-simple-storage-service-s3',
      'aws-route-53',
      'aws-pinpoint',
      'aws-identity-and-access-management-iam',
      'aws-cloudwatch',
      'aws-simple-email-service',
      'aws-cognito',
      'role-design',
      'google-analytics',
      'data-dynamodb',
      'cms-custom-in-house',
      'aws-amplify',
      'aws-cloudfront',
      'aws-elasticsearch',
      'aws-lambda'
    ],
    categories: [
      'framework',
      'year',
      'sdlc',
      'aws',
      'role',
      'analytics',
      'data',
      'cms'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2020', name: '2020', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'agile', name: 'Agile', display: true }]
      },
      aws: {
        id: 'aws',
        name: 'AWS',
        tags: [
          { id: 'aws-amplify', name: 'Amplify', display: true },
          { id: 'aws-appsync', name: 'AppSync', display: true },
          { id: 'aws-cloudformation', name: 'CloudFormation', display: true },
          { id: 'aws-cloudfront', name: 'CloudFront', display: true },
          { id: 'aws-cloudwatch', name: 'CloudWatch', display: true },
          { id: 'aws-cognito', name: 'Cognito', display: true },
          { id: 'aws-dynamodb', name: 'DynamoDB', display: true },
          { id: 'aws-elasticsearch', name: 'Elasticsearch', display: true },
          {
            id: 'aws-identity-and-access-management-iam',
            name: 'IAM',
            display: true
          },
          { id: 'aws-lambda', name: 'Lambda', display: true },
          { id: 'aws-pinpoint', name: 'Pinpoint', display: true },
          { id: 'aws-route-53', name: 'Route 53', display: true },
          { id: 'aws-simple-storage-service-s3', name: 'S3', display: true },
          { id: 'aws-simple-email-service', name: 'SES', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [
          { id: 'cms-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'role-design', name: 'Design', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-dynamodb', name: 'DynamoDB', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [{ id: 'framework-react', name: 'React', display: true }]
      }
    },
    displayName: 'Tiffany Lea (2020)'
  },
  {
    id: 'tiffanylea-web-admin',
    name: 'Tiffany Lea - Admin',
    date: '2020-01-02',
    description: 'JSON doc was no longer manageable... so I built a CMS.',
    features: [],
    url: 'https://www.tiffanylea.com/admin/',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-projects.png',
        originalAlt: 'Tiffany Lea - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-projects.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-project-detail.png',
        originalAlt: 'Tiffany Lea - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-project-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-employers.png',
        originalAlt: 'Tiffany Lea - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-employers.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-employer-detail.png',
        originalAlt: 'Tiffany Lea - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-employer-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-clients.png',
        originalAlt: 'Tiffany Lea - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-clients.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-client-detail.png',
        originalAlt: 'Tiffany Lea - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-client-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-tags.png',
        originalAlt: 'Tiffany Lea - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-tags.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-tag-detail.png',
        originalAlt: 'Tiffany Lea - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin-tag-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tiffanylea-web-admin/tiffany-lea-admin__logo.svg',
    employer: {
      id: 'tiffany-lea-llc',
      name: 'Tiffany Lea LLC',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/tiffany-lea-llc__logo.svg'
    },
    client: {
      id: 'tiffany-lea-llc',
      name: 'Tiffany Lea LLC',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/tiffany-lea-llc__logo.svg'
    },
    tags: [
      'cms-custom-in-house',
      'agile',
      'aws-identity-and-access-management-iam',
      'aws-route-53',
      'aws-simple-storage-service-s3',
      'framework-react',
      'aws-cognito',
      'aws-cloudfront',
      'aws-cloudwatch',
      'aws-appsync',
      'data-dynamodb',
      'aws-simple-email-service',
      'aws-amplify',
      'aws-dynamodb',
      'aws-lambda',
      '2020',
      'aws-cloudformation',
      'aws-elasticsearch'
    ],
    categories: ['cms', 'sdlc', 'aws', 'framework', 'data', 'year'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2020', name: '2020', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'agile', name: 'Agile', display: true }]
      },
      aws: {
        id: 'aws',
        name: 'AWS',
        tags: [
          { id: 'aws-amplify', name: 'Amplify', display: true },
          { id: 'aws-appsync', name: 'AppSync', display: true },
          { id: 'aws-cloudformation', name: 'CloudFormation', display: true },
          { id: 'aws-cloudfront', name: 'CloudFront', display: true },
          { id: 'aws-cloudwatch', name: 'CloudWatch', display: true },
          { id: 'aws-cognito', name: 'Cognito', display: true },
          { id: 'aws-dynamodb', name: 'DynamoDB', display: true },
          { id: 'aws-elasticsearch', name: 'Elasticsearch', display: true },
          {
            id: 'aws-identity-and-access-management-iam',
            name: 'IAM',
            display: true
          },
          { id: 'aws-lambda', name: 'Lambda', display: true },
          { id: 'aws-route-53', name: 'Route 53', display: true },
          { id: 'aws-simple-storage-service-s3', name: 'S3', display: true },
          { id: 'aws-simple-email-service', name: 'SES', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [
          { id: 'cms-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-dynamodb', name: 'DynamoDB', display: true }]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [{ id: 'framework-react', name: 'React', display: true }]
      }
    },
    displayName: 'Tiffany Lea - Admin (2020)'
  },
  {
    id: 'endpoint-android',
    name: 'Endpoint - Android',
    date: '2019-01-01',
    description:
      'Endpoint is a next-generation Title and Escrow company. Whether you’re an agent, broker, buyer, or seller, Endpoint’s mobile app allows you to stay informed and move the process forward.',
    features: [
      {
        heading: 'Use Endpoint’s mobile app to',
        items: [
          'Track the progress of your transactions in escrow',
          'Complete To-Do’s and move the process forward',
          'Upload, review and eSign documents',
          'Message your dedicated Endpoint team of closing professionals',
          'Send Earnest Money Deposits',
          'Schedule a mobile notary to sign closing documents'
        ]
      }
    ],
    url:
      'https://play.google.com/store/apps/details?id=com.endpointapp&hl=en_US',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-1.png',
        originalAlt: 'Endpoint - Android',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-1.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-2.png',
        originalAlt: 'Endpoint - Android',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-2.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-3.png',
        originalAlt: 'Endpoint - Android',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-3.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-4.png',
        originalAlt: 'Endpoint - Android',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android-4.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-android/endpoint-android__logo.svg',
    employer: {
      id: 'endpoint-closing',
      name: 'Endpoint Closing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/endpoint-closing__logo.svg'
    },
    client: {
      id: 'endpoint-closing',
      name: 'Endpoint Closing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/endpoint-closing__logo.svg'
    },
    tags: [
      'aws-cloudfront',
      'data-dynamodb',
      'aws-simple-storage-service-s3',
      'segment-io',
      'aws-cloudwatch',
      'framework-react-native',
      'aws-lambda',
      'type-startup',
      'aws-dynamodb',
      'typescript',
      'scrum',
      '2019',
      'ux-usertesting-com'
    ],
    categories: [
      'aws',
      'data',
      'analytics',
      'framework',
      'project-type',
      'language',
      'sdlc',
      'year',
      'user-experience-ux'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2019', name: '2019', display: true }]
      },
      aws: {
        id: 'aws',
        name: 'AWS',
        tags: [
          { id: 'aws-cloudfront', name: 'CloudFront', display: true },
          { id: 'aws-cloudwatch', name: 'CloudWatch', display: true },
          { id: 'aws-dynamodb', name: 'DynamoDB', display: true },
          { id: 'aws-lambda', name: 'Lambda', display: true },
          { id: 'aws-simple-storage-service-s3', name: 'S3', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-dynamodb', name: 'DynamoDB', display: true }]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [
          { id: 'framework-react-native', name: 'React-Native', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [{ id: 'segment-io', name: 'Segment', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-startup', name: 'Startup', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [{ id: 'typescript', name: 'TypeScript', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'ux-usertesting-com', name: 'UserTesting.com', display: true }
        ]
      }
    },
    displayName: 'Endpoint - Android (2018)'
  },
  {
    id: 'endpoint-ios',
    name: 'Endpoint - iOS',
    date: '2018-09-01',
    description:
      'Endpoint is a next-generation Title and Escrow company. Whether you’re an agent, broker, buyer, or seller, Endpoint’s mobile app allows you to stay informed and move the process forward.',
    features: [
      {
        heading: 'Use Endpoint’s mobile app to',
        items: [
          'Track the progress of your transactions in escrow',
          'Complete To-Do’s and move the process forward',
          'Upload, review and eSign documents',
          'Message your dedicated Endpoint team of closing professionals',
          'Send Earnest Money Deposits',
          'Schedule a mobile notary to sign closing documents'
        ]
      }
    ],
    url: 'https://apps.apple.com/us/app/endpoint/id1388458874',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-1.png',
        originalAlt: 'Endpoint - iOS',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-1.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-2.png',
        originalAlt: 'Endpoint - iOS',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-2.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-3.png',
        originalAlt: 'Endpoint - iOS',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-3.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-4.png',
        originalAlt: 'Endpoint - iOS',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios-4.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-ios/endpoint-ios__logo.svg',
    employer: {
      id: 'endpoint-closing',
      name: 'Endpoint Closing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/endpoint-closing__logo.svg'
    },
    client: {
      id: 'endpoint-closing',
      name: 'Endpoint Closing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/endpoint-closing__logo.svg'
    },
    tags: [
      'type-startup',
      'scrum',
      'aws-cloudwatch',
      'aws-lambda',
      'data-dynamodb',
      'aws-simple-storage-service-s3',
      'aws-dynamodb',
      '2018',
      'typescript',
      '2019',
      'framework-react-native',
      'segment-io',
      'aws-cloudfront',
      'ux-usertesting-com'
    ],
    categories: [
      'project-type',
      'sdlc',
      'aws',
      'data',
      'year',
      'language',
      'framework',
      'analytics',
      'user-experience-ux'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2018', name: '2018', display: true },
          { id: '2019', name: '2019', display: true }
        ]
      },
      aws: {
        id: 'aws',
        name: 'AWS',
        tags: [
          { id: 'aws-cloudfront', name: 'CloudFront', display: true },
          { id: 'aws-cloudwatch', name: 'CloudWatch', display: true },
          { id: 'aws-dynamodb', name: 'DynamoDB', display: true },
          { id: 'aws-lambda', name: 'Lambda', display: true },
          { id: 'aws-simple-storage-service-s3', name: 'S3', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-dynamodb', name: 'DynamoDB', display: true }]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [
          { id: 'framework-react-native', name: 'React-Native', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [{ id: 'segment-io', name: 'Segment', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-startup', name: 'Startup', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [{ id: 'typescript', name: 'TypeScript', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'ux-usertesting-com', name: 'UserTesting.com', display: true }
        ]
      }
    },
    displayName: 'Endpoint - iOS (2018)'
  },
  {
    id: 'endpoint-web',
    name: 'Endpoint - Web',
    date: '2018-09-01',
    description:
      'Endpoint is a next-generation Title and Escrow company. Whether you’re an agent, broker, buyer, or seller, Endpoint’s mobile app allows you to stay informed and move the process forward.',
    features: [
      {
        heading: 'Use Endpoint to',
        items: [
          'Track the progress of your transactions in escrow',
          'Complete To-Do’s and move the process forward',
          'Upload, review and eSign documents',
          'Message your dedicated Endpoint team of closing professionals',
          'Send Earnest Money Deposits',
          'Schedule a mobile notary to sign closing documents'
        ]
      }
    ],
    url: 'https://endpointclosing.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-web/endpoint-web%400.25x.jpg',
        originalAlt: 'Endpoint - Web',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-web/endpoint-web%400.25x.jpg'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/endpoint-web/endpoint-web__logo.svg',
    employer: {
      id: 'endpoint-closing',
      name: 'Endpoint Closing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/endpoint-closing__logo.svg'
    },
    client: {
      id: 'endpoint-closing',
      name: 'Endpoint Closing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/endpoint-closing__logo.svg'
    },
    tags: [
      'typescript',
      'framework-react-native',
      'scrum',
      'ux-usertesting-com',
      'ux-ux-audit',
      '2018',
      'type-startup',
      'framework-react',
      'responsive',
      'aws-cloudfront',
      'aws-simple-storage-service-s3',
      'aws-dynamodb',
      '2019',
      'segment-io',
      'aws-lambda',
      'data-dynamodb',
      'aws-cloudwatch'
    ],
    categories: [
      'language',
      'framework',
      'sdlc',
      'user-experience-ux',
      'year',
      'project-type',
      'aws',
      'analytics',
      'data'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2018', name: '2018', display: true },
          { id: '2019', name: '2019', display: true }
        ]
      },
      aws: {
        id: 'aws',
        name: 'AWS',
        tags: [
          { id: 'aws-cloudfront', name: 'CloudFront', display: true },
          { id: 'aws-cloudwatch', name: 'CloudWatch', display: true },
          { id: 'aws-dynamodb', name: 'DynamoDB', display: true },
          { id: 'aws-lambda', name: 'Lambda', display: true },
          { id: 'aws-simple-storage-service-s3', name: 'S3', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-dynamodb', name: 'DynamoDB', display: true }]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [
          { id: 'framework-react', name: 'React', display: true },
          { id: 'framework-react-native', name: 'React-Native', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'responsive', name: 'Responsive', display: true },
          { id: 'type-startup', name: 'Startup', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [{ id: 'segment-io', name: 'Segment', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [{ id: 'typescript', name: 'TypeScript', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'ux-ux-audit', name: 'UX Audit', display: true },
          { id: 'ux-usertesting-com', name: 'UserTesting.com', display: true }
        ]
      }
    },
    displayName: 'Endpoint - Web (2018)'
  },
  {
    id: 'giggles-n-hugs',
    name: 'Giggles N Hugs',
    date: '2018-03-15',
    description:
      'Redesigned the entire site (WordPress) to be more modern as well as responsive.  This included everything from planning IA and navigation to actual implementation and launch.',
    features: [],
    url: 'https://www.gigglesnhugs.com/',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-home.png',
        originalAlt: 'Giggles N Hugs',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-about.png',
        originalAlt: 'Giggles N Hugs',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-about.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-parties.png',
        originalAlt: 'Giggles N Hugs',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-parties.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-press.png',
        originalAlt: 'Giggles N Hugs',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-press.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-navigation.png',
        originalAlt: 'Giggles N Hugs',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs-navigation.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/giggles-n-hugs/giggles-n-hugs__logo.svg',
    employer: {
      id: 'tiffany-lea-llc',
      name: 'Tiffany Lea LLC',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/tiffany-lea-llc__logo.svg'
    },
    client: {
      id: 'giggles-n-hugs',
      name: "Giggles N' Hugs",
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/giggles-n-hugs__logo.svg'
    },
    tags: [
      'ux-ux-audit',
      'full-stack',
      'cms-wordpress',
      'front-end',
      'agile',
      'role-design',
      'cms-configuration',
      'ux-usability',
      'ecom-other',
      'consultant',
      'responsive',
      'data-mysql',
      '2018',
      'e-commerce',
      'back-end',
      'ux-information-architecture',
      'type-e-commerce'
    ],
    categories: [
      'user-experience-ux',
      'role',
      'cms',
      'sdlc',
      'e-commerce',
      'project-type',
      'data',
      'year',
      'industry'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2018', name: '2018', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'agile', name: 'Agile', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'back-end', name: 'Back End', display: true },
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'consultant', name: 'Consultant', display: true },
          { id: 'role-design', name: 'Design', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'full-stack', name: 'Full Stack', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'e-commerce', name: 'E-Commerce', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'ux-information-architecture',
            name: 'Information architecture',
            display: true
          },
          { id: 'ux-ux-audit', name: 'UX Audit', display: true },
          { id: 'ux-usability', name: 'Usability', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [{ id: 'ecom-other', name: 'Other', display: true }]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cms-wordpress', name: 'Wordpress', display: true }]
      }
    },
    displayName: 'Giggles N Hugs (2018)'
  },
  {
    id: 'skechers-en-gb',
    name: 'Skechers - English - Great Britain',
    date: '2017-10-02',
    description:
      'Extended United States e-commerce code for the United Kingdom/Ireland locale.',
    features: [
      {
        heading: 'Locale specific',
        items: [
          'Products',
          'Categories',
          'Content',
          'Currency',
          'Translated text',
          'Shipping address requirements',
          'Shipping services',
          'Payment processing',
          'Tax/VAT handling',
          'Laws and regulations'
        ]
      }
    ],
    url: 'https://www.skechers.com/en-gb/',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-home.png',
        originalAlt: 'Skechers - English - Great Britain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-navigation-tier-2.png',
        originalAlt: 'Skechers - English - Great Britain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-navigation-tier-2.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-listing.png',
        originalAlt: 'Skechers - English - Great Britain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-listing-filters.png',
        originalAlt: 'Skechers - English - Great Britain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-listing-filters.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-detail.png',
        originalAlt: 'Skechers - English - Great Britain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-add-to-cart.png',
        originalAlt: 'Skechers - English - Great Britain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-add-to-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-cart.png',
        originalAlt: 'Skechers - English - Great Britain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-checkout.png',
        originalAlt: 'Skechers - English - Great Britain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-checkout.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-search.png',
        originalAlt: 'Skechers - English - Great Britain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb-search.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-gb/skechers-en-gb__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers',
      name: 'Skechers',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg'
    },
    tags: [
      'cms-custom-in-house',
      'manager',
      'javascript',
      'framework-backbone-js',
      'google-tag-manager',
      '2016',
      'tooling-requirejs',
      'data-couch-db',
      'coffeescript',
      'marionette-js',
      'aws-cloudfront',
      '2017',
      'ecom-custom-in-house',
      'type-e-commerce',
      'responsive',
      'scrum',
      '2018',
      'data-cloudant'
    ],
    categories: [
      'cms',
      'role',
      'language',
      'framework',
      'analytics',
      'year',
      'tooling',
      'data',
      'aws',
      'e-commerce',
      'project-type',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2016', name: '2016', display: true },
          { id: '2017', name: '2017', display: true },
          { id: '2018', name: '2018', display: true }
        ]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [
          { id: 'framework-backbone-js', name: 'Backbone.js', display: true }
        ]
      },
      aws: {
        id: 'aws',
        name: 'AWS',
        tags: [{ id: 'aws-cloudfront', name: 'CloudFront', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [
          { id: 'data-cloudant', name: 'Cloudant', display: true },
          { id: 'data-couch-db', name: 'CouchDB', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'coffeescript', name: 'CoffeeScript', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [
          { id: 'cms-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          {
            id: 'google-tag-manager',
            name: 'Google Tag Manager',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'manager', name: 'Manager', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [
          { id: 'marionette-js', name: 'Marionette.js', display: true },
          { id: 'tooling-requirejs', name: 'RequireJS', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers - English - Great Britain (2017)'
  },
  {
    id: 'skechers-es-es',
    name: 'Skechers - Spanish - Spain',
    date: '2017-07-02',
    description: 'Extended United States e-commerce code for Spain.',
    features: [
      {
        heading: 'Features',
        items: [
          'Locale specific products',
          'Locale specific categories',
          'Locale specific content',
          'Locale specific currency',
          'Locale specific translations of the text',
          'Locale specific shipping address requirements',
          'Locale specific shipping services',
          'Locale specific payment processing',
          'Locale specific tax/VAT handling',
          'Locale specific laws and regulations'
        ]
      }
    ],
    url: 'https://www.skechers.com/es-es/',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-home.png',
        originalAlt: 'Skechers - Spanish - Spain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-navigation-tier-2.png',
        originalAlt: 'Skechers - Spanish - Spain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-navigation-tier-2.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-listing.png',
        originalAlt: 'Skechers - Spanish - Spain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-listing-filters.png',
        originalAlt: 'Skechers - Spanish - Spain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-listing-filters.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-detail.png',
        originalAlt: 'Skechers - Spanish - Spain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-add-to-cart.png',
        originalAlt: 'Skechers - Spanish - Spain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-add-to-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-cart.png',
        originalAlt: 'Skechers - Spanish - Spain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-checkout.png',
        originalAlt: 'Skechers - Spanish - Spain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-checkout.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-search.png',
        originalAlt: 'Skechers - Spanish - Spain',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es-search.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-es-es/skechers-es-es__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers',
      name: 'Skechers',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg'
    },
    tags: [
      'scrum',
      'data-couch-db',
      'framework-backbone-js',
      'javascript',
      'manager',
      'ecom-custom-in-house',
      'coffeescript',
      'type-e-commerce',
      'aws-cloudfront',
      'tooling-requirejs',
      '2018',
      '2017',
      'responsive',
      'google-tag-manager',
      'cms-custom-in-house',
      'marionette-js',
      'data-cloudant',
      '2016'
    ],
    categories: [
      'sdlc',
      'data',
      'framework',
      'language',
      'role',
      'e-commerce',
      'project-type',
      'aws',
      'tooling',
      'year',
      'analytics',
      'cms'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2016', name: '2016', display: true },
          { id: '2017', name: '2017', display: true },
          { id: '2018', name: '2018', display: true }
        ]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [
          { id: 'framework-backbone-js', name: 'Backbone.js', display: true }
        ]
      },
      aws: {
        id: 'aws',
        name: 'AWS',
        tags: [{ id: 'aws-cloudfront', name: 'CloudFront', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [
          { id: 'data-cloudant', name: 'Cloudant', display: true },
          { id: 'data-couch-db', name: 'CouchDB', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'coffeescript', name: 'CoffeeScript', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [
          { id: 'cms-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          {
            id: 'google-tag-manager',
            name: 'Google Tag Manager',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'manager', name: 'Manager', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [
          { id: 'marionette-js', name: 'Marionette.js', display: true },
          { id: 'tooling-requirejs', name: 'RequireJS', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers - Spanish - Spain (2017)'
  },
  {
    id: 'skechers-friendship-walk-2017',
    name: 'Skechers Friendship Walk',
    date: '2017-06-15',
    description:
      'SKECHERS Pier to Pier Friendship Walk event signup and donation site, email campaigns, system admin. ',
    features: [],
    url: 'http://www.skechersfriendshipwalk.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2017/skechers-friendship-walk-2017-home.png',
        originalAlt: 'Skechers Friendship Walk',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2017/skechers-friendship-walk-2017-home.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2017/skechers-friendship-walk-2017__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers-friendship-walk',
      name: 'Skechers Friendship Walk',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers-friendship-walk__logo.svg'
    },
    tags: [
      'role-design',
      'manager',
      '2017',
      'type-fundraising',
      'scrum',
      'responsive'
    ],
    categories: ['role', 'year', 'project-type', 'sdlc'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2017', name: '2017', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'role-design', name: 'Design', display: true },
          { id: 'manager', name: 'Manager', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-fundraising', name: 'Fundraising', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers Friendship Walk (2017)'
  },
  {
    id: 'skechers-fr-ca',
    name: 'Skechers - French - Canada',
    date: '2017-05-04',
    description: 'Extended United States e-commerce code for Canada.',
    features: [
      {
        heading: 'Locale specific',
        items: [
          'Products',
          'Categories',
          'Content',
          'Currency',
          'Translated text',
          'Shipping address requirements',
          'Shipping services',
          'Payment processing',
          'Tax/VAT handling',
          'Laws and regulations'
        ]
      }
    ],
    url: 'https://www.skechers.com/fr-ca/',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-home.png',
        originalAlt: 'Skechers - French - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-navigation-tier-2.png',
        originalAlt: 'Skechers - French - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-navigation-tier-2.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-listing.png',
        originalAlt: 'Skechers - French - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-listing-filters.png',
        originalAlt: 'Skechers - French - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-listing-filters.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-detail.png',
        originalAlt: 'Skechers - French - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-add-to-cart.png',
        originalAlt: 'Skechers - French - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-add-to-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-cart.png',
        originalAlt: 'Skechers - French - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-checkout.png',
        originalAlt: 'Skechers - French - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-checkout.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-search.png',
        originalAlt: 'Skechers - French - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca-search.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-fr-ca/skechers-fr-ca__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers',
      name: 'Skechers',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg'
    },
    tags: [
      'framework-backbone-js',
      'data-couch-db',
      'scrum',
      'manager',
      'aws-cloudfront',
      'coffeescript',
      '2017',
      'javascript',
      'responsive',
      'google-tag-manager',
      'data-cloudant',
      '2016',
      'ecom-custom-in-house',
      'cms-custom-in-house',
      '2018',
      'tooling-requirejs',
      'type-e-commerce',
      'marionette-js'
    ],
    categories: [
      'framework',
      'data',
      'sdlc',
      'role',
      'aws',
      'language',
      'year',
      'project-type',
      'analytics',
      'e-commerce',
      'cms',
      'tooling'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2016', name: '2016', display: true },
          { id: '2017', name: '2017', display: true },
          { id: '2018', name: '2018', display: true }
        ]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [
          { id: 'framework-backbone-js', name: 'Backbone.js', display: true }
        ]
      },
      aws: {
        id: 'aws',
        name: 'AWS',
        tags: [{ id: 'aws-cloudfront', name: 'CloudFront', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [
          { id: 'data-cloudant', name: 'Cloudant', display: true },
          { id: 'data-couch-db', name: 'CouchDB', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'coffeescript', name: 'CoffeeScript', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [
          { id: 'cms-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          {
            id: 'google-tag-manager',
            name: 'Google Tag Manager',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'manager', name: 'Manager', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [
          { id: 'marionette-js', name: 'Marionette.js', display: true },
          { id: 'tooling-requirejs', name: 'RequireJS', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers - French - Canada (2017)'
  },
  {
    id: 'skechers-en-ca',
    name: 'Skechers - English - Canada',
    date: '2017-05-01',
    description: 'Extended United States e-commerce code for Canada.',
    features: [
      {
        heading: 'Locale specific',
        items: [
          'Products',
          'Categories',
          'Content',
          'Currency',
          'Translated text',
          'Shipping address requirements',
          'Shipping services',
          'Payment processing',
          'Tax/VAT handling',
          'Laws and regulations'
        ]
      }
    ],
    url: 'https://www.skechers.com/en-ca/',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-home.png',
        originalAlt: 'Skechers - English - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-navigation-tier-2.png',
        originalAlt: 'Skechers - English - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-navigation-tier-2.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-listing.png',
        originalAlt: 'Skechers - English - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-listing-filters.png',
        originalAlt: 'Skechers - English - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-listing-filters.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-detail.png',
        originalAlt: 'Skechers - English - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-add-to-cart.png',
        originalAlt: 'Skechers - English - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-add-to-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-cart.png',
        originalAlt: 'Skechers - English - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-checkout.png',
        originalAlt: 'Skechers - English - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-checkout.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-search.png',
        originalAlt: 'Skechers - English - Canada',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca-search.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-ca/skechers-en-ca__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers',
      name: 'Skechers',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg'
    },
    tags: [
      'tooling-requirejs',
      'responsive',
      '2017',
      'manager',
      'scrum',
      'marionette-js',
      'ecom-custom-in-house',
      'type-e-commerce',
      'aws-cloudfront',
      'cms-custom-in-house',
      'javascript',
      'google-tag-manager',
      'data-couch-db',
      '2018',
      'framework-backbone-js',
      'coffeescript',
      'data-cloudant',
      '2016'
    ],
    categories: [
      'tooling',
      'project-type',
      'year',
      'role',
      'sdlc',
      'e-commerce',
      'aws',
      'cms',
      'language',
      'analytics',
      'data',
      'framework'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2016', name: '2016', display: true },
          { id: '2017', name: '2017', display: true },
          { id: '2018', name: '2018', display: true }
        ]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [
          { id: 'framework-backbone-js', name: 'Backbone.js', display: true }
        ]
      },
      aws: {
        id: 'aws',
        name: 'AWS',
        tags: [{ id: 'aws-cloudfront', name: 'CloudFront', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [
          { id: 'data-cloudant', name: 'Cloudant', display: true },
          { id: 'data-couch-db', name: 'CouchDB', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'coffeescript', name: 'CoffeeScript', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [
          { id: 'cms-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          {
            id: 'google-tag-manager',
            name: 'Google Tag Manager',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'manager', name: 'Manager', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [
          { id: 'marionette-js', name: 'Marionette.js', display: true },
          { id: 'tooling-requirejs', name: 'RequireJS', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers - English - Canada (2017)'
  },
  {
    id: 'skechers-de-de',
    name: 'Skechers - German - Germany',
    date: '2017-01-01',
    description: 'Extended United States e-commerce code for Germany.',
    features: [
      {
        heading: 'Locale specific',
        items: [
          'Products',
          'Categories',
          'Content',
          'Currency',
          'Translated text',
          'Shipping address requirements',
          'Shipping services',
          'Payment processing',
          'Tax/VAT handling',
          'Laws and regulations'
        ]
      }
    ],
    url: 'https://www.skechers.com/de-de/',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-home.png',
        originalAlt: 'Skechers - German - Germany',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-navigation-tier-2.png',
        originalAlt: 'Skechers - German - Germany',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-navigation-tier-2.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-listing.png',
        originalAlt: 'Skechers - German - Germany',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-listing-filters.png',
        originalAlt: 'Skechers - German - Germany',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-listing-filters.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-detail.png',
        originalAlt: 'Skechers - German - Germany',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-add-to-cart.png',
        originalAlt: 'Skechers - German - Germany',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-add-to-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-cart.png',
        originalAlt: 'Skechers - German - Germany',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-checkout.png',
        originalAlt: 'Skechers - German - Germany',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-checkout.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-search.png',
        originalAlt: 'Skechers - German - Germany',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de-search.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-de-de/skechers-de-de__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers',
      name: 'Skechers',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg'
    },
    tags: [
      'aws-cloudfront',
      'data-cloudant',
      'coffeescript',
      'framework-backbone-js',
      'javascript',
      '2018',
      'responsive',
      '2016',
      'cms-custom-in-house',
      'manager',
      'marionette-js',
      'ecom-custom-in-house',
      '2017',
      'scrum',
      'type-e-commerce',
      'data-couch-db',
      'google-tag-manager',
      'tooling-requirejs'
    ],
    categories: [
      'aws',
      'data',
      'language',
      'framework',
      'year',
      'project-type',
      'cms',
      'role',
      'tooling',
      'e-commerce',
      'sdlc',
      'analytics'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2016', name: '2016', display: true },
          { id: '2017', name: '2017', display: true },
          { id: '2018', name: '2018', display: true }
        ]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [
          { id: 'framework-backbone-js', name: 'Backbone.js', display: true }
        ]
      },
      aws: {
        id: 'aws',
        name: 'AWS',
        tags: [{ id: 'aws-cloudfront', name: 'CloudFront', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [
          { id: 'data-cloudant', name: 'Cloudant', display: true },
          { id: 'data-couch-db', name: 'CouchDB', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'coffeescript', name: 'CoffeeScript', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [
          { id: 'cms-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          {
            id: 'google-tag-manager',
            name: 'Google Tag Manager',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'manager', name: 'Manager', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [
          { id: 'marionette-js', name: 'Marionette.js', display: true },
          { id: 'tooling-requirejs', name: 'RequireJS', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers - German - Germany (2016)'
  },
  {
    id: 'skechers-direct',
    name: 'Skechers Direct',
    date: '2016-12-05',
    description:
      "A Business to Business Employee Shoe Program offering discounts and payroll deduction options on safety shoes, corporate shoes, and more.  Used by companies like Starbucks, McDonald's, Amazon and many more.",
    features: [],
    url: 'https://www.skechers.com/direct/',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-home.png',
        originalAlt: 'Skechers Direct',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-logos.png',
        originalAlt: 'Skechers Direct',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-logos.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-starbucks.png',
        originalAlt: 'Skechers Direct',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-starbucks.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-mcdonalds.png',
        originalAlt: 'Skechers Direct',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-mcdonalds.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-ups.png',
        originalAlt: 'Skechers Direct',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-ups.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-taco-bell.png',
        originalAlt: 'Skechers Direct',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-taco-bell.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-amazon.png',
        originalAlt: 'Skechers Direct',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-amazon.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-detail.png',
        originalAlt: 'Skechers Direct',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct/skechers-direct__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers',
      name: 'Skechers',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg'
    },
    tags: [
      'ecom-custom-in-house',
      'css',
      'javascript',
      'responsive',
      'lead',
      'data-couch-db',
      '2017',
      'aws-cloudfront',
      'e-commerce',
      'manager',
      '2018',
      'global',
      'type-e-commerce',
      'cms-custom-in-house',
      'html',
      'framework-backbone-js',
      'google-analytics',
      'coffeescript',
      'data-cloudant',
      'type-b2b',
      'framework-backbone-js',
      'marionette-js',
      'ecom-custom-in-house',
      'front-end',
      'tooling-requirejs',
      '2015',
      'scrum',
      '2016'
    ],
    categories: [
      'e-commerce',
      'language',
      'project-type',
      'role',
      'data',
      'year',
      'aws',
      'industry',
      'cms',
      'framework',
      'analytics',
      'tooling',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2015', name: '2015', display: true },
          { id: '2016', name: '2016', display: true },
          { id: '2017', name: '2017', display: true },
          { id: '2018', name: '2018', display: true }
        ]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [
          { id: 'framework-backbone-js', name: 'Backbone.js', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-b2b', name: 'Business to Business (B2B)', display: true },
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'coffeescript', name: 'CoffeeScript', display: true },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      aws: {
        id: 'aws',
        name: 'AWS',
        tags: [{ id: 'aws-cloudfront', name: 'CloudFront', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [
          { id: 'data-cloudant', name: 'Cloudant', display: true },
          { id: 'data-couch-db', name: 'CouchDB', display: true }
        ]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [
          { id: 'cms-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [
          { id: 'e-commerce', name: 'E-Commerce', display: true },
          { id: 'global', name: 'Global', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'lead', name: 'Lead', display: true },
          { id: 'manager', name: 'Manager', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [
          { id: 'marionette-js', name: 'Marionette.js', display: true },
          { id: 'tooling-requirejs', name: 'RequireJS', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers Direct (2016)'
  },
  {
    id: 'skechers-direct-admin',
    name: 'Skechers Direct - Admin',
    date: '2016-12-04',
    description: 'Coming soon...',
    features: [],
    url: 'https://www.skechers.com/direct/',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct-admin/image-coming-soon.png',
        originalAlt: 'Skechers Direct - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct-admin/image-coming-soon.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-direct-admin/skechers-direct-admin__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers',
      name: 'Skechers',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg'
    },
    tags: [
      'data-cloudant',
      'html',
      'scrum',
      '2018',
      'cms-custom-in-house',
      'css',
      '2017',
      'framework-angularjs',
      'tooling-requirejs',
      'front-end',
      '2015',
      'ecom-custom-in-house',
      'data-couch-db',
      'javascript',
      'coffeescript',
      'e-commerce',
      'coffeescript',
      '2016',
      'manager'
    ],
    categories: [
      'data',
      'language',
      'sdlc',
      'year',
      'cms',
      'framework',
      'tooling',
      'role',
      'e-commerce',
      'industry'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2015', name: '2015', display: true },
          { id: '2016', name: '2016', display: true },
          { id: '2017', name: '2017', display: true },
          { id: '2018', name: '2018', display: true }
        ]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [{ id: 'framework-angularjs', name: 'AngularJS', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'coffeescript', name: 'CoffeeScript', display: true },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [
          { id: 'data-cloudant', name: 'Cloudant', display: true },
          { id: 'data-couch-db', name: 'CouchDB', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [
          { id: 'cms-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'e-commerce', name: 'E-Commerce', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'manager', name: 'Manager', display: true }
        ]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'tooling-requirejs', name: 'RequireJS', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers Direct - Admin (2016)'
  },
  {
    id: 'skechers-friendship-walk-2016',
    name: 'Skechers Friendship Walk',
    date: '2016-06-15',
    description: 'Coming soon...',
    features: [],
    url: 'http://www.skechersfriendshipwalk.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2016/skechers-friendship-walk-2016-home.png',
        originalAlt: 'Skechers Friendship Walk',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2016/skechers-friendship-walk-2016-home.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2016/skechers-friendship-walk-2016__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers-friendship-walk',
      name: 'Skechers Friendship Walk',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers-friendship-walk__logo.svg'
    },
    tags: [
      'scrum',
      'type-fundraising',
      'responsive',
      '2016',
      'manager',
      'role-design'
    ],
    categories: ['sdlc', 'project-type', 'year', 'role'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2016', name: '2016', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'role-design', name: 'Design', display: true },
          { id: 'manager', name: 'Manager', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-fundraising', name: 'Fundraising', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers Friendship Walk (2016)'
  },
  {
    id: 'fresh-n-healthy',
    name: "Fresh N' Healthy",
    date: '2016-02-15',
    description: 'Coming Soon...',
    features: [],
    url: 'http://www.freshnhealthycatering.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-home.png',
        originalAlt: "Fresh N' Healthy",
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-menu.png',
        originalAlt: "Fresh N' Healthy",
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-menu.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-request-qoute.png',
        originalAlt: "Fresh N' Healthy",
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-request-qoute.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-contact-us.png',
        originalAlt: "Fresh N' Healthy",
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy-contact-us.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/fresh-n-healthy/fresh-n-healthy__logo.svg',
    employer: {
      id: 'tiffany-lea-llc',
      name: 'Tiffany Lea LLC',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/tiffany-lea-llc__logo.svg'
    },
    client: {
      id: 'fresh-n-healthy-catering',
      name: "Fresh N' Healthy Catering",
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/fresh-n-healthy__logo.svg'
    },
    tags: [
      'data-mysql',
      'responsive',
      '2016',
      'agile',
      'cms-wordpress',
      'consultant'
    ],
    categories: ['data', 'project-type', 'year', 'sdlc', 'cms', 'role'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2016', name: '2016', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'agile', name: 'Agile', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'consultant', name: 'Consultant', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'responsive', name: 'Responsive', display: true }]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cms-wordpress', name: 'Wordpress', display: true }]
      }
    },
    displayName: "Fresh N' Healthy (2016)"
  },
  {
    id: 'skechers-admin',
    name: 'Skechers - Admin',
    date: '2015-09-10',
    description:
      'Multi locale admin portal for skechers.com EN-US, DE-DE, EN-CA, FR-CA, ES-ES, EN-GB.',
    features: [
      {
        heading: 'Features',
        items: [
          'Manage Page Content',
          'Manage Transactional Emails',
          'Manage Orders',
          'Manage Customers',
          'Manage Shipping',
          'Manage Admin Users',
          'Manage Product content, data and images',
          'Manage Categories, Brands, and Catalog',
          'Manage Translations'
        ]
      }
    ],
    url: null,
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-content-page-builder.png',
        originalAlt: 'Skechers - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-content-page-builder.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-content-saved-widgets.png',
        originalAlt: 'Skechers - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-content-saved-widgets.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-product-detail.png',
        originalAlt: 'Skechers - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-product-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-customers.png',
        originalAlt: 'Skechers - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-customers.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-category-detail.png',
        originalAlt: 'Skechers - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-category-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-emails.png',
        originalAlt: 'Skechers - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-emails.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-product-listing.png',
        originalAlt: 'Skechers - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-product-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-category-listing.png',
        originalAlt: 'Skechers - Admin',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/skechers-admin-catalog-category-listing.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-admin/Admin%20Copy__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers',
      name: 'Skechers',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg'
    },
    tags: [
      'manager',
      'data-couch-db',
      'tooling-eslint',
      'type-e-commerce',
      'framework-angularjs',
      'javascript',
      'scrum',
      'cms-custom-in-house',
      'lead',
      'tooling-babel',
      '2015',
      '2016',
      'e-commerce',
      'front-end',
      'css',
      'library-underscore-js',
      'ecom-custom-in-house',
      '2018',
      'library-zepto-js',
      'data-cloudant',
      'cms-configuration',
      'html',
      'ux-information-architecture',
      'coffeescript',
      'json',
      '2014',
      'type-intranet',
      'ux-usability',
      '2017'
    ],
    categories: [
      'role',
      'data',
      'tooling',
      'project-type',
      'framework',
      'language',
      'sdlc',
      'cms',
      'year',
      'industry',
      'e-commerce',
      'user-experience-ux'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2014', name: '2014', display: true },
          { id: '2015', name: '2015', display: true },
          { id: '2016', name: '2016', display: true },
          { id: '2017', name: '2017', display: true },
          { id: '2018', name: '2018', display: true }
        ]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [{ id: 'framework-angularjs', name: 'AngularJS', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [
          { id: 'tooling-babel', name: 'Babel', display: true },
          { id: 'tooling-eslint', name: 'ESLint', display: true },
          { id: 'library-underscore-js', name: 'Underscore.js', display: true },
          { id: 'library-zepto-js', name: 'Zepto.js', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'lead', name: 'Lead', display: true },
          { id: 'manager', name: 'Manager', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'coffeescript', name: 'CoffeeScript', display: true },
          { id: 'html', name: 'HTML', display: true },
          { id: 'json', name: 'JSON', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [
          { id: 'data-cloudant', name: 'Cloudant', display: true },
          { id: 'data-couch-db', name: 'CouchDB', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [
          { id: 'cms-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'type-intranet', name: 'Intranet', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'e-commerce', name: 'E-Commerce', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'ux-information-architecture',
            name: 'Information architecture',
            display: true
          },
          { id: 'ux-usability', name: 'Usability', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers - Admin (2015)'
  },
  {
    id: 'skechers-en-us',
    name: 'Skechers - USA',
    date: '2015-09-10',
    description: 'Consumer-facing e-commerce site rebuilt from the ground up.',
    features: [],
    url: 'https://www.skechers.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-home.png',
        originalAlt: 'Skechers - USA',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-navigation-tier-2.png',
        originalAlt: 'Skechers - USA',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-navigation-tier-2.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-listing.png',
        originalAlt: 'Skechers - USA',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-listing-filters.png',
        originalAlt: 'Skechers - USA',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-listing-filters.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-detail.png',
        originalAlt: 'Skechers - USA',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-add-to-cart.png',
        originalAlt: 'Skechers - USA',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-add-to-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-cart.png',
        originalAlt: 'Skechers - USA',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-checkout.png',
        originalAlt: 'Skechers - USA',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-checkout.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-search.png',
        originalAlt: 'Skechers - USA',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us-search.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-en-us/skechers-en-us__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers',
      name: 'Skechers',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg'
    },
    tags: [
      'data-couch-db',
      '2017',
      'ecom-custom-in-house',
      'framework-react',
      'scrum',
      'framework-backbone-js',
      '2014',
      'coffeescript',
      'cms-custom-in-house',
      '2015',
      'responsive',
      '2016',
      'javascript',
      'aws-cloudfront',
      'ux-user-testing',
      '2018',
      'data-cloudant',
      'type-e-commerce',
      'google-tag-manager',
      'tooling-requirejs',
      'manager'
    ],
    categories: [
      'data',
      'year',
      'e-commerce',
      'framework',
      'sdlc',
      'language',
      'cms',
      'project-type',
      'aws',
      'user-experience-ux',
      'analytics',
      'tooling',
      'role'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2014', name: '2014', display: true },
          { id: '2015', name: '2015', display: true },
          { id: '2016', name: '2016', display: true },
          { id: '2017', name: '2017', display: true },
          { id: '2018', name: '2018', display: true }
        ]
      },
      framework: {
        id: 'framework',
        name: 'Framework',
        tags: [
          { id: 'framework-backbone-js', name: 'Backbone.js', display: true },
          { id: 'framework-react', name: 'React', display: true }
        ]
      },
      aws: {
        id: 'aws',
        name: 'AWS',
        tags: [{ id: 'aws-cloudfront', name: 'CloudFront', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [
          { id: 'data-cloudant', name: 'Cloudant', display: true },
          { id: 'data-couch-db', name: 'CouchDB', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'coffeescript', name: 'CoffeeScript', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [
          { id: 'cms-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          {
            id: 'google-tag-manager',
            name: 'Google Tag Manager',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'manager', name: 'Manager', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'tooling-requirejs', name: 'RequireJS', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [{ id: 'ux-user-testing', name: 'User Testing', display: true }]
      }
    },
    displayName: 'Skechers - USA (2015)'
  },
  {
    id: 'skechers-friendship-walk-2015',
    name: 'Skechers Friendship Walk',
    date: '2015-06-15',
    description:
      'SKECHERS Pier to Pier Friendship Walk event signup and donation site, email campaigns, system admin. ',
    features: [],
    url: 'http://www.skechersfriendshipwalk.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2015/skechers-friendship-walk-2015-home.png',
        originalAlt: 'Skechers Friendship Walk',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2015/skechers-friendship-walk-2015-home.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2015/skechers-friendship-walk-2015__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers-friendship-walk',
      name: 'Skechers Friendship Walk',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers-friendship-walk__logo.svg'
    },
    tags: [
      'responsive',
      'role-design',
      'google-analytics',
      'scrum',
      'type-fundraising',
      '2015'
    ],
    categories: ['project-type', 'role', 'analytics', 'sdlc', 'year'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2015', name: '2015', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'role-design', name: 'Design', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-fundraising', name: 'Fundraising', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers Friendship Walk (2015)'
  },
  {
    id: 'skechers-friendship-walk-2014',
    name: 'Skechers Friendship Walk',
    date: '2014-06-15',
    description:
      'SKECHERS Pier to Pier Friendship Walk event signup and donation site, email campaigns, system admin. ',
    features: [],
    url: 'http://www.skechersfriendshipwalk.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-home.png',
        originalAlt: 'Skechers Friendship Walk',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-meet-our-kids.png',
        originalAlt: 'Skechers Friendship Walk',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-meet-our-kids.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-donate.png',
        originalAlt: 'Skechers Friendship Walk',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-donate.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-about.png',
        originalAlt: 'Skechers Friendship Walk',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014-about.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-friendship-walk-2014/skechers-friendship-walk-2014__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers-friendship-walk',
      name: 'Skechers Friendship Walk',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers-friendship-walk__logo.svg'
    },
    tags: [
      'responsive',
      '2014',
      'type-fundraising',
      'scrum',
      'role-design',
      'google-analytics'
    ],
    categories: ['project-type', 'year', 'sdlc', 'role', 'analytics'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2014', name: '2014', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'role-design', name: 'Design', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-fundraising', name: 'Fundraising', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers Friendship Walk (2014)'
  },
  {
    id: 'skechers-corporate',
    name: 'Skechers Corporate',
    date: '2014-06-01',
    description:
      'Maintained skx.com (a simple Jekyll site) with routine content updates.',
    features: [],
    url: 'https://www.skx.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-corporate/skechers-corporate.png',
        originalAlt: 'Skechers Corporate',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-corporate/skechers-corporate.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/skechers-corporate/skechers__logo.svg',
    employer: {
      id: 'skechers',
      name: 'Skechers USA Inc',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/skechers__logo.svg'
    },
    client: {
      id: 'skechers',
      name: 'Skechers',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/skechers__logo.svg'
    },
    tags: ['manager', '2014', 'front-end', 'scrum'],
    categories: ['role', 'year', 'sdlc'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2014', name: '2014', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'manager', name: 'Manager', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'scrum', name: 'Scrum', display: true }]
      }
    },
    displayName: 'Skechers Corporate (2014)'
  },
  {
    id: 'university-of-the-virgin-islands-cgtc',
    name: 'University of the Virgin Islands - CGTC',
    date: '2014-03-18',
    description: null,
    features: [
      {
        heading: 'Features',
        items: [
          'Developed and maintained in Hannon Hill’s Cascade Server content management system',
          'Fully responsive design optimized for desktop, tablet and smartphones',
          'Branded UVI color scheme and graphics, with accent color selected by the client',
          'Rotating home page banner images with captions and thumbnail navigation',
          'Home page video player',
          'Internal microsite-only search as well as option to search full main UVI site',
          'Audience-based (“Information For…”) page content and navigation',
          'Easy-to-maintain Spectate forms integrated into Cascade content pages '
        ]
      }
    ],
    url: null,
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-home.png',
        originalAlt: 'University of the Virgin Islands - CGTC',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-standard-page.png',
        originalAlt: 'University of the Virgin Islands - CGTC',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-standard-page.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-news-listng.png',
        originalAlt: 'University of the Virgin Islands - CGTC',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-news-listng.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-news-detail.png',
        originalAlt: 'University of the Virgin Islands - CGTC',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/university-of-the-virgin-islands-cgtc-news-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cgtc/CGTC__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'university-of-the-virgin-islands',
      name: 'University Of The Virgin Islands',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-the-virgin-islands__logo.svg'
    },
    tags: ['waterfall'],
    categories: ['sdlc'],
    tagsByCategory: {
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'University of the Virgin Islands - CGTC (2014)'
  },
  {
    id: 'greensboro-auto-auction',
    name: 'Greensboro Auto Auction',
    date: '2014-03-01',
    description: 'Coming soon...',
    features: [],
    url: 'http://www.greensboroaa.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-home.png',
        originalAlt: 'Greensboro Auto Auction',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-search-inventory.png',
        originalAlt: 'Greensboro Auto Auction',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-search-inventory.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-my-vehicle-list.png',
        originalAlt: 'Greensboro Auto Auction',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-my-vehicle-list.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-vehicle-details.png',
        originalAlt: 'Greensboro Auto Auction',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction-vehicle-details.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-auto-auction/greensboro-auto-auction__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'greensboro-auto-auction',
      name: 'Greensboro Auto Auction',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/greensboro-auto-auction__logo.svg'
    },
    tags: [
      'front-end',
      'google-analytics',
      'type-auto-auction',
      'waterfall',
      'ui-design-review',
      'consultant',
      '2014'
    ],
    categories: [
      'role',
      'analytics',
      'project-type',
      'sdlc',
      'user-experience-ux',
      'year'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2014', name: '2014', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-auto-auction', name: 'Auto Auction', display: false }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'consultant', name: 'Consultant', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [{ id: 'ui-design-review', name: 'Design Review', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Greensboro Auto Auction (2014)'
  },
  {
    id: 'university-of-the-virgin-islands-cell',
    name: 'University of the Virgin Islands - CELL',
    date: '2014-01-23',
    description: 'Coming soon...',
    features: [
      {
        heading: 'Features',
        items: [
          'Developed and maintained in Hannon Hill’s Cascade Server content management system',
          'Fully responsive design optimized for desktop, tablet and smartphones',
          'Branded UVI color scheme and graphics, with accent color selected by the client',
          'Rotating home page banner images with captions and thumbnail navigation',
          'Home page video player',
          'Internal microsite-only search as well as option to search full main UVI site',
          'Audience-based (“Information For…”) page content and navigation',
          'Easy-to-maintain Spectate forms integrated into Cascade content pages '
        ]
      }
    ],
    url: 'https://cell.uvi.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-home.png',
        originalAlt: 'University of the Virgin Islands - CELL',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-news-listing.png',
        originalAlt: 'University of the Virgin Islands - CELL',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-news-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-news-detail.png',
        originalAlt: 'University of the Virgin Islands - CELL',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-news-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-course-listing.png',
        originalAlt: 'University of the Virgin Islands - CELL',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-course-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-course-detail.png',
        originalAlt: 'University of the Virgin Islands - CELL',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell-course-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-cell/university-of-the-virgin-islands-cell__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'university-of-the-virgin-islands',
      name: 'University Of The Virgin Islands',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-the-virgin-islands__logo.svg'
    },
    tags: [
      'cross-browser-compatibility',
      'responsive',
      'higher-ed',
      'accessibility-508',
      '2014',
      'css',
      'html',
      'higher-ed',
      'cms-configuration',
      'ux-accessibility',
      'responsive',
      'xslt',
      'accessibility-508',
      'full-stack',
      'front-end',
      '2014',
      'ux-accessibility',
      'xml',
      'cascade-server',
      'javascript',
      'cross-browser-compatibility',
      'type-informational',
      'type-informational',
      'waterfall',
      'lead'
    ],
    categories: [
      'user-experience-ux',
      'project-type',
      'industry',
      'year',
      'language',
      'role',
      'cms',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2014', name: '2014', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          { id: 'ux-accessibility', name: 'Accessibility', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'full-stack', name: 'Full Stack', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-informational', name: 'Informational', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'University of the Virgin Islands - CELL (2014)'
  },
  {
    id: 'university-of-the-virgin-islands-sip',
    name: 'University of the Virgin Islands - SIP',
    date: '2014-01-23',
    description: 'Coming Soon...',
    features: [
      {
        heading: 'Features',
        items: [
          'Developed and maintained in Hannon Hill’s Cascade Server content management system',
          'Fully responsive design optimized for desktop, tablet and smartphones',
          'Branded UVI color scheme and graphics, with accent color selected by the client',
          'Rotating home page banner images with captions and thumbnail navigation',
          'Home page video player',
          'Internal microsite-only search as well as option to search full main UVI site',
          'Audience-based (“Information For…”) page content and navigation',
          'Easy-to-maintain Spectate forms integrated into Cascade content pages '
        ]
      }
    ],
    url: 'https://safety.uvi.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-home.png',
        originalAlt: 'University of the Virgin Islands - SIP',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-news-listing.png',
        originalAlt: 'University of the Virgin Islands - SIP',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-news-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-news-detail.png',
        originalAlt: 'University of the Virgin Islands - SIP',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-news-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-standard-page.png',
        originalAlt: 'University of the Virgin Islands - SIP',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-standard-page.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-faqs.png',
        originalAlt: 'University of the Virgin Islands - SIP',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-faqs.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-consultation-form.png',
        originalAlt: 'University of the Virgin Islands - SIP',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip-consultation-form.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands-sip/university-of-the-virgin-islands-sip__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'university-of-the-virgin-islands',
      name: 'University Of The Virgin Islands',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-the-virgin-islands__logo.svg'
    },
    tags: [
      'waterfall',
      'css',
      'higher-ed',
      'xslt',
      'ux-accessibility',
      'xml',
      'front-end',
      'cascade-server',
      'type-informational',
      'html',
      'cross-browser-compatibility',
      'accessibility-508',
      'javascript',
      'cms-configuration',
      '2014',
      'lead',
      'full-stack'
    ],
    categories: [
      'sdlc',
      'language',
      'industry',
      'user-experience-ux',
      'role',
      'cms',
      'project-type',
      'year'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2014', name: '2014', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          { id: 'ux-accessibility', name: 'Accessibility', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'full-stack', name: 'Full Stack', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-informational', name: 'Informational', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'University of the Virgin Islands - SIP (2014)'
  },
  {
    id: 'bassett-furniture-bnet',
    name: 'Bassett Furniture - Bnet',
    date: '2014-01-02',
    description: 'Bassett Furniture intranet',
    features: [],
    url: null,
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-bnet/bassett-furniture-bnet-2013-home.png',
        originalAlt: 'Bassett Furniture - Bnet',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-bnet/bassett-furniture-bnet-2013-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-bnet/bassett-furniture-bnet-2013-interior.png',
        originalAlt: 'Bassett Furniture - Bnet',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-bnet/bassett-furniture-bnet-2013-interior.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-bnet/bassett-furniture-bnet__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'bassett-furniture',
      name: 'Bassett Furniture',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/bassett__logo.svg'
    },
    tags: [
      'cms-configuration',
      'javascript',
      'front-end',
      'xslt',
      'lead',
      'cms-custom-in-house',
      'html',
      '2014',
      'cascade-server',
      'type-intranet',
      'full-stack',
      'xml',
      'asp',
      'css',
      'waterfall'
    ],
    categories: ['role', 'language', 'cms', 'year', 'project-type', 'sdlc'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2014', name: '2014', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'full-stack', name: 'Full Stack', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [
          { id: 'cascade-server', name: 'Cascade Server', display: true },
          { id: 'cms-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-intranet', name: 'Intranet', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Bassett Furniture - Bnet (2014)'
  },
  {
    id: 'holyoke-gas-and-electric',
    name: 'Holyoke Gas & Electric',
    date: '2013-12-15',
    description: null,
    features: [
      {
        heading: 'Features',
        items: [
          'Responsive Design',
          'Audience-Based Site Maps: When a visitor clicks on one of the audience based icons in the site footer (like “Residential”), they are directed to an audience-based site map, displaying the pages that the client has tagged as relevant to that audience within the CMS',
          'Emergency Notifications: For severe emergencies, the notification pops up in an ajax window on every page of the site. For less severe emergencies there is a banner message that appears on every page of the site',
          'Custom Widgets: Widgets that can be included on pages throughout the site like content, images, videos or external links',
          'Animated banner images: Can be incorporated on any internal page on the site',
          'Google Map integration: Client can enter location details into Cascade to display an interactive Google map',
          'Custom “calculators”: Custom .NET forms that allow the visitor to calculate their own energy costs',
          'Web and social media tracking: The site makes extensive use of web and social media tracking tools so that the client can be well informed of all client interaction with the site',
          'Weather feed: weather-related info for the Holyoke area displayed from a 3rd party tool in the site footer',
          'Google Translate: Easy to access Google translate widget in the footer of every page of the site'
        ]
      }
    ],
    url: 'http://www.hged.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/holyoke-gas-and-electric/holyoke-gas-and-electric%400.25x.jpg',
        originalAlt: 'Holyoke Gas & Electric',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/holyoke-gas-and-electric/holyoke-gas-and-electric%400.25x.jpg'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/holyoke-gas-and-electric/holyoke-gas-and-electric__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'holyoke-gas-and-electric',
      name: 'Holyoke Gas & Electric',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/holyoke-gas-and-electric__logo.svg'
    },
    tags: [
      'consultant',
      '2013',
      'library-jquery',
      'xml',
      'front-end',
      'responsive',
      'google-analytics',
      'javascript',
      'cms-configuration',
      'waterfall',
      'html',
      'css',
      'xslt',
      'utilities',
      'cascade-server'
    ],
    categories: [
      'role',
      'year',
      'tooling',
      'language',
      'project-type',
      'analytics',
      'sdlc',
      'industry',
      'cms'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'consultant', name: 'Consultant', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'responsive', name: 'Responsive', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'utilities', name: 'Utilities', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Holyoke Gas & Electric (2013)'
  },
  {
    id: 'university-of-the-virgin-islands',
    name: 'University of the Virgin Islands',
    date: '2013-09-01',
    description:
      'This site was completed six weeks ahead of the contracted final launch date and uses a wide variety of Cascade and custom-built functionality.',
    features: [
      {
        heading: 'General Features',
        items: [
          '1700+ pages of rich content, including video widgets and news, event and announcement modules that can be customized by category',
          '600+ employee profiles containing detailed biographical information.  Department listing pages can be created anywhere on the site to show a subset of faculty/staff members, as needed',
          'Site-wide “mega menu” that is easily customizable by the client via Cascade, including optional call-to-action buttons and images',
          'Extended footer that includes marketing text, links to popular sections, social media integration and call-to-action buttons, which can all be easily modified by the client in Cascade',
          'Ten audience-based gateway landing pages that are accessible from every page of the site and contain specialized marketing text, news, announcements, events, navigation links, and calls-to-action, targeted to a specific visitor group, including current students, prospective students and the media',
          'Alternate Homepage with an emergency message that allows the webmaster to replace the entire homepage with emergency information and quick links to resources',
          'Standardized academic degree pages that simplify the display of extensive academic program information into tabs',
          'Photo gallery page type that can be reproduced in any section of the site to display an unlimited number of  images with captions and completely maintainable in Cascade',
          'Document directory page that that can be reproduced in any section of the site to display files (PDF/Word/Excel/etc) tagged with a specific category, with additional details like title, date added, file size and type (brochure, form/survey, policy/procedure, publication)',
          'A to Z index which displays links to only specific/highly relevant pages (as selected by page creator/editor in Cascade)',
          'Every page has metadata fields (including page keywords, page descriptions) which can be updated to optimize page content/keywords for search engines'
        ]
      },
      {
        heading: 'Calendar Features',
        items: [
          'Customized and responsive Cascade-based calendar',
          'Ability to submit events via a public form, which are quickly and easily reviewed by a Cascade administrator via a workflow and added to the public calendar upon approval',
          'Filtering by category/audience',
          'Printable PDFs for specific categories (Academic Calendar, Official Holidays, etc.)'
        ]
      }
    ],
    url: 'https://www.uvi.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-home.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-navigation.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-navigation.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-current-students.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-current-students.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-event-calendar.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-event-calendar.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-event-detail.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-event-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-event-submit-an-event.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-event-submit-an-event.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-news-listing.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-news-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-news-detail.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-news-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-academics.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-academics.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-college-landing.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-college-landing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-academic-department.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-academic-department.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-media-gateway.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-media-gateway.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-standard-page.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-standard-page.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-a-z-index.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-a-z-index.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-directory.png',
        originalAlt: 'University of the Virgin Islands',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands-directory.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-the-virgin-islands/university-of-the-virgin-islands__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'university-of-the-virgin-islands',
      name: 'University Of The Virgin Islands',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-the-virgin-islands__logo.svg'
    },
    tags: [
      'cascade-server',
      '2013',
      'cross-browser-compatibility',
      'full-stack',
      'cms-configuration',
      'front-end',
      'responsive',
      'accessibility-508',
      'lead',
      'ux-accessibility',
      'waterfall',
      'higher-ed'
    ],
    categories: [
      'cms',
      'year',
      'user-experience-ux',
      'role',
      'project-type',
      'sdlc',
      'industry'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          { id: 'ux-accessibility', name: 'Accessibility', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'full-stack', name: 'Full Stack', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'responsive', name: 'Responsive', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'University of the Virgin Islands (2013)'
  },
  {
    id: 'university-of-scranton',
    name: 'University of Scranton',
    date: '2013-08-13',
    description: 'Coming Soon...',
    features: [],
    url: 'https://www.scranton.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-scranton/scranton-1.png',
        originalAlt: 'University of Scranton',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-scranton/scranton-1.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-of-scranton/university-of-scranton__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'university-of-scranton',
      name: 'University of Scranton',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-scranton__logo.svg'
    },
    tags: [
      'xslt',
      'css',
      'library-jquery',
      'responsive',
      'cascade-server',
      'higher-ed',
      'waterfall',
      'front-end',
      'accessibility-508',
      'ux-usability',
      'javascript',
      'google-analytics',
      'cms-configuration',
      '2013',
      'xml',
      'html',
      'cross-browser-compatibility'
    ],
    categories: [
      'language',
      'tooling',
      'project-type',
      'cms',
      'industry',
      'sdlc',
      'role',
      'user-experience-ux',
      'analytics',
      'year'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          },
          { id: 'ux-usability', name: 'Usability', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'responsive', name: 'Responsive', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'University of Scranton (2013)'
  },
  {
    id: 'beacon-technologies-2013',
    name: 'Beacon Technologies',
    date: '2013-08-01',
    description: null,
    features: [
      {
        heading: 'Features',
        items: [
          'Client highlights dynamically appear throughout the website based on the particular page content',
          'Why Beacon: Real-world case studies and testimonials',
          'Client portfolio for Hosting, Development and Marketing',
          ' Responsive design to automatically adapt to different devices (desktops, mobile phones, tablets)'
        ]
      },
      {
        heading: 'Responsibilities',
        items: [
          'All original front-end development',
          'Custom Cascade Server integration'
        ]
      }
    ],
    url: 'http://www.beacontechnologies.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-home.png',
        originalAlt: 'Beacon Technologies',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-web-marketing.png',
        originalAlt: 'Beacon Technologies',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-web-marketing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-projects.png',
        originalAlt: 'Beacon Technologies',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-projects.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-web-development.png',
        originalAlt: 'Beacon Technologies',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-web-development.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-web-hosting.png',
        originalAlt: 'Beacon Technologies',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies-2013-web-hosting.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-2013/beacon-technologies__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/beacon-technologies__logo.svg'
    },
    tags: [
      'cms-configuration',
      'css',
      'xml',
      'cross-browser-compatibility',
      'xslt',
      'library-jquery',
      'html',
      'cascade-server',
      'front-end',
      'javascript',
      'waterfall',
      'google-analytics',
      '2013',
      'responsive'
    ],
    categories: [
      'role',
      'language',
      'user-experience-ux',
      'tooling',
      'cms',
      'sdlc',
      'analytics',
      'year',
      'project-type'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'responsive', name: 'Responsive', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Beacon Technologies (2013)'
  },
  {
    id: 'beacon-technologies-blog',
    name: 'Beacon Technologies - Blog',
    date: '2013-08-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'All original front-end development',
          'All custom WordPress integration'
        ]
      }
    ],
    url: 'http://blog.beacontechnologies.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog-2013-home.png',
        originalAlt: 'Beacon Technologies - Blog',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog-2013-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog-2013-detail.png',
        originalAlt: 'Beacon Technologies - Blog',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog-2013-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog-2013-listing.png',
        originalAlt: 'Beacon Technologies - Blog',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog-2013-listing.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-blog/beacon-technologies-blog__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/beacon-technologies__logo.svg'
    },
    tags: [
      'google-analytics',
      'waterfall',
      'library-jquery',
      'data-mysql',
      'responsive',
      'html',
      'cross-browser-compatibility',
      'cms-wordpress',
      'front-end',
      '2013',
      'css',
      'role-design',
      'javascript',
      'blog'
    ],
    categories: [
      'analytics',
      'sdlc',
      'tooling',
      'data',
      'project-type',
      'language',
      'user-experience-ux',
      'cms',
      'role',
      'year'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'blog', name: 'Blog', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'role-design', name: 'Design', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cms-wordpress', name: 'Wordpress', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Beacon Technologies - Blog (2013)'
  },
  {
    id: 'whitman-school-of-management-responsive',
    name: 'Syracuse University, Whitman School of Management',
    date: '2013-06-01',
    description:
      'The project involved extending all original development to be responsive.',
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'Project lead for development and design',
          'Training team on responsive techniques/development',
          'Ensuring accurate execution'
        ]
      }
    ],
    url: 'http://whitman.syr.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-home.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-navigation.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-navigation.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faculty-directory.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faculty-directory.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faculty-bio.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faculty-bio.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-testimonial-listing.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-testimonial-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-testimonial-detail.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-testimonial-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-newsroom.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-newsroom.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-news-detail.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-news-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faculty-research.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faculty-research.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-prospective-students.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-prospective-students.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-storytelling.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-storytelling.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-contact-us.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-contact-us.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faq.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-2013-rwd-faq.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management-responsive/whitman-school-of-management__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'syracuse-university-whitman-school-of-management',
      name: 'Syracuse University, Whitman School of Management',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/whitman-school-of-management__logo.svg'
    },
    tags: [
      'front-end',
      'accessibility-508',
      'xml',
      'responsive',
      'cascade-server',
      'xslt',
      '2013',
      'html',
      'higher-ed',
      'javascript',
      'ux-usability',
      'cms-configuration',
      'waterfall',
      'css',
      'cross-browser-compatibility',
      'library-jquery'
    ],
    categories: [
      'role',
      'user-experience-ux',
      'language',
      'project-type',
      'cms',
      'year',
      'industry',
      'sdlc',
      'tooling'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          },
          { id: 'ux-usability', name: 'Usability', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'responsive', name: 'Responsive', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Syracuse University, Whitman School of Management (2013)'
  },
  {
    id: 'bassett-furniture',
    name: 'Bassett Furniture',
    date: '2013-06-01',
    description:
      'Bassett Furniture has become a major player in the digital space, working very collaboratively, to grow from just an initial website presence to a company that successfully leverages just about every aspect of digital marketing.  Following a well-planned digital growth strategy, Bassett’s highly creative, well-integrated, e-commerce, content-rich, audience-focused approach at the local and national levels has been amazing.',
    features: [
      {
        heading: 'Feattures',
        items: [
          'Cascade Server CMS',
          'Creative, elegant design for national furniture company',
          'Cool custom “Rooms We Love”, “Fabrics We Love” Apps',
          'E-commerce by Geography (Admin function assigns orders to stores)',
          'Home page jQuery component',
          'Custom product interface from JD Edwards ERP',
          'Nextopia Site Search',
          'Regional Stores managed thru common CMS template',
          'Integration to multiple 3rd party software',
          'Comprehensive Digital Marketing Services',
          'Complex Google Analytics Implementation',
          'Custom Dedicated Hosting Services'
        ]
      }
    ],
    url: null,
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture-2013-home.png',
        originalAlt: 'Bassett Furniture',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture-2013-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture-2013-listing.png',
        originalAlt: 'Bassett Furniture',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture-2013-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture-2013-detail.png',
        originalAlt: 'Bassett Furniture',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture-2013-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture/bassett-furniture__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'bassett-furniture',
      name: 'Bassett Furniture',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/bassett__logo.svg'
    },
    tags: ['waterfall', '2013'],
    categories: ['sdlc', 'year'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Bassett Furniture (2013)'
  },
  {
    id: 'north-carolina-technology-association',
    name: 'North Carolina Technology Association',
    date: '2013-04-01',
    description:
      'With over 1000 members in NC, including major corporations like Cisco, IBM, Red Hat, Time Warner Cable, Google, Microsoft, and many more, NCTA’s website has become its communication portal across the state. ',
    features: [
      {
        heading: 'Features',
        items: [
          'Cascade Server CMS',
          'Responsive site redesign for desktop, tablet and mobile devices',
          'Site search installed with Google Custom Search',
          'Custom Event Calendar and Registration',
          'Google Analytics / Search Engine Optimization',
          'Web Hosting Services'
        ]
      },
      {
        heading: 'Highlights',
        items: [
          'Technical lead for responsive development',
          'Technical lead for responsive design',
          'Trained team on responsive development'
        ]
      }
    ],
    url: 'http://www.nctechnology.org',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/north-carolina-technology-association/ncta-1.png',
        originalAlt: 'North Carolina Technology Association',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/north-carolina-technology-association/ncta-1.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/north-carolina-technology-association/north-carolina-technology-association__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'north-carolina-technology-association',
      name: 'North Carolina Technology Association',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/north-carolina-technology-association__logo.svg'
    },
    tags: [
      '2013',
      'html',
      'css',
      'front-end',
      'javascript',
      'cross-browser-compatibility',
      'waterfall',
      'responsive'
    ],
    categories: [
      'year',
      'language',
      'role',
      'user-experience-ux',
      'sdlc',
      'project-type'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'responsive', name: 'Responsive', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'North Carolina Technology Association (2013)'
  },
  {
    id: 'burton-and-burton-2013',
    name: 'Burton + Burton - RWD',
    date: '2013-03-01',
    description: 'Coming Soon...',
    features: [],
    url: 'http://burtonandburton.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2013/burton-and-burton-1.png',
        originalAlt: 'Burton + Burton - RWD',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2013/burton-and-burton-1.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2013/burton-and-burton__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'burton-and-burton',
      name: 'Burton and Burton',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/burton-and-burton__logo.svg'
    },
    tags: [
      'css',
      'html',
      'xml',
      'type-b2b',
      'ecom-custom-in-house',
      'library-jquery',
      'javascript',
      'front-end',
      'responsive',
      'e-commerce',
      'consultant',
      'xslt',
      'type-e-commerce',
      'waterfall',
      'global',
      '2013',
      'google-analytics',
      'ui-design-review',
      'cascade-server'
    ],
    categories: [
      'language',
      'project-type',
      'e-commerce',
      'tooling',
      'role',
      'industry',
      'sdlc',
      'year',
      'analytics',
      'user-experience-ux',
      'cms'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-b2b', name: 'Business to Business (B2B)', display: true },
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'consultant', name: 'Consultant', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [{ id: 'ui-design-review', name: 'Design Review', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [
          { id: 'e-commerce', name: 'E-Commerce', display: true },
          { id: 'global', name: 'Global', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Burton + Burton - RWD (2013)'
  },
  {
    id: 'artsy-abode',
    name: 'Artsy Abode',
    date: '2013-02-26',
    description: null,
    features: [
      {
        heading: 'Site-Wide',
        items: [
          'Brand-based graphics in site header that link to topic pages maintainable by the client in Admin',
          'The background color is an appconfig that can be changed by the client via Admin simply by adding a new HEX color code!'
        ]
      },
      {
        heading: 'Home page',
        items: [
          'Flash home page slide show from original site replaced by a custom Beacon module that is administered in the Admin site',
          'Customer favorites section on home page populated by mapping products to the “Favorites” category',
          'Promotional graphics (under the rotating banner) editable via topic page'
        ]
      },
      {
        heading: 'Other',
        items: [
          'Thumbnail images displayed on the search results page (nonstandard functionality for AspDotNetStorefront)',
          'Enabled product option to display ring sizes',
          'Enhanced store locations page with links to Google maps and maintainable by the client in Admin',
          'Direct integration with Constant Contact for newsletter registration',
          'We also updated the design a bit and made it more modern and fresh'
        ]
      }
    ],
    url: 'https://artsyabode.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/artsy-abode/asrtsy-abode-home.png',
        originalAlt: 'Artsy Abode',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/artsy-abode/asrtsy-abode-home.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/artsy-abode/artsy-abode__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'artsy-abode',
      name: 'Artsy Abode',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/artsy-abode__logo.svg'
    },
    tags: [
      'ecomm-aspdotnetstorefront',
      'css',
      'type-e-commerce',
      'front-end',
      'html',
      'cross-browser-compatibility',
      '2013',
      'cms-configuration',
      'javascript',
      'google-analytics',
      'e-commerce',
      'waterfall'
    ],
    categories: [
      'e-commerce',
      'language',
      'project-type',
      'role',
      'user-experience-ux',
      'year',
      'analytics',
      'industry',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          {
            id: 'ecomm-aspdotnetstorefront',
            name: 'AspDotNetStorefront',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-e-commerce', name: 'E-Commerce', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'e-commerce', name: 'E-Commerce', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Artsy Abode (2013)'
  },
  {
    id: 'lucky-dog',
    name: 'Lucky Dog',
    date: '2013-01-02',
    description: 'Magento E-commerce',
    features: [],
    url: 'https://www.luckydogvolleyball.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-home.png',
        originalAlt: 'Lucky Dog',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-navigation.png',
        originalAlt: 'Lucky Dog',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-navigation.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-listing.png',
        originalAlt: 'Lucky Dog',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-detail.png',
        originalAlt: 'Lucky Dog',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/lucky-dog/lucky-dog__logo.svg',
    employer: {
      id: 'tiffany-lea-llc',
      name: 'Tiffany Lea LLC',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/tiffany-lea-llc__logo.svg'
    },
    client: {
      id: 'lucky-dog',
      name: 'Lucky Dog',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/lucky-dog__logo.svg'
    },
    tags: [
      'type-e-commerce',
      'waterfall',
      'e-commerce',
      'cms-configuration',
      'ecomm-magento',
      'ecomm-magento',
      '2013',
      'front-end'
    ],
    categories: [
      'project-type',
      'sdlc',
      'industry',
      'role',
      'e-commerce',
      'year'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-e-commerce', name: 'E-Commerce', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'e-commerce', name: 'E-Commerce', display: true }]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [{ id: 'ecomm-magento', name: 'Magento', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Lucky Dog (2013)'
  },
  {
    id: 'cuyamaca-college',
    name: 'Cuyamaca College',
    date: '2013-01-01',
    description: null,
    features: [
      {
        heading: 'Description',
        items: [
          'Web design and development using Cascade Server',
          '4000+ content pages imported and implemented into the templates',
          'Design provided by a third-party vendor and Beacon was responsible for the creation of a responsive design based on that layout',
          'Buckets for displaying content/images on any content page',
          'Accordions for expanding/collapse functionality on any content page',
          'Documents directory template to display contents of a folder',
          'Customized calendar with a public Submit an Event form',
          'News filtered from District listings, based on school',
          'Optional Last Updated date on interior content pages',
          'Mega site menu that is administered in one location in Cascade and does not require full site publish to update',
          'Several built-in emergency information templates',
          'Editable and optional Call to Action buttons',
          'Photo gallery template',
          'Custom faculty profile pages'
        ]
      },
      {
        heading: 'Responsibilities',
        items: [
          'All original front-end development',
          'All custom Cascade Server integration'
        ]
      }
    ],
    url: 'https://www.cuyamaca.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cuyamaca-college/cuyamaca-college-responsive.jpg',
        originalAlt: 'Cuyamaca College',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cuyamaca-college/cuyamaca-college-responsive.jpg'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cuyamaca-college/cuyamaca-college__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'grossmont-cuyamaca-community-college-district',
      name: 'Grossmont-Cuyamaca Community College District',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/grossmont-cuyamaca-community-college-district__logo.svg'
    },
    tags: [
      'cms-configuration',
      'cross-browser-compatibility',
      'xml',
      'higher-ed',
      'front-end',
      'css',
      '2013',
      'accessibility-508',
      'html',
      'library-jquery',
      'cascade-server',
      'responsive',
      'javascript',
      'google-analytics',
      'xslt',
      'waterfall'
    ],
    categories: [
      'role',
      'user-experience-ux',
      'language',
      'industry',
      'year',
      'tooling',
      'cms',
      'project-type',
      'analytics',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'responsive', name: 'Responsive', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Cuyamaca College (2012)'
  },
  {
    id: 'grossmont-cuyamaca-community-college-district',
    name: 'Grossmont-Cuyamaca Community College District',
    date: '2013-01-01',
    description: null,
    features: [
      {
        heading: 'Description',
        items: [
          'Web design and development using Cascade Server',
          '4000+ content pages imported and implemented into the templates',
          'Design provided by a third-party vendor and Beacon was responsible for the creation of a responsive design based on that layout',
          'Buckets for displaying content/images on any content page',
          'Accordions for expanding/collapse functionality on any content page',
          'Documents directory template to display contents of a folder',
          'Customized calendar with a public Submit an Event form',
          'News filtered from District listings, based on school',
          'Optional Last Updated date on interior content pages',
          'Mega site menu that is administered in one location in Cascade and does not require full site publish to update',
          'Several built-in emergency information templates',
          'Editable and optional Call to Action buttons',
          'Photo gallery template',
          'Custom faculty profile pages'
        ]
      },
      {
        heading: 'Responsibilities',
        items: [
          'All original front-end development',
          'All custom Cascade Server integration'
        ]
      }
    ],
    url: 'http://www.gcccd.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/grossmont-cuyamaca-community-college-district/gcccd-1.png',
        originalAlt: 'Grossmont-Cuyamaca Community College District',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/grossmont-cuyamaca-community-college-district/gcccd-1.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/grossmont-cuyamaca-community-college-district/grossmont-cuyamaca-community-college-district__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'grossmont-cuyamaca-community-college-district',
      name: 'Grossmont-Cuyamaca Community College District',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/grossmont-cuyamaca-community-college-district__logo.svg'
    },
    tags: [
      'waterfall',
      'javascript',
      'css',
      'html',
      'google-analytics',
      'library-jquery',
      'responsive',
      'xml',
      '2013',
      'xslt',
      'accessibility-508',
      'cms-configuration',
      'higher-ed',
      'cross-browser-compatibility',
      'cascade-server',
      'front-end'
    ],
    categories: [
      'sdlc',
      'language',
      'analytics',
      'tooling',
      'project-type',
      'year',
      'user-experience-ux',
      'role',
      'industry',
      'cms'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'responsive', name: 'Responsive', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Grossmont-Cuyamaca Community College District (2012)'
  },
  {
    id: 'grossmont-college',
    name: 'Grossmont College',
    date: '2013-01-01',
    description: null,
    features: [
      {
        heading: 'Description',
        items: [
          'Web design and development using Cascade Server',
          '4000+ content pages imported and implemented into the templates',
          'Design provided by a third-party vendor and Beacon was responsible for the creation of a responsive design based on that layout',
          'Buckets for displaying content/images on any content page',
          'Accordions for expanding/collapse functionality on any content page',
          'Documents directory template to display contents of a folder',
          'Customized calendar with a public Submit an Event form',
          'News filtered from District listings, based on school',
          'Optional Last Updated date on interior content pages',
          'Mega site menu that is administered in one location in Cascade and does not require full site publish to update',
          'Several built-in emergency information templates',
          'Editable and optional Call to Action buttons',
          'Photo gallery template',
          'Custom faculty profile pages'
        ]
      },
      {
        heading: 'Responsibilities',
        items: [
          'All original front-end development',
          'All custom Cascade Server integration'
        ]
      }
    ],
    url: 'https://www.grossmont.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/grossmont-college/grossmont-college-responsive.jpg',
        originalAlt: 'Grossmont College',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/grossmont-college/grossmont-college-responsive.jpg'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/grossmont-college/grossmont-college__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'grossmont-cuyamaca-community-college-district',
      name: 'Grossmont-Cuyamaca Community College District',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/grossmont-cuyamaca-community-college-district__logo.svg'
    },
    tags: [
      'css',
      'cascade-server',
      'higher-ed',
      'javascript',
      'type-mobile',
      'cms-configuration',
      'responsive',
      'waterfall',
      '2013',
      'front-end',
      'google-analytics',
      'html',
      'cross-browser-compatibility',
      'xslt',
      'xml',
      'accessibility-508',
      'library-jquery'
    ],
    categories: [
      'language',
      'cms',
      'industry',
      'project-type',
      'role',
      'sdlc',
      'year',
      'analytics',
      'user-experience-ux',
      'tooling'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2013', name: '2013', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-mobile', name: 'Mobile', display: true },
          { id: 'responsive', name: 'Responsive', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Grossmont College (2012)'
  },
  {
    id: 'furnitureland-south-2012',
    name: 'Furnitureland South',
    date: '2012-11-27',
    description: 'Coming Soon...',
    features: [],
    url: 'https://www.furniturelandsouth.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2012/image-coming-soon.png',
        originalAlt: 'Furnitureland South',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2012/image-coming-soon.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2012/furnitureland-south__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'furnitureland-south',
      name: 'Furnitureland South',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/furnitureland-south__logo.svg'
    },
    tags: [
      'ecom-custom-in-house',
      '2012',
      'type-e-commerce',
      'e-commerce',
      'lead',
      'waterfall'
    ],
    categories: [
      'e-commerce',
      'year',
      'project-type',
      'industry',
      'role',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2012', name: '2012', display: true }]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-e-commerce', name: 'E-Commerce', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'e-commerce', name: 'E-Commerce', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'lead', name: 'Lead', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Furnitureland South (2012)'
  },
  {
    id: 'whitman-school-of-management',
    name: 'Syracuse University, Whitman School of Management',
    date: '2012-10-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'All original front-end development',
          'All custom Cascade Server integration'
        ]
      }
    ],
    url: 'http://whitman.syr.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-home.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-navigation.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-navigation.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-storytelling.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-storytelling.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faculty-directory.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faculty-directory.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faculty-bio.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faculty-bio.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-testimonial-listing.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-testimonial-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-testimonial-detail.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-testimonial-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-newsroom.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-newsroom.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-news-detail.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-news-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-prospective-students.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-prospective-students.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faqs.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faqs.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faculty-research.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-faculty-research.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-contact-us.png',
        originalAlt: 'Syracuse University, Whitman School of Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-2012-contact-us.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/whitman-school-of-management/whitman-school-of-management__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'syracuse-university-whitman-school-of-management',
      name: 'Syracuse University, Whitman School of Management',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/whitman-school-of-management__logo.svg'
    },
    tags: [
      'front-end',
      'library-jquery',
      'accessibility-508',
      'javascript',
      'html',
      'higher-ed',
      'xslt',
      'xml',
      'cross-browser-compatibility',
      'cascade-server',
      'waterfall',
      'ux-usability',
      'cms-configuration',
      'css',
      '2012'
    ],
    categories: [
      'role',
      'tooling',
      'user-experience-ux',
      'language',
      'industry',
      'cms',
      'sdlc',
      'year'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2012', name: '2012', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          },
          { id: 'ux-usability', name: 'Usability', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Syracuse University, Whitman School of Management (2012)'
  },
  {
    id: 'southeastern-baptist-theological-seminary',
    name: 'Southeastern Baptist Theological Seminary',
    date: '2012-08-30',
    description: 'Consulted on project implementation',
    features: [
      {
        heading: 'Features',
        items: [
          'Cascade Server CMS site',
          'Complex home page, CMS maintained flash components',
          'Complex CMS workflow/approval process for content updates',
          'Emergency, site-wide status message function',
          'Client can create "microsites" for any department within the university',
          'Integration with campus-based applications including campus calendar and faculty pages',
          'Web Hosting services, including SAAS Cascade Server licensing'
        ]
      }
    ],
    url: 'https://www.sebts.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/southeastern-baptist-theological-seminary/sebts-home.png',
        originalAlt: 'Southeastern Baptist Theological Seminary',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/southeastern-baptist-theological-seminary/sebts-home.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/southeastern-baptist-theological-seminary/southeastern-baptist-theological-seminary__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'southeastern-baptist-theological-seminary',
      name: 'Southeastern Baptist Theological Seminary',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/southeastern-baptist-theological-seminary__logo.svg'
    },
    tags: [
      'consultant',
      'waterfall',
      'higher-ed',
      'google-analytics',
      'accessibility-508',
      '2012',
      'javascript',
      'xslt',
      'ux-accessibility',
      'css',
      'cross-browser-compatibility',
      'cascade-server',
      'xml',
      'html'
    ],
    categories: [
      'role',
      'sdlc',
      'industry',
      'analytics',
      'user-experience-ux',
      'year',
      'language',
      'cms'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2012', name: '2012', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          { id: 'ux-accessibility', name: 'Accessibility', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'consultant', name: 'Consultant', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Southeastern Baptist Theological Seminary (2012)'
  },
  {
    id: 'bassett-furniture-hgtv-home',
    name: 'Bassett Furniture - HGTV Home',
    date: '2012-07-01',
    description:
      'After being selected as a home furnishings partner/brand for HGTV, Bassett Furniture developed a new website to represent its new line for HGTV.',
    features: [],
    url: 'http://www.hgtvhomefurniture.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/hgtv-home.png',
        originalAlt: 'Bassett Furniture - HGTV Home',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/hgtv-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/hgtv-collection-listing.png',
        originalAlt: 'Bassett Furniture - HGTV Home',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/hgtv-collection-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/hgtv-collection-detail.png',
        originalAlt: 'Bassett Furniture - HGTV Home',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/hgtv-collection-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-hgtv-home/bassett-furniture-hgtv-home__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'bassett-furniture',
      name: 'Bassett Furniture',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/bassett__logo.svg'
    },
    tags: [
      'lead',
      'consultant',
      '2012',
      'type-e-commerce',
      'type-brand',
      'e-commerce',
      'waterfall'
    ],
    categories: ['role', 'year', 'project-type', 'industry', 'sdlc'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2012', name: '2012', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-brand', name: 'Brand', display: false },
          { id: 'type-e-commerce', name: 'E-Commerce', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'consultant', name: 'Consultant', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'e-commerce', name: 'E-Commerce', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Bassett Furniture - HGTV Home (2012)'
  },
  {
    id: 'tufenkian-outlet',
    name: 'Tufenkian Outlet',
    date: '2012-06-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'All original front-end development',
          'AspDotNetStorefront integration'
        ]
      }
    ],
    url: 'http://www.tufenkianoutlet.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-home.png',
        originalAlt: 'Tufenkian Outlet',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-listing.png',
        originalAlt: 'Tufenkian Outlet',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-detail.png',
        originalAlt: 'Tufenkian Outlet',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-mini-cart.png',
        originalAlt: 'Tufenkian Outlet',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-mini-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-cart.png',
        originalAlt: 'Tufenkian Outlet',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-care.png',
        originalAlt: 'Tufenkian Outlet',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian-outlet-care.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tufenkian-outlet/tufenkian__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'tufenkian-outlet',
      name: 'Tufenkian Outlet',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/tufenkian__logo.svg'
    },
    tags: [
      'javascript',
      'ecomm-aspdotnetstorefront',
      'library-jquery',
      'html',
      'type-e-commerce',
      'waterfall',
      'css',
      'front-end',
      'cross-browser-compatibility',
      'google-analytics',
      'e-commerce'
    ],
    categories: [
      'language',
      'e-commerce',
      'tooling',
      'project-type',
      'sdlc',
      'role',
      'user-experience-ux',
      'analytics',
      'industry'
    ],
    tagsByCategory: {
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          {
            id: 'ecomm-aspdotnetstorefront',
            name: 'AspDotNetStorefront',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-e-commerce', name: 'E-Commerce', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'e-commerce', name: 'E-Commerce', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Tufenkian Outlet (2012)'
  },
  {
    id: 'nj-resources',
    name: 'NJ Resources',
    date: '2012-05-31',
    description: null,
    features: [
      {
        heading: 'Features',
        items: [
          'One of a set of 6 inter-related websites for NJR Services Corporation',
          'Cascade Server CMS implementation',
          'Development of web interfaces to back office systems',
          'Consulting',
          'Ongoing maintenance'
        ]
      }
    ],
    url: null,
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-home.png',
        originalAlt: 'NJ Resources',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-interior.png',
        originalAlt: 'NJ Resources',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-interior.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-news-listing.png',
        originalAlt: 'NJ Resources',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-news-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-news-detail.png',
        originalAlt: 'NJ Resources',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-news-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-search.png',
        originalAlt: 'NJ Resources',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-search.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-sitemap.png',
        originalAlt: 'NJ Resources',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/njr-nj-resources-sitemap.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-resources/new-jersey-resources__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'njr-services-corporation',
      name: 'NJR Services Corporation',
      logo: null
    },
    tags: [
      'cascade-server',
      'javascript',
      '2012',
      'asp-net',
      'xml',
      'front-end',
      'cms-configuration',
      'ux-accessibility',
      'cross-browser-compatibility',
      'library-jquery',
      'css',
      'utilities',
      'waterfall',
      'html',
      'accessibility-508',
      'lead',
      'xslt'
    ],
    categories: [
      'cms',
      'language',
      'year',
      'role',
      'user-experience-ux',
      'tooling',
      'industry',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2012', name: '2012', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          { id: 'ux-accessibility', name: 'Accessibility', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp-net', name: 'ASP.NET', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'utilities', name: 'Utilities', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'NJ Resources (2012)'
  },
  {
    id: 'njr-home-services',
    name: 'NJR Home Services',
    date: '2012-05-31',
    description: null,
    features: [
      {
        heading: 'Features',
        items: [
          'One of a set of 6 inter-related websites for NJR Services Corporation',
          'Cascade Server CMS implementation',
          'Development of web interfaces to back office systems',
          'Consulting',
          'Ongoing maintenance'
        ]
      }
    ],
    url: 'https://www.njrhomeservices.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-home.png',
        originalAlt: 'NJR Home Services',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-interior.png',
        originalAlt: 'NJR Home Services',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-interior.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-reviews.png',
        originalAlt: 'NJR Home Services',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-reviews.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-search.png',
        originalAlt: 'NJR Home Services',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-search.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-sitemap.png',
        originalAlt: 'NJR Home Services',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/njr-njr-home-services-sitemap.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-home-services/new-jersey-home-services__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'njr-services-corporation',
      name: 'NJR Services Corporation',
      logo: null
    },
    tags: [
      'css',
      'xslt',
      'cross-browser-compatibility',
      'ux-accessibility',
      'asp-net',
      'html',
      '2012',
      'cascade-server',
      'front-end',
      'accessibility-508',
      'xml',
      'waterfall',
      'lead',
      'utilities',
      'javascript',
      'library-jquery',
      'cms-configuration'
    ],
    categories: [
      'language',
      'user-experience-ux',
      'year',
      'cms',
      'role',
      'sdlc',
      'industry',
      'tooling'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2012', name: '2012', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          { id: 'ux-accessibility', name: 'Accessibility', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp-net', name: 'ASP.NET', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'utilities', name: 'Utilities', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'NJR Home Services (2012)'
  },
  {
    id: 'njr-energy-services',
    name: 'NJR Energy Services',
    date: '2012-05-31',
    description: null,
    features: [
      {
        heading: 'Features',
        items: [
          'One of a set of 6 inter-related websites for NJR Services Corporation',
          'Cascade Server CMS implementation',
          'Development of web interfaces to back office systems',
          'Consulting',
          'Ongoing maintenance'
        ]
      }
    ],
    url: null,
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-home.png',
        originalAlt: 'NJR Energy Services',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-interior.png',
        originalAlt: 'NJR Energy Services',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-interior.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-search.png',
        originalAlt: 'NJR Energy Services',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-search.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-sitemap.png',
        originalAlt: 'NJR Energy Services',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/njr-njr-energy-services-sitemap.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/njr-energy-services/new-jersey-energy-services__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'njr-services-corporation',
      name: 'NJR Services Corporation',
      logo: null
    },
    tags: [
      'front-end',
      'javascript',
      'css',
      'cross-browser-compatibility',
      '2012',
      'lead',
      'cms-configuration',
      'accessibility-508',
      'utilities',
      'xml',
      'waterfall',
      'ux-accessibility',
      'xslt',
      'html',
      'cascade-server',
      'library-jquery',
      'asp-net'
    ],
    categories: [
      'role',
      'language',
      'user-experience-ux',
      'year',
      'industry',
      'sdlc',
      'cms',
      'tooling'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2012', name: '2012', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          { id: 'ux-accessibility', name: 'Accessibility', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp-net', name: 'ASP.NET', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'utilities', name: 'Utilities', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'NJR Energy Services (2012)'
  },
  {
    id: 'nj-natural-gas',
    name: 'NJ Natural Gas',
    date: '2012-05-31',
    description: null,
    features: [
      {
        heading: 'Features',
        items: [
          'One of a set of 6 inter-related websites for NJR Services Corporation',
          'Cascade Server CMS implementation',
          'Development of web interfaces to back office systems',
          'Consulting',
          'Ongoing maintenance'
        ]
      }
    ],
    url: 'https://www.njng.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-home.png',
        originalAlt: 'NJ Natural Gas',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-interior.png',
        originalAlt: 'NJ Natural Gas',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-interior.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-login.png',
        originalAlt: 'NJ Natural Gas',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-login.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-account-summary.png',
        originalAlt: 'NJ Natural Gas',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-account-summary.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-registration.png',
        originalAlt: 'NJ Natural Gas',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-registration.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-ways-to-pay.png',
        originalAlt: 'NJ Natural Gas',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-ways-to-pay.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-billpay.png',
        originalAlt: 'NJ Natural Gas',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-billpay.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-paperless.png',
        originalAlt: 'NJ Natural Gas',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-paperless.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-autopay.png',
        originalAlt: 'NJ Natural Gas',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-autopay.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-faqs.png',
        originalAlt: 'NJ Natural Gas',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-faqs.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-search.png',
        originalAlt: 'NJ Natural Gas',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-search.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-sitemap.png',
        originalAlt: 'NJ Natural Gas',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/njr-nj-natural-gas-sitemap.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/nj-natural-gas/new-jersey-natural-gas__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'njr-services-corporation',
      name: 'NJR Services Corporation',
      logo: null
    },
    tags: [
      'cascade-server',
      'xslt',
      'library-jquery',
      'utilities',
      'javascript',
      'xml',
      'cms-configuration',
      'front-end',
      'html',
      'ux-accessibility',
      'cross-browser-compatibility',
      'accessibility-508',
      'css',
      'lead',
      '2012',
      'waterfall',
      'asp-net'
    ],
    categories: [
      'cms',
      'language',
      'tooling',
      'industry',
      'role',
      'user-experience-ux',
      'year',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2012', name: '2012', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          { id: 'ux-accessibility', name: 'Accessibility', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp-net', name: 'ASP.NET', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'utilities', name: 'Utilities', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'NJ Natural Gas (2012)'
  },
  {
    id: 'hartford-university-2012',
    name: 'Hartford University - New Homepage',
    date: '2012-03-01',
    description: "Converted flash homepage 'My Story' to jQuery",
    features: [
      {
        heading: 'Homepage My Story Feature',
        items: [
          'Randomized thumbnail order on load after the first visit',
          'Each story links to a story page where it displays a YouTube video player',
          'Current stories that are shown and sort order on the first load are controlled within Cascade Server',
          'All story text and images are controlled within Cascade Server'
        ]
      },
      {
        heading: 'Responsibilities',
        items: [
          'All original front-end development',
          'All custom Cascade Server integration'
        ]
      }
    ],
    url: 'http://www.hartford.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-2012/university-of-hartford-2012-home.png',
        originalAlt: 'Hartford University - New Homepage',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-2012/university-of-hartford-2012-home.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-2012/Homepage__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'university-of-hartford',
      name: 'University of Hartford',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-hartford__logo.svg'
    },
    tags: [
      'front-end',
      'css',
      'library-jquery',
      'xslt',
      'accessibility-508',
      'waterfall',
      '2012',
      'cms-configuration',
      'html',
      'cross-browser-compatibility',
      'higher-ed',
      'xml',
      'javascript',
      'cascade-server'
    ],
    categories: [
      'role',
      'language',
      'tooling',
      'user-experience-ux',
      'sdlc',
      'year',
      'industry',
      'cms'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2012', name: '2012', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Hartford University - New Homepage (2012)'
  },
  {
    id: 'bassett-furniture-mobile',
    name: 'Bassett Furniture Mobile Site',
    date: '2012-03-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'All original front-end development (HTML/CSS/JS)',
          'Some back-end development (ASP)',
          'jQuery Mobile integration',
          'Cascade Server (CMS) integration',
          'Redesigning parts of site based on User Interface and User Experience'
        ]
      }
    ],
    url: 'http://www.bassettfurniture.com/mobile/',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-mobile/bassett-mobile-combo-1.png',
        originalAlt: 'Bassett Furniture Mobile Site',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-mobile/bassett-mobile-combo-1.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-mobile/bassett-mobile-combo-2.png',
        originalAlt: 'Bassett Furniture Mobile Site',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-mobile/bassett-mobile-combo-2.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-mobile/bassett-furniture-mobile__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'bassett-furniture',
      name: 'Bassett Furniture',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/bassett__logo.svg'
    },
    tags: [
      'cms-configuration',
      'waterfall',
      'css',
      'type-e-commerce',
      'front-end',
      'type-mobile',
      'library-jquery',
      'html',
      'cross-browser-compatibility',
      'asp',
      'google-analytics',
      'xml',
      '2012',
      'xslt',
      'javascript',
      'ecom-custom-in-house',
      'cascade-server',
      'consultant'
    ],
    categories: [
      'role',
      'sdlc',
      'language',
      'project-type',
      'tooling',
      'user-experience-ux',
      'analytics',
      'year',
      'e-commerce',
      'cms'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2012', name: '2012', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'consultant', name: 'Consultant', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'type-mobile', name: 'Mobile', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Bassett Furniture Mobile Site (2012)'
  },
  {
    id: 'texwipe',
    name: 'Texwipe',
    date: '2012-01-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'All original front-end development (HTML/CSS/JS)',
          'Custom Cascade Server integration (CMS)',
          'AspDotNetStorefront integration (E-Commerce)',
          'Merging navigation between Cascade Server and AspDotNetStorefront',
          'Region-specific content and navigation (custom Cascade Server setup)'
        ]
      }
    ],
    url: 'http://www.texwipe.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texwipe/texwipe-1.png',
        originalAlt: 'Texwipe',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texwipe/texwipe-1.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texwipe/texwipe__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'texwipe',
      name: 'Texwipe',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/texwipe__logo.svg'
    },
    tags: [
      '2012',
      'css',
      'cms-configuration',
      'google-analytics',
      'medical',
      'e-commerce',
      'html',
      'xml',
      'front-end',
      'xslt',
      'cascade-server',
      'waterfall',
      'type-e-commerce',
      'javascript',
      'type-informational',
      'cross-browser-compatibility',
      'library-jquery',
      'ecomm-aspdotnetstorefront'
    ],
    categories: [
      'year',
      'language',
      'role',
      'analytics',
      'industry',
      'cms',
      'sdlc',
      'project-type',
      'user-experience-ux',
      'tooling',
      'e-commerce'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2012', name: '2012', display: true }]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          {
            id: 'ecomm-aspdotnetstorefront',
            name: 'AspDotNetStorefront',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [
          { id: 'e-commerce', name: 'E-Commerce', display: true },
          { id: 'medical', name: 'Medical', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'type-informational', name: 'Informational', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Texwipe (2011)'
  },
  {
    id: 'tamf-ifound-forum',
    name: 'TAMF iFound Forum',
    date: '2011-12-15',
    description: 'Texas A&M Foundation intranet forums',
    features: [],
    url: null,
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-forum/texas-a-and-m-foundation-intranet-forum-list.png',
        originalAlt: 'TAMF iFound Forum',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-forum/texas-a-and-m-foundation-intranet-forum-list.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-forum/texas-a-and-m-foundation-intranet-forum-detail.png',
        originalAlt: 'TAMF iFound Forum',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-forum/texas-a-and-m-foundation-intranet-forum-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-forum/texas-a-and-m-foundation-ifound-forum__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'texas-am-foundation',
      name: 'Texas A&M Foundation',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/texas-a-and-m-foundation__logo.svg'
    },
    tags: [
      'data-mysql',
      'full-stack',
      'back-end',
      'cms-configuration',
      'front-end',
      '2011',
      'type-intranet',
      'waterfall',
      'php'
    ],
    categories: ['data', 'role', 'year', 'project-type', 'sdlc', 'language'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'back-end', name: 'Back End', display: true },
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'full-stack', name: 'Full Stack', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-intranet', name: 'Intranet', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [{ id: 'php', name: 'PHP', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'TAMF iFound Forum (2011)'
  },
  {
    id: 'tamf-ifound-blog',
    name: 'TAMF iFound Blog',
    date: '2011-12-15',
    description: 'Texas A&M Foundation intranet blog',
    features: [],
    url: null,
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-blog/texas-a-and-m-foundation-intranet-blog-home.png',
        originalAlt: 'TAMF iFound Blog',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-blog/texas-a-and-m-foundation-intranet-blog-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-blog/texas-a-and-m-foundation-intranet-blog-detail.png',
        originalAlt: 'TAMF iFound Blog',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-blog/texas-a-and-m-foundation-intranet-blog-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound-blog/texas-a-and-m-foundation-ifound-blog__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'texas-am-foundation',
      name: 'Texas A&M Foundation',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/texas-a-and-m-foundation__logo.svg'
    },
    tags: [
      'type-intranet',
      'cms-wordpress',
      'waterfall',
      'blog',
      'data-mysql',
      '2011'
    ],
    categories: ['project-type', 'cms', 'sdlc', 'data', 'year'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'blog', name: 'Blog', display: true },
          { id: 'type-intranet', name: 'Intranet', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cms-wordpress', name: 'Wordpress', display: true }]
      }
    },
    displayName: 'TAMF iFound Blog (2011)'
  },
  {
    id: 'tamf-ifound',
    name: 'TAMF iFound',
    date: '2011-12-15',
    description: 'Texas A&M Foundation intranet ',
    features: [],
    url: null,
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-home.png',
        originalAlt: 'TAMF iFound',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-home%20copy.png',
        originalAlt: 'TAMF iFound',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-home%20copy.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-profile.png',
        originalAlt: 'TAMF iFound',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-profile.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-calendar-month.png',
        originalAlt: 'TAMF iFound',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-calendar-month.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-calendar-week.png',
        originalAlt: 'TAMF iFound',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-calendar-week.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-calendar-day.png',
        originalAlt: 'TAMF iFound',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-intranet-calendar-day.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/tamf-ifound/texas-a-and-m-foundation-ifound__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'texas-am-foundation',
      name: 'Texas A&M Foundation',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/texas-a-and-m-foundation__logo.svg'
    },
    tags: [
      '2011',
      'waterfall',
      'cascade-server',
      'full-stack',
      'cms-configuration',
      'type-intranet',
      'back-end',
      'front-end',
      'lead'
    ],
    categories: ['year', 'sdlc', 'cms', 'role', 'project-type'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'back-end', name: 'Back End', display: true },
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'full-stack', name: 'Full Stack', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-intranet', name: 'Intranet', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'TAMF iFound (2011)'
  },
  {
    id: 'los-alamos-national-laboratory',
    name: 'Los Alamos National Laboratory',
    date: '2011-12-01',
    description: 'Coming Soon...',
    features: [],
    url: 'https://www.lanl.gov',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-home.png',
        originalAlt: 'Los Alamos National Laboratory',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-listing.png',
        originalAlt: 'Los Alamos National Laboratory',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-landing.png',
        originalAlt: 'Los Alamos National Laboratory',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-landing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-news-and-media.png',
        originalAlt: 'Los Alamos National Laboratory',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-news-and-media.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-interior.png',
        originalAlt: 'Los Alamos National Laboratory',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-interior.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-dev-notes.png',
        originalAlt: 'Los Alamos National Laboratory',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/lanl-dev-notes.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/los-alamos-national-laboratory/los-alamos-national-laboratory__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'los-alamos-national-laboratory',
      name: 'Los Alamos National Laboratory',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/los-alamos-national-laboratory__logo.svg'
    },
    tags: [
      'cross-browser-compatibility',
      'javascript',
      'front-end',
      'waterfall',
      '2011'
    ],
    categories: ['user-experience-ux', 'language', 'role', 'sdlc', 'year'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [{ id: 'javascript', name: 'JavaScript', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Los Alamos National Laboratory (2011)'
  },
  {
    id: 'basin-electric-copy-site',
    name: 'Basin Electric - Copy Site Script',
    date: '2011-11-01',
    description:
      'This script will copy one site into a new site within Cascade Server CMS. Automating a tedious task that was a full-time 3-month long job for 3 people.',
    features: [],
    url: null,
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-copy-site/basin-eletric-copt-site-script.png',
        originalAlt: 'Basin Electric - Copy Site Script',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-copy-site/basin-eletric-copt-site-script.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-copy-site/basin-electric-power-cooperative__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'basin-electric-power-cooperative',
      name: 'Basin Electric Power Cooperative',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/basin-electric-power-cooperative__logo.svg'
    },
    tags: [
      'utilities',
      'waterfall',
      'php',
      'front-end',
      'cms-configuration',
      'xml',
      'css',
      'html',
      'cascade-server',
      '2011',
      'xslt'
    ],
    categories: ['industry', 'sdlc', 'language', 'role', 'cms', 'year'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'php', name: 'PHP', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'utilities', name: 'Utilities', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Basin Electric - Copy Site Script (2011)'
  },
  {
    id: 'hartford-university-calendar',
    name: 'Hartford University - Calendar Updates',
    date: '2011-10-10',
    description:
      'Major overhaul of calendars to make them dynamic and less strain on Cascade Server publishing and rendering.',
    features: [],
    url: null,
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-month.png',
        originalAlt: 'Hartford University - Calendar Updates',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-month.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-day.png',
        originalAlt: 'Hartford University - Calendar Updates',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-day.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-next-7.png',
        originalAlt: 'Hartford University - Calendar Updates',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-next-7.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-category.png',
        originalAlt: 'Hartford University - Calendar Updates',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-category.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-event-detail.png',
        originalAlt: 'Hartford University - Calendar Updates',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-event-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-any-page.png',
        originalAlt: 'Hartford University - Calendar Updates',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/university-of-hartford-calendar-any-page.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/hartford-university-calendar/Calendar__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'university-of-hartford',
      name: 'University of Hartford',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-hartford__logo.svg'
    },
    tags: [
      'html',
      'velocity',
      'xml',
      '2011',
      'accessibility-508',
      'xslt',
      'css',
      'cms-configuration',
      'ux-accessibility',
      'back-end',
      'asp',
      'cross-browser-compatibility',
      'higher-ed',
      'full-stack',
      'cascade-server',
      'waterfall',
      'front-end'
    ],
    categories: [
      'language',
      'year',
      'user-experience-ux',
      'role',
      'industry',
      'cms',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          { id: 'ux-accessibility', name: 'Accessibility', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'velocity', name: 'Velocity', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'back-end', name: 'Back End', display: true },
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'full-stack', name: 'Full Stack', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Hartford University - Calendar Updates (2011)'
  },
  {
    id: 'beacon-technologies-kb',
    name: 'Beacon Technologies - KB',
    date: '2011-09-01',
    description: 'Coming Soon...',
    features: [],
    url: null,
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-kb/image-coming-soon.png',
        originalAlt: 'Beacon Technologies - KB',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-kb/image-coming-soon.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/beacon-technologies-kb/beacon-technologies__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/beacon-technologies__logo.svg'
    },
    tags: ['waterfall', 'role-design', 'data-mysql', '2011', 'drupal'],
    categories: ['sdlc', 'role', 'data', 'year', 'cms'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'role-design', name: 'Design', display: true }]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'drupal', name: 'Drupal', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Beacon Technologies - KB (2011)'
  },
  {
    id: 'university-hartford-mobile',
    name: 'University of Hartford - Mobile',
    date: '2011-06-01',
    description: 'Project consulting for mobile',
    features: [],
    url: 'http://www.hartford.edu/default-m.aspx',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/university-of-hartford-mobile-combo-1.png',
        originalAlt: 'University of Hartford - Mobile',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/university-of-hartford-mobile-combo-1.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/university-of-hartford-mobile-combo-3.png',
        originalAlt: 'University of Hartford - Mobile',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/university-of-hartford-mobile-combo-3.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/university-of-hartford-mobile-combo-2.png',
        originalAlt: 'University of Hartford - Mobile',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/university-of-hartford-mobile-combo-2.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-mobile/Mobile__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'university-of-hartford',
      name: 'University of Hartford',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-hartford__logo.svg'
    },
    tags: [
      'higher-ed',
      'javascript',
      'ux-accessibility',
      'xslt',
      'css',
      'html',
      'xml',
      'waterfall',
      'accessibility-508',
      'asp-net',
      'consultant',
      '2011',
      'type-mobile',
      'cross-browser-compatibility'
    ],
    categories: [
      'industry',
      'language',
      'user-experience-ux',
      'sdlc',
      'role',
      'year',
      'project-type'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          { id: 'ux-accessibility', name: 'Accessibility', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp-net', name: 'ASP.NET', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'consultant', name: 'Consultant', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-mobile', name: 'Mobile', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'University of Hartford - Mobile (2011)'
  },
  {
    id: 'university-houston-2011',
    name: 'University of Houston - You are the pride',
    date: '2011-05-01',
    description: null,
    features: [
      {
        heading: 'Features',
        items: [
          'Provide cross-browser and Section 508 compliance by re-writing the HTML/CSS/JavaScript applications',
          'Migrate the entire site from its current format into Cascade Server CMS',
          'Add a Blog listing feature into the Cascade Server implementation, which categorizes each blog site entry, and pulls in data from each blog’s RSS feed',
          'Add a Social Media listing page, which organizes each link by category, and type (Facebook, Twitter, YouTube)',
          'Develop PHP-based registration and login functionality, including an Administration section for managing user access',
          'Insert a commenting application (Echo) on certain pages',
          'Provide customized Cascade Server documentation and training'
        ]
      }
    ],
    url: 'https://www.uh.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-home.png',
        originalAlt: 'University of Houston - You are the pride',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-photos.png',
        originalAlt: 'University of Houston - You are the pride',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-photos.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-videos.png',
        originalAlt: 'University of Houston - You are the pride',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-videos.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-top-stories.png',
        originalAlt: 'University of Houston - You are the pride',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-top-stories.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-directory.png',
        originalAlt: 'University of Houston - You are the pride',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/university-of-houston-yatp-directory.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2011/YATP__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'university-houston',
      name: 'University of Houston',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-houston__logo.svg'
    },
    tags: [
      'xml',
      'xslt',
      '2011',
      'accessibility-508',
      'ux-usability',
      'javascript',
      'php',
      'css',
      'html',
      'cross-browser-compatibility',
      'higher-ed',
      'cms-configuration',
      'cascade-server',
      'front-end',
      'waterfall',
      'google-analytics'
    ],
    categories: [
      'language',
      'year',
      'user-experience-ux',
      'industry',
      'role',
      'cms',
      'sdlc',
      'analytics'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          },
          { id: 'ux-usability', name: 'Usability', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'php', name: 'PHP', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'University of Houston - You are the pride (2011)'
  },
  {
    id: 'bassett-furniture-fabrics-we-love',
    name: 'Bassett Furniture - Fabrics We Love',
    date: '2011-05-01',
    description:
      'An interactive way for customers to find fabrics they love and save their favorites.',
    features: [],
    url: 'https://www.bassettfurniture.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love-1.png',
        originalAlt: 'Bassett Furniture - Fabrics We Love',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love-1.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love-2.png',
        originalAlt: 'Bassett Furniture - Fabrics We Love',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love-2.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love-3.png',
        originalAlt: 'Bassett Furniture - Fabrics We Love',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love-3.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bassett-furniture-fabrics-we-love/bassett-furniture-fabrics-we-love__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'bassett-furniture',
      name: 'Bassett Furniture',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/bassett__logo.svg'
    },
    tags: [
      'asp',
      'javascript',
      'front-end',
      'cascade-server',
      '2011',
      'back-end',
      'type-brand',
      'waterfall',
      'type-informational',
      'lead',
      'full-stack'
    ],
    categories: ['language', 'role', 'cms', 'year', 'project-type', 'sdlc'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'back-end', name: 'Back End', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'full-stack', name: 'Full Stack', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-brand', name: 'Brand', display: false },
          { id: 'type-informational', name: 'Informational', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Bassett Furniture - Fabrics We Love (2011)'
  },
  {
    id: 'basin-electric-power-cooperative',
    name: 'Basin Electric Power Cooperative',
    date: '2011-05-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'Importing the existing site content for both Basin Electric Power Cooperative and Dakota Gasification Company into Cascade Server via a custom Web Services (PHP) script',
          'Cascade Server integration',
          'Back-end PHP work on their existing calendar',
          'Back-end PHP and custom Cascade Server integration for new related items in the right column'
        ]
      }
    ],
    url: 'http://www.basinelectric.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-eletric-home.png',
        originalAlt: 'Basin Electric Power Cooperative',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-eletric-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-eletric-calendar.png',
        originalAlt: 'Basin Electric Power Cooperative',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-eletric-calendar.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-eletric-right-sidebar.png',
        originalAlt: 'Basin Electric Power Cooperative',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-eletric-right-sidebar.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/basin-electric-power-cooperative/basin-electric-power-cooperative__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'basin-electric-power-cooperative',
      name: 'Basin Electric Power Cooperative',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/basin-electric-power-cooperative__logo.svg'
    },
    tags: [
      'cms-configuration',
      'javascript',
      'xml',
      'google-analytics',
      'xslt',
      'css',
      '2011',
      'front-end',
      'waterfall',
      'php',
      'html',
      'cascade-server'
    ],
    categories: ['role', 'language', 'analytics', 'year', 'sdlc', 'cms'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'php', name: 'PHP', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Basin Electric Power Cooperative (2011)'
  },
  {
    id: 'bmi-surplus',
    name: 'BMI Surplus',
    date: '2011-05-01',
    description: null,
    features: [
      {
        heading: 'Project Highlights',
        items: [
          'AspDotNetStorefront Version 9.1',
          'Rotating banner on home page pulling from Featured Products category',
          'Paginated, sortable and filterable category landing pages',
          'Custom fields pulled from backoffice system for product detail page (condition, tested, location, etc.)',
          'Share this button on product detail page',
          'Customized ‘Email a friend’ form that sends questions to customer service',
          'Customized shipping functionality (allow warehouse pickup, self-shipping)',
          'Wire transfer as a payment option',
          'Integration with back-office inventory system (Fishbowl)',
          'Web marketing analysis and recommendations',
          'eNewsletter signup integrated with Constant Contact',
          'Enhanced basic and advanced site search'
        ]
      }
    ],
    url: 'http://www.bmius.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus-home.png',
        originalAlt: 'BMI Surplus',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus-listing.png',
        originalAlt: 'BMI Surplus',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus-detail.png',
        originalAlt: 'BMI Surplus',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/bmi-surplus/bmi-surplus__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'bmi-surplus',
      name: 'BMI Surplus',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/bmi-surplus__logo.svg'
    },
    tags: [
      'ecomm-aspdotnetstorefront',
      'cms-configuration',
      'back-end',
      'lead',
      'type-e-commerce',
      'google-analytics',
      'front-end',
      'e-commerce',
      'waterfall',
      'asp-net',
      'full-stack',
      '2011'
    ],
    categories: [
      'e-commerce',
      'role',
      'project-type',
      'analytics',
      'industry',
      'sdlc',
      'language',
      'year'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [{ id: 'asp-net', name: 'ASP.NET', display: true }]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          {
            id: 'ecomm-aspdotnetstorefront',
            name: 'AspDotNetStorefront',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'back-end', name: 'Back End', display: true },
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'full-stack', name: 'Full Stack', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-e-commerce', name: 'E-Commerce', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'e-commerce', name: 'E-Commerce', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'BMI Surplus (2011)'
  },
  {
    id: 'winston-salem-state-university-mobile',
    name: 'Winston-Salem State University - Mobile',
    date: '2011-01-01',
    description: null,
    features: [
      {
        heading: 'Features',
        items: [
          "Beacon's first mobile site",
          'Used One Mobile principles to work across many devices',
          'Mobile detection script'
        ]
      },
      {
        heading: 'Responsibilities',
        items: [
          'Planning',
          'Design',
          'Development',
          'Cascade Server integration'
        ]
      }
    ],
    url: 'http://www.wssu.edu/default-m.aspx',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-home-audience.png',
        originalAlt: 'Winston-Salem State University - Mobile',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-home-audience.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-news.png',
        originalAlt: 'Winston-Salem State University - Mobile',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-news.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-events.png',
        originalAlt: 'Winston-Salem State University - Mobile',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-events.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-interior-map.png',
        originalAlt: 'Winston-Salem State University - Mobile',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/wssu-mobile-combo-interior-map.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-mobile/Mobile__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'winston-salem-state-university',
      name: 'Winston-Salem State University',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/winston-salem-state-university__logo.svg'
    },
    tags: [
      'css',
      'consultant',
      'full-stack',
      'library-jquery',
      'html',
      'xslt',
      'higher-ed',
      'xml',
      'type-mobile',
      'cascade-server',
      'ux-user-testing',
      'accessibility-508',
      'back-end',
      'ux-usability',
      'ux-accessibility',
      'cross-browser-compatibility',
      '2011',
      'front-end',
      'role-design',
      'asp-net',
      'waterfall',
      'lead',
      'cms-configuration'
    ],
    categories: [
      'language',
      'role',
      'tooling',
      'industry',
      'project-type',
      'cms',
      'user-experience-ux',
      'year',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          { id: 'ux-accessibility', name: 'Accessibility', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          },
          { id: 'ux-usability', name: 'Usability', display: true },
          { id: 'ux-user-testing', name: 'User Testing', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp-net', name: 'ASP.NET', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'back-end', name: 'Back End', display: true },
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'consultant', name: 'Consultant', display: true },
          { id: 'role-design', name: 'Design', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'full-stack', name: 'Full Stack', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-mobile', name: 'Mobile', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Winston-Salem State University - Mobile (2010)'
  },
  {
    id: 'winston-salem-state-university',
    name: 'Winston-Salem State University',
    date: '2011-01-01',
    description: null,
    features: [
      {
        heading: 'Features',
        items: [
          'Cascade Server CMS Implementation',
          'Migrated 3500 pages from the previous website to brand new design & nav structure',
          'Design & Information Architecture',
          'Designed specifically for multiple audiences (students, parents, alumni, faculty)',
          'Trained 40 users and coordinated 14 Content Owner Groups',
          'Homepage Flash Component',
          'An emergency status message that allows administrators to instantly display an emergency message on every page of the website',
          'Incorporation of social media network into the homepage',
          'News and events are dynamically fed to homepage',
          'Advanced Site Search (Google Mini)',
          'ADA compliant website'
        ]
      },
      {
        heading: 'Responsibilities',
        items: [
          'Homepage Flash (configurable through Cascade Server)',
          'All front-end development',
          'Cascade Server integration'
        ]
      }
    ],
    url: 'http://wssu.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-home.png',
        originalAlt: 'Winston-Salem State University',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-audience.png',
        originalAlt: 'Winston-Salem State University',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-audience.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-landing.png',
        originalAlt: 'Winston-Salem State University',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-landing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-interior.png',
        originalAlt: 'Winston-Salem State University',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-interior.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-events.png',
        originalAlt: 'Winston-Salem State University',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-events.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-a-z-index.png',
        originalAlt: 'Winston-Salem State University',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-a-z-index.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-navigation.png',
        originalAlt: 'Winston-Salem State University',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/wssu-desktop-navigation.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university/winston-salem-state-university__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'winston-salem-state-university',
      name: 'Winston-Salem State University',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/winston-salem-state-university__logo.svg'
    },
    tags: [
      'xslt',
      'html',
      'javascript',
      'xml',
      'google-analytics',
      '2011',
      'ux-information-architecture',
      'cascade-server',
      'accessibility-508',
      'higher-ed',
      'front-end',
      'type-mobile',
      'waterfall',
      'asp-net',
      'cms-configuration',
      'css',
      'library-jquery',
      'ux-usability',
      'cross-browser-compatibility'
    ],
    categories: [
      'language',
      'analytics',
      'year',
      'user-experience-ux',
      'cms',
      'industry',
      'role',
      'project-type',
      'sdlc',
      'tooling'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          },
          {
            id: 'ux-information-architecture',
            name: 'Information architecture',
            display: true
          },
          { id: 'ux-usability', name: 'Usability', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp-net', name: 'ASP.NET', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-mobile', name: 'Mobile', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Winston-Salem State University (2010)'
  },
  {
    id: 'apex-analytix',
    name: 'Apex Analytix',
    date: '2011-01-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'Site Development',
          'Flash Development',
          'Cascade Server Setup and Configuration'
        ]
      }
    ],
    url: 'https://www.apexanalytix.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/apex-analytix/apex-analytix-home.png',
        originalAlt: 'Apex Analytix',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/apex-analytix/apex-analytix-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/apex-analytix/apex-analytix-interior.png',
        originalAlt: 'Apex Analytix',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/apex-analytix/apex-analytix-interior.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/apex-analytix/apex-analytix__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'apex-analytix',
      name: 'Apex Analytix',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/apex-analytix__logo.svg'
    },
    tags: ['front-end', 'waterfall', 'google-analytics', '2011'],
    categories: ['role', 'sdlc', 'analytics', 'year'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Apex Analytix (2010)'
  },
  {
    id: 'winston-salem-state-university-campus-maps',
    name: 'Winston-Salem State University - Interactive Campus Maps',
    date: '2011-01-01',
    description: null,
    features: [
      {
        heading: 'Features',
        items: [
          '2D interactive campus map using Google maps API ',
          '3D interactive campus map using Google maps API and Google Earth',
          'Mobile version',
          'Map data can be modified by client via Cascade Server',
          'Cascade server then publishes KML file read by Google Maps/Google Earth',
          'Detailed information on click via information boxes'
        ]
      },
      {
        heading: 'Mapped Data',
        items: [
          'Buildings: administration buildings and student housing',
          'Parking: various parking options and details about restrictions',
          'Transit: shuttle routes, shuttle shelters and WSTA PART',
          'Other: call boxes located around campus'
        ]
      }
    ],
    url: 'http://wssu.edu/campus-map/default.aspx',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-3d-meters-and-ram.png',
        originalAlt: 'Winston-Salem State University - Interactive Campus Maps',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-3d-meters-and-ram.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-3d-all.png',
        originalAlt: 'Winston-Salem State University - Interactive Campus Maps',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-3d-all.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-parking-transit-shuttle.png',
        originalAlt: 'Winston-Salem State University - Interactive Campus Maps',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-parking-transit-shuttle.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-buildings.png',
        originalAlt: 'Winston-Salem State University - Interactive Campus Maps',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-buildings.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-buildings-infoboxes.png',
        originalAlt: 'Winston-Salem State University - Interactive Campus Maps',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-buildings-infoboxes.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-parking-transit-all.png',
        originalAlt: 'Winston-Salem State University - Interactive Campus Maps',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/wssu-campus-map-only-2d-parking-transit-all.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/winston-salem-state-university-campus-maps/Campus%20Map__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'winston-salem-state-university',
      name: 'Winston-Salem State University',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/winston-salem-state-university__logo.svg'
    },
    tags: [
      'html',
      'type-informational',
      'higher-ed',
      'cms-configuration',
      'lead',
      'ux-accessibility',
      'css',
      'front-end',
      '2011',
      'javascript',
      'xml',
      'cascade-server',
      'cross-browser-compatibility',
      'library-jquery',
      'accessibility-508',
      'back-end',
      'waterfall',
      'kml',
      'xslt',
      'asp-net'
    ],
    categories: [
      'language',
      'project-type',
      'industry',
      'role',
      'user-experience-ux',
      'year',
      'cms',
      'tooling',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2011', name: '2011', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          { id: 'ux-accessibility', name: 'Accessibility', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp-net', name: 'ASP.NET', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'kml', name: 'KML', display: false },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'back-end', name: 'Back End', display: true },
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true },
          { id: 'lead', name: 'Lead', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-informational', name: 'Informational', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName:
      'Winston-Salem State University - Interactive Campus Maps (2010)'
  },
  {
    id: 'servigistics',
    name: 'Servigistics',
    date: '2010-12-15',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: ['Advanced CMS integration', 'All Development']
      }
    ],
    url: 'https://www.servigistics.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics-home.png',
        originalAlt: 'Servigistics',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics-interior.png',
        originalAlt: 'Servigistics',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics-interior.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics-portal.png',
        originalAlt: 'Servigistics',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics-portal.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/servigistics/servigistics__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: { id: 'servigistics', name: 'Servigistics', logo: null },
    tags: ['waterfall'],
    categories: ['sdlc'],
    tagsByCategory: {
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Servigistics (2010)'
  },
  {
    id: 'furnitureland-south-2010',
    name: 'Furnitureland South',
    date: '2010-12-01',
    description: null,
    features: [],
    url: 'https://www.furniturelandsouth.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south-home.png',
        originalAlt: 'Furnitureland South',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south-listing.png',
        originalAlt: 'Furnitureland South',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south-detail.png',
        originalAlt: 'Furnitureland South',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-2010/furnitureland-south__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'furnitureland-south',
      name: 'Furnitureland South',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/furnitureland-south__logo.svg'
    },
    tags: ['2010', 'waterfall'],
    categories: ['year', 'sdlc'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Furnitureland South (2010)'
  },
  {
    id: 'university-houston-2010',
    name: 'University of Houston - News Releases',
    date: '2010-12-01',
    description: null,
    features: [
      {
        heading: 'Enhanced News Release Functionality',
        items: [
          'Ability to add images with captions to the news detail pages',
          'Addition of article categories and authors',
          'Redesign the listing page to list stories by year and month using a collapsible function',
          'New search feature was also installed, integrated with their Google Mini search appliance',
          'New category listing pages that allows U of H to create a page that only displays stories tagged with certain categories',
          'Modification to the display of the news stories on the homepage',
          'Addition of RSS feeds, including a full listing and an RSS listing for each category'
        ]
      }
    ],
    url: 'http://www.uh.edu/news-events',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2010/university-of-houston-news-releases.png',
        originalAlt: 'University of Houston - News Releases',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2010/university-of-houston-news-releases.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-houston-2010/university-of-houston__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'university-houston',
      name: 'University of Houston',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-houston__logo.svg'
    },
    tags: [
      'accessibility-508',
      '2010',
      'xml',
      'cms-configuration',
      'cross-browser-compatibility',
      'html',
      'ux-usability',
      'css',
      'front-end',
      'cascade-server',
      'waterfall',
      'xslt',
      'higher-ed'
    ],
    categories: [
      'user-experience-ux',
      'year',
      'language',
      'role',
      'cms',
      'sdlc',
      'industry'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          },
          { id: 'ux-usability', name: 'Usability', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'University of Houston - News Releases (2010)'
  },
  {
    id: 'burton-and-burton-2010',
    name: 'Burton and Burton',
    date: '2010-11-01',
    description:
      'burton+BURTON is the largest wholesaler of balloon and gift products. The site is multi-platform eCommerce (ASP-based) and Cascade Server content management.',
    features: [
      {
        heading: 'Features',
        items: [
          'The new design split the site into three “subsites” off of the main homepage: About Us, Online Store, and Education',
          'A rewrite of the product listing page and a new, more modern filtering system',
          'Numerous search engine improvements to the site, including URL rewrites and dynamically feeding the meta descriptions and titles for each category and product',
          'Type-ahead AJAX search for their “Quick Order” form',
          'Improved shopping cart experience',
          'Ability to add videos to each of the four homepages'
        ]
      }
    ],
    url: 'http://burtonandburton.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-home.png',
        originalAlt: 'Burton and Burton',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-listing.png',
        originalAlt: 'Burton and Burton',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-product-detail.png',
        originalAlt: 'Burton and Burton',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-product-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-collection-listing.png',
        originalAlt: 'Burton and Burton',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-collection-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-collection.png',
        originalAlt: 'Burton and Burton',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-collection.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-cart.png',
        originalAlt: 'Burton and Burton',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-cart.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-about-us.png',
        originalAlt: 'Burton and Burton',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton-2010-about-us.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/burton-and-burton-2010/burton-and-burton__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'burton-and-burton',
      name: 'Burton and Burton',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/burton-and-burton__logo.svg'
    },
    tags: [
      'xml',
      'xslt',
      'ecom-custom-in-house',
      'global',
      'javascript',
      'cascade-server',
      'e-commerce',
      'type-b2b',
      '2010',
      'asp',
      'waterfall',
      'google-analytics',
      'css',
      'xslt',
      'cms-configuration',
      'html',
      'front-end'
    ],
    categories: [
      'language',
      'e-commerce',
      'industry',
      'cms',
      'project-type',
      'year',
      'sdlc',
      'analytics',
      'role'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-b2b', name: 'Business to Business (B2B)', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          { id: 'ecom-custom-in-house', name: 'Custom in-house', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [
          { id: 'e-commerce', name: 'E-Commerce', display: true },
          { id: 'global', name: 'Global', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Burton and Burton (2010)'
  },
  {
    id: 'greensboro-radiology',
    name: 'Greensboro Radiology',
    date: '2010-09-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'All original front-end development',
          'All Cascade Server integration'
        ]
      }
    ],
    url: 'http://greensbororadiology.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology-home.png',
        originalAlt: 'Greensboro Radiology',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology-about.png',
        originalAlt: 'Greensboro Radiology',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology-about.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology-physicians.png',
        originalAlt: 'Greensboro Radiology',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology-physicians.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/greensboro-radiology/greensboro-radiology__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'greensboro-radiology',
      name: 'Greensboro Radiology',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/greensboro-radiology__logo.svg'
    },
    tags: [
      'medical',
      'cross-browser-compatibility',
      'asp',
      'html',
      'google-analytics',
      'css',
      'cms-configuration',
      'xml',
      'waterfall',
      'cascade-server',
      'front-end',
      'xslt',
      '2010',
      'javascript',
      'type-informational'
    ],
    categories: [
      'industry',
      'user-experience-ux',
      'language',
      'analytics',
      'role',
      'sdlc',
      'cms',
      'year',
      'project-type'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-informational', name: 'Informational', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'medical', name: 'Medical', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Greensboro Radiology (2010)'
  },
  {
    id: 'texas-am-foundation',
    name: 'Texas A&M Foundation',
    date: '2010-09-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'Homepage flash (configurable through Cascade Server)',
          'Publications archive',
          'Cascade Server integration'
        ]
      }
    ],
    url: 'http://giving.tamu.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-home.png',
        originalAlt: 'Texas A&M Foundation',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-publications.png',
        originalAlt: 'Texas A&M Foundation',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-publications.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-press-release-listing.png',
        originalAlt: 'Texas A&M Foundation',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-press-release-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-press-release-detail.png',
        originalAlt: 'Texas A&M Foundation',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-press-release-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-about-us.png',
        originalAlt: 'Texas A&M Foundation',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation-main-about-us.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/texas-am-foundation/texas-a-and-m-foundation__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'texas-am-foundation',
      name: 'Texas A&M Foundation',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/texas-a-and-m-foundation__logo.svg'
    },
    tags: [
      'actionscript',
      'xml',
      'accessibility-508',
      'css',
      'google-analytics',
      'html',
      'cms-configuration',
      'cascade-server',
      'xslt',
      'front-end',
      '2010',
      'javascript',
      'waterfall',
      'cross-browser-compatibility'
    ],
    categories: [
      'language',
      'user-experience-ux',
      'analytics',
      'role',
      'cms',
      'year',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'actionscript', name: 'ActionScript', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Texas A&M Foundation (2010)'
  },
  {
    id: 'framingham-university',
    name: 'Framingham University',
    date: '2010-08-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'Homepage flash (configurable through Cascade Server)',
          'Front-end development',
          'Cascade Server integration'
        ]
      }
    ],
    url: 'http://framingham.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-home.png',
        originalAlt: 'Framingham University',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-home-flash.png',
        originalAlt: 'Framingham University',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-home-flash.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-landing.png',
        originalAlt: 'Framingham University',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-landing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-interior.png',
        originalAlt: 'Framingham University',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-interior.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/framingham-university/framingham-state-university__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'framingham-university',
      name: 'Framingham University',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/framingham-state-university__logo.svg'
    },
    tags: [
      'cascade-server',
      'xslt',
      'actionscript',
      'asp',
      '2010',
      'waterfall',
      'higher-ed',
      'accessibility-508',
      'javascript',
      'front-end',
      'xml',
      'google-analytics',
      'css',
      'cms-configuration',
      'html',
      'cross-browser-compatibility'
    ],
    categories: [
      'cms',
      'language',
      'year',
      'sdlc',
      'industry',
      'user-experience-ux',
      'role',
      'analytics'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'actionscript', name: 'ActionScript', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Framingham University (2010)'
  },
  {
    id: 'united-anesthesia',
    name: 'United Anesthesia',
    date: '2010-07-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'Original front-end development',
          'Merging existing back-end code into new front-end code'
        ]
      }
    ],
    url: 'http://www.unitedanesthesia.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthsesia-home.png',
        originalAlt: 'United Anesthesia',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthsesia-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthsesia-about.png',
        originalAlt: 'United Anesthesia',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthsesia-about.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthsesia-contact.png',
        originalAlt: 'United Anesthesia',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthsesia-contact.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/united-anesthesia/united-anesthesia__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'united-anesthesia',
      name: 'United Anesthesia',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/united-anesthesia__logo.svg'
    },
    tags: [
      'javascript',
      'asp',
      'google-analytics',
      'waterfall',
      '2010',
      'cross-browser-compatibility',
      'front-end',
      'html',
      'css'
    ],
    categories: [
      'language',
      'analytics',
      'sdlc',
      'year',
      'user-experience-ux',
      'role'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'United Anesthesia (2010)'
  },
  {
    id: 'cogent-research',
    name: 'Cogent Research',
    date: '2010-04-15',
    description: 'Advanced flash site with Cascade Server integration.',
    features: [],
    url: 'http://www.cogentresearch.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-home.png',
        originalAlt: 'Cogent Research',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-interior.png',
        originalAlt: 'Cogent Research',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-interior.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-news.png',
        originalAlt: 'Cogent Research',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-news.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/cogent-research/cogent-research__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'cogent-research',
      name: 'Cogent Research',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/cogent-research__logo.svg'
    },
    tags: [
      '2010',
      'actionscript',
      'cascade-server',
      'waterfall',
      'type-informational',
      'cms-configuration',
      'front-end'
    ],
    categories: ['year', 'language', 'cms', 'sdlc', 'project-type', 'role'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [{ id: 'actionscript', name: 'ActionScript', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-informational', name: 'Informational', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Cogent Research (2010)'
  },
  {
    id: 'staub-leadership',
    name: 'Staub Leadership',
    date: '2010-04-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'Orignal front-end development',
          'Customized Cascade Server integration'
        ]
      }
    ],
    url: 'http://www.staubleadership.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-home.png',
        originalAlt: 'Staub Leadership',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-about.png',
        originalAlt: 'Staub Leadership',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-about.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-articles.png',
        originalAlt: 'Staub Leadership',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-articles.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-videos.png',
        originalAlt: 'Staub Leadership',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/eqiq-staub-videos.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/staub-leadership/staub-leadership-international__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'staub-leadership',
      name: 'Staub Leadership',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/staub-leadership-international__logo.svg'
    },
    tags: [
      'css',
      'cms-configuration',
      '2010',
      'cross-browser-compatibility',
      'javascript',
      'asp',
      'google-analytics',
      'xml',
      'html',
      'cascade-server',
      'xslt',
      'waterfall',
      'front-end'
    ],
    categories: [
      'language',
      'role',
      'year',
      'user-experience-ux',
      'analytics',
      'cms',
      'sdlc'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Staub Leadership (2010)'
  },
  {
    id: 'firefly-store-solutions',
    name: 'Firefly Store Solutions',
    date: '2010-03-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'Original front-end development',
          'AspDotNetStorefront integration'
        ]
      }
    ],
    url: 'http://www.fireflystoresolutions.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-ham-home.png',
        originalAlt: 'Firefly Store Solutions',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-ham-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-ham-listing.png',
        originalAlt: 'Firefly Store Solutions',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-ham-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-ham-detail.png',
        originalAlt: 'Firefly Store Solutions',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-ham-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/firefly-store-solutions/robert-h-ham__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'robert-h-ham',
      name: 'Robert H Ham',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/robert-h-ham__logo.svg'
    },
    tags: [
      'cross-browser-compatibility',
      'e-commerce',
      'javascript',
      'type-e-commerce',
      'library-jquery',
      'ecomm-aspdotnetstorefront',
      'cms-configuration',
      'css',
      'waterfall',
      'front-end',
      'html',
      '2010',
      'google-analytics'
    ],
    categories: [
      'user-experience-ux',
      'industry',
      'language',
      'project-type',
      'tooling',
      'e-commerce',
      'role',
      'sdlc',
      'year',
      'analytics'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [
          {
            id: 'ecomm-aspdotnetstorefront',
            name: 'AspDotNetStorefront',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'e-commerce', name: 'E-Commerce', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-e-commerce', name: 'E-Commerce', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Firefly Store Solutions (2010)'
  },
  {
    id: 'montgomery-family-law',
    name: 'Montgomery Family Law',
    date: '2010-03-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'All front-end development',
          'Custom Cascade Server integration'
        ]
      }
    ],
    url: 'http://www.montylaw.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law-home.png',
        originalAlt: 'Montgomery Family Law',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law-interior.png',
        originalAlt: 'Montgomery Family Law',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law-interior.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law-news.png',
        originalAlt: 'Montgomery Family Law',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law-news.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/montgomery-family-law/montgomery-family-law__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'montgomery-family-law',
      name: 'Montgomery Family Law',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/montgomery-family-law__logo.svg'
    },
    tags: [
      'waterfall',
      '2010',
      'cms-configuration',
      'css',
      'html',
      'type-informational',
      'xslt',
      'xml',
      'attorneys-law-firms',
      'cross-browser-compatibility',
      'google-analytics',
      'front-end',
      'cascade-server',
      'javascript'
    ],
    categories: [
      'sdlc',
      'year',
      'role',
      'language',
      'project-type',
      'industry',
      'user-experience-ux',
      'analytics',
      'cms'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [
          {
            id: 'attorneys-law-firms',
            name: 'Attorneys/Law Firms',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-informational', name: 'Informational', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Montgomery Family Law (2010)'
  },
  {
    id: 'university-hartford-2010',
    name: 'University of Hartford',
    date: '2010-02-01',
    description: null,
    features: [
      {
        heading: 'Campus Calendar',
        items: [
          'Developed from scratch',
          'Highly flexible calendaring application within Cascade Server CMS',
          'Events are input once but pulled too many different types of displays (home page, Campus Calendar, and Arts & Events Calendar).',
          'The client can create Calendars for specific groups (Library, Athletics, etc.) within Cascade Server'
        ]
      },
      {
        heading: 'Newsroom',
        items: [
          'A listing page for press releases and other news',
          'Integration of RSS feed display (U of H in the News)',
          'Editable content areas for “Media Contacts” and “Key Contacts”',
          'Press release detail page',
          'Everything is controlled within Cascade Server CMS'
        ]
      },
      {
        heading: 'Responsibilities',
        items: ['Advanced Cascade Server integration', 'Homepage Flash']
      }
    ],
    url: 'http://www.hartford.edu',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-home.png',
        originalAlt: 'University of Hartford',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-newsroom.png',
        originalAlt: 'University of Hartford',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-newsroom.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-press-release-listing.png',
        originalAlt: 'University of Hartford',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-press-release-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-press-release-detail.png',
        originalAlt: 'University of Hartford',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-press-release-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-interior.png',
        originalAlt: 'University of Hartford',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-interior.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-my-story-listing.png',
        originalAlt: 'University of Hartford',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-my-story-listing.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-my-story-detail.png',
        originalAlt: 'University of Hartford',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/university-of-hartford-2010-my-story-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/university-hartford-2010/2020__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'university-of-hartford',
      name: 'University of Hartford',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/university-of-hartford__logo.svg'
    },
    tags: [
      'cross-browser-compatibility',
      'xml',
      'xslt',
      'google-analytics',
      'higher-ed',
      'cascade-server',
      'javascript',
      'waterfall',
      'cms-configuration',
      '2010',
      'asp',
      'front-end',
      'accessibility-508',
      'library-jquery',
      'css',
      'html'
    ],
    categories: [
      'user-experience-ux',
      'language',
      'analytics',
      'industry',
      'cms',
      'sdlc',
      'role',
      'year',
      'tooling'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'higher-ed', name: 'Higher Ed', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'University of Hartford (2010)'
  },
  {
    id: 'rollins-university-magazine',
    name: 'Rollins University Magazine',
    date: '2010-02-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'Original front-end development (HTML/CSS/JS)',
          'Cascade Server integration'
        ]
      }
    ],
    url: 'https://www.rollins.edu/magazine/',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/rollins-university-magazine/rollins-magazine-home.png',
        originalAlt: 'Rollins University Magazine',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/rollins-university-magazine/rollins-magazine-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/rollins-university-magazine/rollins-magazine-current-issue.png',
        originalAlt: 'Rollins University Magazine',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/rollins-university-magazine/rollins-magazine-current-issue.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/rollins-university-magazine/rollins-university__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'rollins-university',
      name: 'Rollins University',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/rollins-university__logo.svg'
    },
    tags: [
      'accessibility-508',
      'library-jquery',
      'waterfall',
      'xslt',
      'html',
      'asp',
      '2011',
      'cms-configuration',
      'css',
      'xml',
      'cascade-server',
      'javascript',
      'front-end',
      '2010',
      'cross-browser-compatibility'
    ],
    categories: [
      'user-experience-ux',
      'tooling',
      'sdlc',
      'language',
      'year',
      'role',
      'cms'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2010', name: '2010', display: true },
          { id: '2011', name: '2011', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          { id: 'accessibility-508', name: '508 Compliant', display: true },
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'xml', name: 'XML', display: true },
          { id: 'xslt', name: 'XSLT', display: true }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cascade-server', name: 'Cascade Server', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      tooling: {
        id: 'tooling',
        name: 'Tooling',
        tags: [{ id: 'library-jquery', name: 'jQuery', display: true }]
      }
    },
    displayName: 'Rollins University Magazine (2010)'
  },
  {
    id: 'volvo-bus-scr',
    name: 'Volvo Bus SCR',
    date: '2010-02-01',
    description:
      'The site provides information about Volvo’s D13 Engine, the engineering of it, its advantages, its availability, and how it affects the environment.',
    features: [
      { heading: 'Features', items: ['Sitewide multi-language functionality'] }
    ],
    url: 'http://www.volvobusscr.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-home.png',
        originalAlt: 'Volvo Bus SCR',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-home-french.png',
        originalAlt: 'Volvo Bus SCR',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-home-french.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-about.png',
        originalAlt: 'Volvo Bus SCR',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-about.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-faqs.png',
        originalAlt: 'Volvo Bus SCR',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-faqs.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-availability.png',
        originalAlt: 'Volvo Bus SCR',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo-availability.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/volvo-bus-scr/volvo__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'volvo',
      name: 'Volvo',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/volvo__logo.svg'
    },
    tags: [
      'front-end',
      'waterfall',
      'asp',
      'css',
      'cross-browser-compatibility',
      '2010',
      'html'
    ],
    categories: ['role', 'sdlc', 'language', 'user-experience-ux', 'year'],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2010', name: '2010', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Volvo Bus SCR (2010)'
  },
  {
    id: 'furnitureland-south-blog',
    name: 'Furnitureland South Blog',
    date: '2009-12-09',
    description: 'Coming Soon...',
    features: [],
    url: 'http://blog.furniturelandsouth.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-blog/furnitureland-south-blog.png',
        originalAlt: 'Furnitureland South Blog',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-blog/furnitureland-south-blog.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/furnitureland-south-blog/furnitureland-south__logo.svg',
    employer: {
      id: 'beacon-technologies',
      name: 'Beacon Technologies',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/beacon-technologies__logo.svg'
    },
    client: {
      id: 'furnitureland-south',
      name: 'Furnitureland South',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/furnitureland-south__logo.svg'
    },
    tags: [
      '2009',
      'waterfall',
      'data-mysql',
      'php',
      'back-end',
      'cms-wordpress',
      'blog',
      'front-end',
      'cms-configuration'
    ],
    categories: [
      'year',
      'sdlc',
      'data',
      'language',
      'role',
      'cms',
      'project-type'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2009', name: '2009', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'back-end', name: 'Back End', display: true },
          { id: 'cms-configuration', name: 'CMS Configuration', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'blog', name: 'Blog', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [{ id: 'php', name: 'PHP', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'cms-wordpress', name: 'Wordpress', display: true }]
      }
    },
    displayName: 'Furnitureland South Blog (2009)'
  },
  {
    id: 'carolina-girl-furniture',
    name: 'Carolina Girl Furniture',
    date: '2009-11-01',
    description: 'Magento E-commerce',
    features: [],
    url: 'http://www.carolinagirlfurniture.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture-interior.png',
        originalAlt: 'Carolina Girl Furniture',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture-interior.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture-home.png',
        originalAlt: 'Carolina Girl Furniture',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture-detail.png',
        originalAlt: 'Carolina Girl Furniture',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/carolina-girl-furniture/carolina-girl-furniture__logo.svg',
    employer: {
      id: 'get-you-found',
      name: 'Get You Found Online Marketing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg'
    },
    client: {
      id: 'carolina-girl-furniture',
      name: 'Carolina Girl Furniture',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/carolina-girl-furniture__logo.svg'
    },
    tags: [
      'cross-browser-compatibility',
      'type-e-commerce',
      '2009',
      'html',
      'google-analytics',
      'data-mysql',
      'javascript',
      'php',
      'ecomm-magento',
      'waterfall',
      'front-end',
      'e-commerce',
      'css'
    ],
    categories: [
      'user-experience-ux',
      'project-type',
      'year',
      'language',
      'analytics',
      'data',
      'e-commerce',
      'sdlc',
      'role',
      'industry'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2009', name: '2009', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'php', name: 'PHP', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-e-commerce', name: 'E-Commerce', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'e-commerce', name: 'E-Commerce', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [{ id: 'ecomm-magento', name: 'Magento', display: true }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Carolina Girl Furniture (2009)'
  },
  {
    id: 'envision',
    name: 'Envision',
    date: '2009-10-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'Homepage Flash',
          'Original front-end development',
          'Drupal customizations including Product Search, Products, Rooms, Collections, Store Locations and Blog'
        ]
      }
    ],
    url: 'http://www.envisionfurniture.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-home.png',
        originalAlt: 'Envision',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-collection-list.png',
        originalAlt: 'Envision',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-collection-list.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-collection-detail.png',
        originalAlt: 'Envision',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-collection-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-detail.png',
        originalAlt: 'Envision',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-detail.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-landing.png',
        originalAlt: 'Envision',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision-landing.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/envision/envision__logo.svg',
    employer: {
      id: 'get-you-found',
      name: 'Get You Found Online Marketing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg'
    },
    client: {
      id: 'envision',
      name: 'Envision',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/envision__logo.svg'
    },
    tags: [
      'waterfall',
      'drupal',
      'cross-browser-compatibility',
      'html',
      'ecom-other',
      'front-end',
      'css',
      'actionscript',
      '2009',
      'type-e-commerce',
      'google-analytics',
      'data-mysql',
      'php'
    ],
    categories: [
      'sdlc',
      'cms',
      'user-experience-ux',
      'language',
      'e-commerce',
      'role',
      'year',
      'project-type',
      'analytics',
      'data'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2009', name: '2009', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'actionscript', name: 'ActionScript', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'php', name: 'PHP', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'drupal', name: 'Drupal', display: true }]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [{ id: 'type-e-commerce', name: 'E-Commerce', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [{ id: 'ecom-other', name: 'Other', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Envision (2009)'
  },
  {
    id: 'guilford-college-united-methodist-church',
    name: 'GCUMC',
    date: '2009-08-01',
    description: 'Custom Modules & Calendar integration',
    features: [],
    url: 'http://www.guilfordcollegeumc.org',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/guilford-college-united-methodist-church/gcumc-home.png',
        originalAlt: 'GCUMC',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/guilford-college-united-methodist-church/gcumc-home.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/guilford-college-united-methodist-church/guilford-college-united-methodist-church__logo.svg',
    employer: {
      id: 'get-you-found',
      name: 'Get You Found Online Marketing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg'
    },
    client: {
      id: 'guilford-college-united-methodist-church',
      name: 'GCUMC',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/guilford-college-united-methodist-church__logo.svg'
    },
    tags: [
      '2009',
      'html',
      'google-analytics',
      'javascript',
      'css',
      'php',
      'cross-browser-compatibility',
      'data-mysql',
      'waterfall',
      'actionscript',
      'front-end',
      'drupal'
    ],
    categories: [
      'year',
      'language',
      'analytics',
      'user-experience-ux',
      'data',
      'sdlc',
      'role',
      'cms'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2009', name: '2009', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'actionscript', name: 'ActionScript', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'php', name: 'PHP', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'drupal', name: 'Drupal', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'GCUMC (2009)'
  },
  {
    id: 'northstar-management',
    name: 'NorthStar Management',
    date: '2009-07-01',
    description: null,
    features: [
      { heading: 'Responsibilities', items: ['All original site development'] }
    ],
    url: 'http://northstarone.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-home.png',
        originalAlt: 'NorthStar Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-about.png',
        originalAlt: 'NorthStar Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-about.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-interior.png',
        originalAlt: 'NorthStar Management',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-interior.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/northstar-management/northstar-management__logo.svg',
    employer: {
      id: 'get-you-found',
      name: 'Get You Found Online Marketing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg'
    },
    client: {
      id: 'northstar-management',
      name: 'NorthStar Management',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/northstar-management__logo.svg'
    },
    tags: [
      'front-end',
      'css',
      '2009',
      'waterfall',
      'html',
      'javascript',
      'php',
      'cross-browser-compatibility',
      'google-analytics'
    ],
    categories: [
      'role',
      'language',
      'year',
      'sdlc',
      'user-experience-ux',
      'analytics'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2009', name: '2009', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'php', name: 'PHP', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'NorthStar Management (2009)'
  },
  {
    id: 'matlab',
    name: 'Matlab',
    date: '2009-06-01',
    description: null,
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'Original front-end development',
          'Flash animations throughout the site'
        ]
      }
    ],
    url: 'http://www.matlabinc.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab-home.png',
        originalAlt: 'Matlab',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab-interior.png',
        originalAlt: 'Matlab',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab-interior.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab-sitemap.png',
        originalAlt: 'Matlab',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab-sitemap.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/matlab/matlab__logo.svg',
    employer: {
      id: 'get-you-found',
      name: 'Get You Found Online Marketing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg'
    },
    client: {
      id: 'matlab',
      name: 'Matlab',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/matlab__logo.svg'
    },
    tags: [
      'php',
      'cross-browser-compatibility',
      'html',
      'waterfall',
      '2009',
      'actionscript',
      'front-end',
      'google-analytics',
      'javascript',
      'css'
    ],
    categories: [
      'language',
      'user-experience-ux',
      'sdlc',
      'year',
      'role',
      'analytics'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2009', name: '2009', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'actionscript', name: 'ActionScript', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'php', name: 'PHP', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Matlab (2009)'
  },
  {
    id: 'herron-house',
    name: 'Herron House',
    date: '2009-04-01',
    description: null,
    features: [],
    url: 'http://www.herronhouse.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/herron-house/heron-house-home.png',
        originalAlt: 'Herron House',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/herron-house/heron-house-home.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/herron-house/herron-house-flowers__logo.svg',
    employer: {
      id: 'get-you-found',
      name: 'Get You Found Online Marketing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg'
    },
    client: {
      id: 'herron-house',
      name: 'Herron House',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/herron-house-flowers__logo.svg'
    },
    tags: [
      'front-end',
      'cross-browser-compatibility',
      'drupal',
      'html',
      'css',
      'google-analytics',
      'waterfall',
      'data-mysql',
      '2009',
      'php'
    ],
    categories: [
      'role',
      'user-experience-ux',
      'cms',
      'language',
      'analytics',
      'sdlc',
      'data',
      'year'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2009', name: '2009', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'php', name: 'PHP', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'drupal', name: 'Drupal', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Herron House (2009)'
  },
  {
    id: 'machines-and-wheels',
    name: 'Machines and Wheels',
    date: '2009-04-01',
    description:
      'Machines and Wheels came to Get You Found Online Marketing looking for a complete website overhaul.  They wanted the ability to easily edit and update the site themselves, a fresh look, the ability to request a quote throughout the site, and many other features such as testimonials and featured products on the home page.  Working together with Machines and Wheels and Get You Found we were able to accomplish this using the Drupal content management system.',
    features: [],
    url: 'http://www.machinesandwheels.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/machines-and-wheels/machines-and-wheels-home.png',
        originalAlt: 'Machines and Wheels',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/machines-and-wheels/machines-and-wheels-home.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/machines-and-wheels/machines-and-wheels-inc__logo.svg',
    employer: {
      id: 'get-you-found',
      name: 'Get You Found Online Marketing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg'
    },
    client: {
      id: 'machines-and-wheels',
      name: 'Machines and Wheels',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/machines-and-wheels-inc__logo.svg'
    },
    tags: [
      'actionscript',
      'javascript',
      'data-mysql',
      'waterfall',
      'google-analytics',
      'php',
      '2009',
      'cross-browser-compatibility',
      'front-end',
      'drupal',
      'css',
      'html'
    ],
    categories: [
      'language',
      'data',
      'sdlc',
      'analytics',
      'year',
      'user-experience-ux',
      'role',
      'cms'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2009', name: '2009', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'actionscript', name: 'ActionScript', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'php', name: 'PHP', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'drupal', name: 'Drupal', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Machines and Wheels (2009)'
  },
  {
    id: 'mod-u-kraf',
    name: 'Mod-U-Kraf',
    date: '2009-02-01',
    description:
      'Mod-U-Kraf came to Get You Found Online Marketing with a clear vision of how they wanted their site to function.  The site contained a large amount of information about their products and services.',
    features: [],
    url: 'http://www.modukraf.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-home.png',
        originalAlt: 'Mod-U-Kraf',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-company-profile.png',
        originalAlt: 'Mod-U-Kraf',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-company-profile.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-build-dream-home.png',
        originalAlt: 'Mod-U-Kraf',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-build-dream-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-side-by-side.png',
        originalAlt: 'Mod-U-Kraf',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-side-by-side.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-collection-list.png',
        originalAlt: 'Mod-U-Kraf',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-collection-list.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-collection-detail.png',
        originalAlt: 'Mod-U-Kraf',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf-collection-detail.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/mod-u-kraf/mod-u-kraf__logo.svg',
    employer: {
      id: 'get-you-found',
      name: 'Get You Found Online Marketing',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/get-you-found__logo.svg'
    },
    client: {
      id: 'mod-u-kraf',
      name: 'Mod-U-Kraf',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/mod-u-kraf__logo.svg'
    },
    tags: [
      'css',
      'waterfall',
      'front-end',
      'google-analytics',
      '2009',
      'javascript',
      'php',
      'html',
      'html',
      'cross-browser-compatibility'
    ],
    categories: [
      'language',
      'sdlc',
      'role',
      'analytics',
      'year',
      'user-experience-ux'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2009', name: '2009', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'php', name: 'PHP', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Mod-U-Kraf (2009)'
  },
  {
    id: 'family-abuse-services',
    name: 'Family Abuse Services',
    date: '2009-01-01',
    description: null,
    features: [
      {
        heading: 'Features',
        items: [
          'Complete overhaul of the existing website',
          'A new look and feel',
          'Prioritizing User Experience for navigation and content structure',
          'Custom CMS setup so Family Abuse Services could maintain the site themselves '
        ]
      },
      {
        heading: 'Responsibilities',
        items: [
          'All Drupal setup, configuration and theming',
          'All front-end development',
          'Information Architecture for site content'
        ]
      }
    ],
    url: 'http://familyabuseservices.org',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/family-abuse-services/family-abuse-services-home.png',
        originalAlt: 'Family Abuse Services',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/family-abuse-services/family-abuse-services-home.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/family-abuse-services/family-abuse-services__logo.svg',
    employer: {
      id: 'carolinanet',
      name: 'CarolinaNet',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/carolina-net__logo.svg'
    },
    client: {
      id: 'family-abuse-services',
      name: 'Family Abuse Services',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/family-abuse-services__logo.svg'
    },
    tags: [
      'waterfall',
      'cross-browser-compatibility',
      '2009',
      'front-end',
      'css',
      'drupal',
      'php',
      'type-informational',
      'javascript',
      'google-analytics',
      'html',
      'non-profit',
      'data-mysql'
    ],
    categories: [
      'sdlc',
      'user-experience-ux',
      'year',
      'role',
      'language',
      'cms',
      'project-type',
      'analytics',
      'industry',
      'data'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2009', name: '2009', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true },
          { id: 'php', name: 'PHP', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'drupal', name: 'Drupal', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-informational', name: 'Informational', display: true }
        ]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'non-profit', name: 'Non-Profit', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Family Abuse Services (2008)'
  },
  {
    id: 'a-cleaner-world',
    name: 'A Cleaner World',
    date: '2008-01-01',
    description:
      'While at Inter-Tech Communications I worked with Symetri Internet Marketing to provide A Cleaner World with their desired website overhaul.',
    features: [
      {
        heading: 'Responsibilities',
        items: [
          'Sitewide graphics',
          'Front-end development into existing back-end code'
        ]
      }
    ],
    url: 'http://www.acleanerworld.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-home.png',
        originalAlt: 'A Cleaner World',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-faqs.png',
        originalAlt: 'A Cleaner World',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-faqs.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-locations.png',
        originalAlt: 'A Cleaner World',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-locations.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-contact-us.png',
        originalAlt: 'A Cleaner World',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world-contact-us.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/a-cleaner-world/a-cleaner-world__logo.svg',
    employer: {
      id: 'inter-tech-communications',
      name: 'Inter-Tech Communications',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/inter-tech-communications__logo.svg'
    },
    client: {
      id: 'a-cleaner-world',
      name: 'A Cleaner World',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/a-cleaner-world__logo.svg'
    },
    tags: [
      'cross-browser-compatibility',
      'google-analytics',
      'html',
      'front-end',
      'waterfall',
      '2008',
      'css',
      'type-informational',
      'role-design',
      'asp'
    ],
    categories: [
      'user-experience-ux',
      'analytics',
      'language',
      'role',
      'sdlc',
      'year',
      'project-type'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [{ id: '2008', name: '2008', display: true }]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'asp', name: 'ASP', display: true },
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          }
        ]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [
          { id: 'role-design', name: 'Design', display: true },
          { id: 'front-end', name: 'Front End', display: true }
        ]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-informational', name: 'Informational', display: true }
        ]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'A Cleaner World (2007)'
  },
  {
    id: 'inter-tech-communications',
    name: 'Inter-Tech Communications',
    date: '2007-09-01',
    description:
      'At Inter-Tech Communications one of my main focuses was on completely rebuilding and maintaining the company website to provide clients and potential clients with accurate information about all the services offered.',
    features: [],
    url: 'http://www.itc123.com',
    images: [
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-home.png',
        originalAlt: 'Inter-Tech Communications',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-home.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-about-us.png',
        originalAlt: 'Inter-Tech Communications',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-about-us.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-seo.png',
        originalAlt: 'Inter-Tech Communications',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-seo.png'
      },
      {
        original:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-blackberry-server.png',
        originalAlt: 'Inter-Tech Communications',
        thumbnail:
          'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications-blackberry-server.png'
      }
    ],
    logo:
      'https://d3oyz6uk1t3qpy.cloudfront.net/public/projects/inter-tech-communications/inter-tech-communications__logo.svg',
    employer: {
      id: 'inter-tech-communications',
      name: 'Inter-Tech Communications',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/employer-logos/inter-tech-communications__logo.svg'
    },
    client: {
      id: 'inter-tech-communications',
      name: 'Inter-Tech Communications',
      logo:
        'https://d3oyz6uk1t3qpy.cloudfront.net/public/client-logos/inter-tech-communications__logo.svg'
    },
    tags: [
      'ecom-other',
      'waterfall',
      'javascript',
      '2007',
      'data-mysql',
      'type-e-commerce',
      'front-end',
      'joomla',
      'type-informational',
      'css',
      'google-analytics',
      'html',
      '2008',
      'e-commerce',
      'cross-browser-compatibility',
      'ux-information-architecture'
    ],
    categories: [
      'e-commerce',
      'sdlc',
      'language',
      'year',
      'data',
      'project-type',
      'role',
      'cms',
      'analytics',
      'industry',
      'user-experience-ux'
    ],
    tagsByCategory: {
      year: {
        id: 'year',
        name: 'Year',
        tags: [
          { id: '2007', name: '2007', display: true },
          { id: '2008', name: '2008', display: true }
        ]
      },
      language: {
        id: 'language',
        name: 'Language',
        tags: [
          { id: 'css', name: 'CSS', display: false },
          { id: 'html', name: 'HTML', display: true },
          { id: 'javascript', name: 'JavaScript', display: true }
        ]
      },
      'user-experience-ux': {
        id: 'user-experience-ux',
        name: 'User Experience',
        tags: [
          {
            id: 'cross-browser-compatibility',
            name: 'Cross Browser Compatibility',
            display: true
          },
          {
            id: 'ux-information-architecture',
            name: 'Information architecture',
            display: true
          }
        ]
      },
      'project-type': {
        id: 'project-type',
        name: 'Project Type',
        tags: [
          { id: 'type-e-commerce', name: 'E-Commerce', display: true },
          { id: 'type-informational', name: 'Informational', display: true }
        ]
      },
      industry: {
        id: 'industry',
        name: 'Industry',
        tags: [{ id: 'e-commerce', name: 'E-Commerce', display: true }]
      },
      role: {
        id: 'role',
        name: 'Role',
        tags: [{ id: 'front-end', name: 'Front End', display: true }]
      },
      analytics: {
        id: 'analytics',
        name: 'Analytics',
        tags: [
          { id: 'google-analytics', name: 'Google Analytics', display: true }
        ]
      },
      cms: {
        id: 'cms',
        name: 'CMS',
        tags: [{ id: 'joomla', name: 'Joomla!', display: false }]
      },
      data: {
        id: 'data',
        name: 'Data',
        tags: [{ id: 'data-mysql', name: 'MySQL', display: true }]
      },
      'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce',
        tags: [{ id: 'ecom-other', name: 'Other', display: true }]
      },
      sdlc: {
        id: 'sdlc',
        name: 'SDLC',
        tags: [{ id: 'waterfall', name: 'Waterfall', display: true }]
      }
    },
    displayName: 'Inter-Tech Communications (2007)'
  }
];

export default projects;
