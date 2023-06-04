# Social Network Api

## Description

- The goal was to create a mock e-commerce back end to familiarize myself with e-commerce databases functionality
- I was able to better utilize CRUD to manage data
- I was able to utilze the sequilize package as my ORM instead of writing raw SQL

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Installation

- Clone the [repo](https://github.com/andrewmuhn/social-network-api) to your local machine.
- Navigate to that file directory and run from your terminal:

```bash
	npm i
```

> **Note**: Node.js and npm need to be installed to perform this action. Installing Node.js will also install npm

- Then in order to seed the database run from your terminal:

```bash
	npm run seed
```

> **Note**: MongoDB needs to be installed in order to run these commands.

## Usage

- Follow the above installation steps to get started.
- Then run from your terminal:

```bash
	npm start
```

USER ROUTES:

View all Users
![View Users](./assets/getusers.png)
View Single User
![View Single User](./assets/getsingleuser.png)
Create User
![Create User](./assets/createuser.png)
Update User
![Update User](./assets/updateuser.png)
Delete User
![Delete User](./assets/deleteuser.png)
Add Friend
![Add Friend](./assets/addfriend.png)
Delete Friend
![Delete Friend](./assets/deletefriend.png)

THOUGHT ROUTES:

View all Thoughts
![View Thoughts](./assets/getthoughts.png)
View Single Thought
![View Single Thought](./assets/getsinglethought.png)
Create Thought
![Create Thought](./assets/createthought.png)
Update Thought
![Update Thought](./assets/updatethought.png)
Delete Thought
![Delete Thought](./assets/deletethought.png)
Add Reaction
![Add Reaction](./assets/addreaction.png)
Delete Reaction
![Delete Reaction](./assets/deletereaction.png)

[Link to repo](https://github.com/andrewmuhn/social-network-api)

[Link to video walkthrough of application](https://drive.google.com/file/d/1SQMS84Ae07rKwbHMb_6qO9N61eiBgOZX/view)

## Credits

Project created by [Andrew Muhn](https://github.com/andrewmuhn)
as part of UofO Edx Bootcamp

Utilized:

- [node.js](https://nodejs.org/en/about)
- [express](https://www.npmjs.com/package/express)
- [mongoDB](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)
- [nodemon](https://www.npmjs.com/package/nodemon)

Credits to tutorials and forums used:

[mongoose schema match syntax](https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax)
