
# Simple React + Redux and Node.js + Express App with JWT Authentication

This repository contains a basic web application built using React, Redux, Node.js, and Express. The app includes user authentication using JSON Web Tokens (JWT). Below are instructions on how to set up and run the project.

## Getting Started

### Backend Setup

1. **Database Configuration:**
   - Open the `db.config.js` file located in the `config` folder.
   - Update the database details (such as host, port, username, password, and database name) according to your environment.
   - Create the corresponding database in your preferred database system (e.g., MySQL, PostgreSQL, MongoDB).

2. **Install Dependencies:**
   - Navigate to the `backend` folder.
   - Run the following command to install the required dependencies:
     ```
     npm install
     ```

3. **Run the Backend Server:**
   - Execute the following command to start the backend server:
     ```
     node app.js
     ```
   - The server will run on the specified port (default is 5000).

### Frontend Setup

1. **Navigate to the Client Folder:**
   - Open a new terminal window.
   - Change directory to the `client` folder:
     ```
     cd client
     ```

2. **Install Dependencies:**
   - Run the following command to install frontend dependencies:
     ```
     npm install
     ```

3. **Start the Frontend Development Server:**
   - Execute the following command to start the React development server:
     ```
     npm run start
     ```
   - The app will be accessible at [http://localhost:3000](http://localhost:3000).

## Features

- User authentication using JWT tokens.
- Basic login and registration functionality.
- Frontend built with React and Redux.
- Backend powered by Node.js and Express.

