<h1 align="center">Welcome to MERN Shopping Cart 👋</h1>
<p>
</p>

> A full stack MERN (MongoDB, Express, React, Node.js) application using React and Redux for the front end and Node.js, Express, and MongoDB for the back end.

### 🏠 [Homepage](https://antonio-mern-shopping.netlify.app/)

![](/uploads/mern-shopping-screenshot.png?raw=true)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest stable version of [node.js](https://nodejs.org/en/)
- You will need to create a MongoDB database. This project uses a Cloud Atlas cluster. Create one [here](https://www.mongodb.com/cloud/atlas)

## Features

- Express and Mongoose for server response and request
- Merchandise stock database stored in MongoDB
- Persistence in local storage during page refresh
- Redux, Redux Thunk, and React Router for navigation and dispatching API calls
- Cart quantity and subtotal reflects throughout

## Install

Clone respository: `https://github.com/antonio-lopez/mern-shopping.git`

```
cd mern-shopping/
npm install
```

Create a `.env` file in the root `mern-shopping` directory and create a variable `MONGO_URI` and add your MongoDB database connection string.

```
cd backend/
npm install
```

```
cd frontend/
npm install
```

## Usage

The given script in `package.json` allows you to run the front end and the back end concurrently.

```
cd mern-shopping/
npm run dev
```

## Author

👤 **Antonio Lopez**

- Website: [Antonio Lopez](https://www.antoniolopez.me/)
- Github: [@antonio-lopez](https://github.com/antonio-lopez)
