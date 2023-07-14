# Senew-tech Full Stack Developer Exercise Task 1

# NOTE: Both FrontEnd and BackEnd should be up and running for complete working.

## Description
Creating API to Upload and Insert CSV Data, Generate Random Data, and Design a Web Page


## Endpoints After the completeing Instructions blow(How to setup and run locally) 

### POST /api/data/upload

Uploads data in CSV format.

### GET /api/data/data

get all data from database.

### POST /api/data/generate

Generate random data and insert into database.



## Description

This is a simple backend exercise that uses Node.js and Express.js to create a server that serves JSON as a response to a REST API calls. MySQL is used as the database and Sequlized ORM used as the query builder. Docker is used to run the database.

## Instructions(How to setup and run locally)


**Step-1:** Fork and clone the repository.
```bash
git clone https://github.com/Bilal-Gujjar/Fullstack-task
```

**Step-2:** Download and Install Docker Desktop from [here](https://www.docker.com/products/docker-desktop).

**Step-3:** Download and Install Node.js  LTS from [here](https://nodejs.org/en/download).



**Step-4:** Run the following command to build and run the mysql database.
```bash
docker-compose up --build -d
```

**Step-5:** Run the following command to run the server.
```bash
npm run start
```
# NOTE:
###### * For backend move the backend directory and The server runs on http://localhost:5000.
###### * For frontend move the frontend directory and The server runs on http://localhost:3000.

* You can access the database using the following credentials:
```bash
    host: localhost
    port: 3306
    username: user
    password: password
    database: db
```
Hope you enjoy the Solution!
