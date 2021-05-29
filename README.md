# TrialNError-Server

## General information

(Add a few introductory words what this repo is)

<!-- [![Coverage Status](https://coveralls.io/repos/github/ASE-FS21-TrialNError/TrialNError-Server/badge.svg?branch=main)](https://coveralls.io/github/ASE-FS21-TrialNError/TrialNError-Server?branch=main)
 -->

## Launch & Deployment - for joining developers

(Here you can also take a look at the same section in the REAME of Clients, it looks good and well structured)

### Description

Prerequisite  is laster Nodejs version

### Set Up Environment variable

 Please Copy the properties from [Sample.env](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/blob/main/sample.env) and  created the .env file is root folder. Set the Environment variable like JWT secret, Mongodb URL and SMTP configuration in this file.

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## CI/CD pipeline

For information regarding the setup of the CI/CD pipeline of the Server repo, please refer to the specific Project Wiki [page](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/CI-CD-pipeline).

## MongoDB Data Model

For information regarding the MongoDB Data Model, please refer to the specific Project Wiki [page](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/MongoDB-Data-model).

## Additional information (not specific to this repository)

For additional information please refer to the Project Wiki:

- [Overall project idea & motivation](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Introduction-(Project-idea-&-Motivation))
- [Data sources](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Data-selection)
- [Architecture & Technologies](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Architecture-&-Technologies)
- [Project documentation](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Documentation)
- [Recommender system](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Recommender-system)
- [Outstanding problems & workarounds](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Outstanding-problems-&-workarounds)
- [Project plan](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Project-plan)
- [Roles & Task management](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Roles-&-Tasks-management)
- [Branch management](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Branch-management-&-Handling-of-Pull-requests)

## Authors and acknowledgment

We thank the ASE team FS21 for all the support and advice during this course.

### Authors

- [Tanzil](https://github.com/tanzilkm)
- [Vladimir](https://github.com/vldonkov)
- [Lukas](https://github.com/LukZeh)
