[![Coverage Status](https://coveralls.io/repos/github/ASE-FS21-TrialNError/TrialNError-Server/badge.svg?branch=main)](https://coveralls.io/github/ASE-FS21-TrialNError/TrialNError-Server?branch=main)
[![Deploy](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/actions/workflows/deploy.yml/badge.svg)](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/actions/workflows/deploy.yml)


# TrialNError-Server

## General information
This application server provides authentication as well as app administration. This app was created using the [nestjs](https://nestjs.com/) framework and stores data in [MongoDB](https://www.mongodb.com/).

## High-level components

- **[Authentication Controller](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/blob/main/src/auth/auth.controller.spec.ts)**: Handles all authentication related requests from the client.

- **[Apps Controller](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/blob/main/src/apps/apps.controller.spec.ts)**: This controller handles the  functionality of the Apps.

- **[Wishlist Controller](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/tree/main/src/wishlist/wishlist.controller.spec.ts)**: This Controller handles the functionality of Wishlist.


- **[User Controller](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/tree/main/src/users/users.controller.spec.ts)**: This Controller handles the functionality of Users.

These four components are inextricably linked since they enable user authentication and Apps functionality. While the Wishlist controller is being used to add applications to the wishlist, it is also being used to delete applications from the wishlist. The Apps controller allows you to acquire apps with various filters.

Check out our client project [:desktop_computer: client repo](https://github.com/ASE-FS21-TrialNError/TrialNError-Client).

Check out our recommendation project [:hourglass:recommendation repo ](https://github.com/ASE-FS21-TrialNError/TrialNError-Python).

## Launch & Deployment - for joining developers

### Set Up Environment variable

 Please Copy the properties from [Sample.env](https://github.com/ASE-FS21-TrialNError/TrialNError-Server/blob/main/sample.env) and  created the .env file is root folder. Set the Environment variable like JWT secret, Mongodb URL and SMTP configuration in this file.
 

To run the application locally, a Node.js version >= 12.10 will be need. Node.js can be downloaded [here](https://nodejs.org).

#### Installation 

```bash
npm install
```

This command has to be run before starting the application for the first time. It will install further dependencies to Node.js.


### Run app for development 

```bash
npm run start
```

This command runs the application in the development mode. Open http://localhost:3000 to view it in the browser. 


### Run app in  production mode

```bash
npm run start:prod
```

This command runs the application in the Production mode.

### Run unit tests

```bash
npm run test
```

This command runs the application Unit Test cases.

### Run test coverage

```bash
npm run test:cov
```

This command runs the application Test coverage cases.

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
