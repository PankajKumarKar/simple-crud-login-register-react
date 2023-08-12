# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Simple CRUD with Login and Register Flow using React, JSON Server, React Toastify, and Tailwind CSS

This repository contains a simple implementation of a CRUD (Create, Read, Update, Delete) application with a basic login and 
register flow using React, JSON Server, React Toastify, and Tailwind CSS. Please note that this implementation does not 
include authentication and authorization features, making it suitable for learning and demonstration purposes.


Features:-

Create, Read, Update, and Delete operations for a sample entity.
Basic user registration and login functionality without authentication and authorization.
Integration of React Router for page navigation.
Use of React Toastify for displaying user notifications.
Styling with Tailwind CSS.

Prerequisites:-

Before running the application, ensure you have the following software installed:

Node.js: Download and install Node.js

Getting Started:-
1.Clone this repository to your local machine:
https://github.com/PankajKumarKar/simple-crud-login-register-react.git
cd simple-crud-login-register-react

2.Install dependencies:
npm install

3.Start the JSON Server to simulate the backend:
json-server  db.json -w

This will start the JSON Server and serve the sample data. The API will be available at '(http://localhost:3000/profile/)http://localhost:3000/profile/.

4.Start the React application
npm run dev

The application will be accessible at http://localhost:5173.

Usage:-

Registration and Login
Open the application in your web browser: http://localhost:5173/.

Click on the "Login" then "Signup "link to register a new user. Enter your desired fullname ,email and password, and click "Signup."

Once registered, you will be redirected to the login page. Enter your credentials and click "Login."

After logging in, you will be directed to the main dashboard.

Here, you can perform READ UPDATE,AND DELETE operations on the sample entity.


Read: The list of items will be displayed on the dashboard.
Update: Click the "Edit" button next to an user to modify its details.
Delete: Click the "Delete" button next to an user to remove it.


Dependencies:-
This project uses the following dependencies:

React: A JavaScript library for building user interfaces.
React Router: A library for handling navigation within a React application.
JSON Server: Simulates a backend API using a JSON file.
React Toastify: A notification library for displaying user notifications.
Tailwind CSS: A utility-first CSS framework for styling.

Limitations
Please note the following limitations of this implementation:

No Authentication and Authorization: This implementation does not include real user authentication and authorization mechanisms.
It is essential to integrate proper security features before deploying to a production environment.
