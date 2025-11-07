**current progress 11/6 : setting up the back end, user registration, authentication, profile, web tokens and more**

<h1>MERN Application Overview</h1>

This project is a full-stack web application built using the MERN stack — which stands for MongoDB, Express.js, React, and Node.js.
It’s designed to demonstrate a modern, end-to-end JavaScript development workflow, featuring secure authentication, RESTful APIs, and a responsive front-end interface.

<h2>Tech Stack:</h2>

<h3>Frontend</h3>

React.js – Builds the user interface using reusable components.

React Router – Manages client-side routing for seamless navigation.

Axios / Fetch API – Handles HTTP requests between the frontend and backend.

CSS / Tailwind / Bootstrap – Provides responsive and modern UI styling.

<h3>Backend</h3>

Node.js – JavaScript runtime environment for running server-side code.

Express.js – Framework for handling routes, middleware, and API logic.

MongoDB – NoSQL database for storing app data.

Mongoose – ODM (Object Data Modeling) library for working with MongoDB.

<h3>Authentication & Security</h3>

bcrypt.js – Hashes passwords securely before saving to the database.

jsonwebtoken (JWT) – Provides token-based user authentication.

express-validator – Validates incoming request data.

<h3>How It Works</h3>

Frontend (React) –
Users interact with the web app through dynamic React components. Data from input fields (like signup, login, or forms) is sent to the backend via RESTful API calls.

Backend (Node + Express) –
The Express server receives requests, validates the data, and processes logic such as user authentication, profile management, or CRUD operations.

Database (MongoDB) –
User and application data are stored in MongoDB. The backend interacts with the database using Mongoose models.

Authentication Flow –
When a user signs up or logs in, their password is hashed using bcrypt, and a JWT token is generated and sent to the client for secure access to protected routes.

<h3>Key Features:</h3>

User registration and login system (with JWT authentication)

Password encryption using bcrypt

Form validation on both client and server

RESTful API endpoints (GET, POST, PUT, DELETE)

Persistent storage using MongoDB Atlas / local MongoDB

Responsive UI and component-based frontend
