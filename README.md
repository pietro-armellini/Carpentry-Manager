# Carpentry Manager
### Software Engineering Project - University of Trento
This project was carried out for the Software Engineering course at the University of Trento.

## Table of Contents
- [Architecture](#architecture)
- [Structure](#structure)
- [Usage](#usage)
     - [Prerequisites](#prerequisites)
     - [Back-end](#back-end)
         - [Testing](#testing)
     - [Front-end](#front-end)
- [Credits](#credits)
        

## Architettura

![Architecture GIF](architecture.gif)

- Vue Router enables navigation between pages
- Vue Client sends and receives http requests using `axios`
- Express provides the link to the APIs
- Sequelize ORM enables interaction between the database and the application

---

## Structure
Folder structure
```shell
back-end
├── app
│   ├── controllers
│   ├── docs
│   ├── routes
│   └── tests
└──  db
    ├── config
    ├── migrations
    ├── models
    └── seeders
    
front-end
├── public
└── src 
    ├── assets
    ├── components
    └── services
```
### Usage

### Prerequisites

Make sure you have already installed:
- [NodeJs & npm](https://nodejs.org/en/download/)
- [MySQL server](https://dev.mysql.com/downloads/mysql/)

### Back-end
Modify the file `back-end/db/config/config.json` with your own data
```shell
cd back-end/  
npm ci 
npm run db:reset
npm start
```
API documentation is available at `http://localhost:8080/api-docs/`

#### Testing
```shell
npm test
```

### Front-end
```shell
cd front-end/
npm ci 
npm run serve
```

Server running at `http://localhost:8081/`

---

## Credits

The foundation of this project was built following these tutorials:
- [General Structure](https://www.bezkoder.com/vue-js-node-js-express-mysql-crud-example/)
- [Sequelize CLI and Testing](https://levelup.gitconnected.com/building-an-express-api-with-sequelize-cli-and-unit-testing-882c6875ed59)
