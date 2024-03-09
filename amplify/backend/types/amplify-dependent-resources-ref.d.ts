export type AmplifyDependentResourcesAttributes = {
  "analytics": {
    "tiffanyleacom": {
      "Id": "string",
      "Region": "string",
      "appName": "string"
    }
  },
  "api": {
    "tiffanyleacom": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "tiffanyleacom0b033fd5": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "CreatedSNSRole": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "adminGroupRole": "string"
    }
  },
  "function": {
    "S3Trigger52e00513": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "hosting": {
    "S3AndCloudFront": {
      "CloudFrontDistributionID": "string",
      "CloudFrontDomainName": "string",
      "CloudFrontOriginAccessIdentity": "string",
      "CloudFrontSecureURL": "string",
      "HostingBucketName": "string",
      "Region": "string",
      "S3BucketSecureURL": "string",
      "WebsiteURL": "string"
    }
  },
  "storage": {
    "tiffanyleacomcontent": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}