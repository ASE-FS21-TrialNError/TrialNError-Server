
[![Coverage Status](https://coveralls.io/repos/github/ASE-FS21-TrialNError/TrialNError-Server/badge.svg?branch=main)](https://coveralls.io/github/ASE-FS21-TrialNError/TrialNError-Server?branch=main)


## Description
Prerequisite  is laster Nodejs version

## Set Up Environment variable
``` 
 Please Copy the properties from [Sample.env](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/blob/main/sample.env) and  created the .env file is root folder.
 Set the Environment variable like JWT secret, Mongodb URL and SMTP configuration in this file.
```
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

