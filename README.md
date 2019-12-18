# admin-tiffanylea-com

Admin management site at admin.tiffanylea.com 

## Quick Start
Start local app at http://localhost:5000/
```
npm start
```



## Splitting Admin and WWW
Split Admin and WWW across multiple repos for the following reasons:

- Don't want required admin assets loaded on the public facing site
- Don't want AWS resources to be rebuilt for both on every push to monorepo
- Want to easily assign subdomain to admin area


## Shared AWS Amplify backend resources

The same AWS Amplify backend resources are being used across multiple front-end repos thus the need to pick the source of truth.

The source of truth will always be Admin for the following reasons:

- Modifying www repo should not normally involve modifying data models
- Data model modifications would likely come with admin additions prior to any www updates

## All backend modifications should be made in this repo

Further Reading https://aws-amplify.github.io/docs/cli-toolchain/quickstart#multiple-frontends


