Work Availability Project

Overview
This project is a Work Availability System, designed to manage and display work schedules and related information efficiently. It is divided into two main components:

1. Server: Backend implementation to handle API requests, database operations, and business logic.
2. Website: Frontend implementation built to interact with the backend and provide a user-friendly interface.

Technologies Used Backend:
Node.js: JavaScript runtime for backend development.
Express.js: Framework for building RESTful APIs.
Database: Likely MongoDB, MySQL, or another database (depending on configuration in `Config` and `Database`).
Environment Variables: Securely configured using `.env`.

Technologies Used FrontEnd:
HTML: Structure and styling of the user interface.
CSS: Utility-first CSS framework for responsive design.
JavaScript: Dynamic behavior for the frontend.


Setting Up the Project

Prerequisites
Node.js: Ensure Node.js is installed on your system.
npm: Comes bundled with Node.js for managing packages.

Installation Steps

Backend:
1. Navigate to the `workavailability-server` directory:
   cd workavailability-server
   
2. Install dependencies:
   npm install

3. Create a `.env` file and configure environment variables.
4. Start the server:
   npm start
  

Frontend:
1. Navigate to the `workavailability-website` directory:
   cd workavailability-website
   
3. Install dependencies:
   npm install
   
4. Start the development server:
   npm run dev
   
