[![Deploy](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/actions/workflows/deploy.yml/badge.svg)](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/actions/workflows/deploy.yml)
[![Coverage Status](https://coveralls.io/repos/github/ASE-FS21-TrialNError/TrialNError-Server/badge.svg?branch=main)](https://coveralls.io/github/ASE-FS21-TrialNError/TrialNError-Server?branch=main)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ASE-FS21-TrialNError_TrialNError-Server&metric=alert_status)](https://sonarcloud.io/dashboard?id=ASE-FS21-TrialNError_TrialNError-Server)


# TrialNError-Server

## General information
This repository is part of the project AppCom and contains the code for the application server provides authentication as well as app administration. The application was created using [nestjs](https://nestjs.com/)  with Typescript. As a database we used [MongoDB](https://www.mongodb.com/). Further information about the 
project can be found in the ["Additional information"](#additionalInformation) section.


## High-level components

- **[Authentication Controller](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/blob/main/src/auth/auth.controller.ts)**: This controller handles all authentication related requests from the client.

- **[Apps Controller](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/blob/main/src/apps/apps.controller.ts)**: This controller handles the  functionality of the apps.

- **[Wishlist Controller](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/tree/main/src/wishlist/wishlist.controller.ts)**: This controller handles the functionality of a wish list.


- **[User Controller](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/tree/main/src/users/users.controller.ts)**: This controller handles the functionality of users.

These four components are inextricably linked since they enable user authentication and apps functionality. While the wish list controller is being used to add applications to the wish list, it is also being used to delete applications from the wish list. The apps controller allows you to fetch apps with various filters.

Check out our client repository [:desktop_computer: client repo](https://github.com/ASE-FS21-TrialNError/TrialNError-Client).

Check out our app recommendation repository [:hourglass: python repo ](https://github.com/ASE-FS21-TrialNError/TrialNError-Python).

## REST API documentation [:link:](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/wiki)

   * [REST APIs Apps](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/wiki/REST-APIs-Apps) 
   * [REST APIs Authentication](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/wiki/REST-APIs-Authentication)
   * [REST APIs Wishlist](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/wiki/REST-APIs-Wishlist)


## Demo
Click [here](https://appcom-trailnerror.herokuapp.com/) for Live demo

## Launch & Deployment - for joining developers

### Set Up Environment variable

Please copy the properties from [Sample.env](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/blob/main/sample.env) and create the .env file in the root folder. Set the environment variable like JWT secret, Mongodb URL and SMTP configuration in this file.
 
To run the application locally, a Node.js version >= 12.10 will be need. Node.js can be downloaded [here](https://nodejs.org).

#### Installation 

```bash
npm install
```

This command has to be run before starting the application for the first time. It will install further dependencies besides Node.js.


### Run app for development 

```bash
npm run start
```

This command runs the application in the development mode. Open http://localhost:3000 to view it in the browser. 


### Run app in  production mode

```bash
npm run start:prod
```

This command runs the application in the production mode.

### Run unit tests

```bash
npm run test
```

This command runs the Unit Test cases.

### Run test coverage

```bash
npm run test:cov
```

This command runs the test coverage cases.

## CI/CD pipeline

For information regarding the setup of the CI/CD pipeline of the server repo, please refer to the specific Project Wiki [page](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/CI-CD-pipeline).

## MongoDB Data Model

For information regarding the MongoDB Data Model, please refer to the specific Project Wiki [page](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/MongoDB-Data-model).

## Additional information (General)<a name="additionalInformation"></a>

For additional information please refer to the Project Wiki:

- [Overall project idea & motivation](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Introduction-(Project-idea-&-Motivation))
- [Data sources](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Data-selection)
- [Architecture & Technologies](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Architecture-&-Technologies)
- [Project documentation](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Documentation)
- [Recommender system](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Recommender-system)
- [Limitations & workarounds](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Limitations-&-workarounds)
- [Project plan](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Project-plan)
- [Roles & Task management](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Roles-&-Tasks-management)
- [Branch management](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Branch-management-&-Handling-of-Pull-requests)

## Authors and acknowledgment

We thank the ASE team FS21 for all the support and advice during this course.

### Authors

- [Tanzil](https://github.com/tanzilkm)
- [Vladimir](https://github.com/vldonkov)
- [Lukas](https://github.com/LukZeh)
