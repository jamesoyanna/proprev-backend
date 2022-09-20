## Poprev backend application

### About Project
Poprev is the reward mechanism for Fans all over the world, as such  we rely on artist projects and the fans being able to invest in these projects.

Artists pitch projects to us, which we accept and hence would go on to do some setup on our side to make the project available for the users to buy a share of it.

## Application Features & Functionalities
Authenticate a user
Create a project for an artist
Buy/Sell tokens
Show transactions relating to a token
Show a user the details of their investment in a token
Bonus: Publishing to a Public host.

#### Live deployed api can be found here- [Poprev api](https://poprev-backend.herokuapp.com/)



### View of api useage on Postman

Register route

![register](https://user-images.githubusercontent.com/26815113/191319397-9a2a154f-750b-4a9a-9dcd-491b02c0ada2.PNG)


Login Route:
![login](https://user-images.githubusercontent.com/26815113/191319726-e38d001c-21d4-45f8-8e44-f6b67db6c82d.PNG)


Create project route: 
![create-project](https://user-images.githubusercontent.com/26815113/191320009-6f5b206f-3c48-4fbd-95ff-638e5f96cf86.PNG)


## How to use the api

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Development](#development)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Authors](#author)
- [License](#license)

## Getting Started

#### Dependencies
The project is built with;
* [Nodejs Express](https://expressjs.com/) -Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

* [Passport](https://www.passportjs.org/) - Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application

* [Bcrypt JS](https://www.npmjs.com/package/bcrypt) - This module enables storing of passwords as hashed passwords instead of plaintext.
* [Mongoose](https://mongoosejs.com) - Provides a straight-forward, schema-based solution to model application data.
* [Node.js](https://nodejs.org/en)- Cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

* [dotenv](https://www.npmjs.com/package/dotenv)- dotenv allows you to separate secrets from your source code.

##### Database
* [MongoDB](https://www.mongodb.com)- As a document database, MongoDB makes it easy for developers to store structured or unstructured data

 
### Prerequisites
Ensure you have NodeJS installed by entering node -v on your terminal If you don't have NodeJS installed, go to the NodeJS Website, and follow the download instructions


### Tools Required
The following tools are required to run this application:

* A text editor like Visual Studio Code
* Command Line

### Getting the source code
You can clone the repository directly using this command:
git clone https://github.com/jamesoyanna/proprev-backend
OR clicking on the code button ontop to clone the application.

### Installation
Installation steps:

Node.js and Yarn or Npm
Your computer must have installed nodejs, and yarn to run this application You can download Node.js from https://nodejs.org and yarn from https://yarnpkg.com/lang/en/docs/install/ . NPM comes bundled with Node.js

![nodejs](https://user-images.githubusercontent.com/26815113/132867561-bf2ec1a2-cd63-461f-95dd-e95c1c6676c7.PNG)

## Install Npm Packages

#### Running the Server
Open the project folder you cloned. 
Create a .env file in the root folder
Fill in the following credentials:
PORT=
MONGODB_URL=
SECRET=

Run npm install from your terminal.
Then run npm start. 
Your server should start running on port 5000.

## Author

#### James Oyanna
* [GitHub](https://github.com/jamesoyanna)
* [LinkedIn](https://www.linkedin.com/in/jamesoyanna)


