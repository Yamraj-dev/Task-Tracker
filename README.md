# Task Tracker

A simple task tracker application built using Node.js, Express, and MongoDB. This project demonstrates how to create, display, and manage tasks using a basic CRUD setup.
**Note:** This project is still a work in progress and not yet complete. Features like editing and deleting tasks, authentication, and additional enhancements and much more are yet to be added.

Feel free to contribute!

---

## Features

- **Task Management**: Add tasks with details such as name, description, date, and time.
- **Task Listing**: View all tasks in a table format.
- **Responsive Design**: Uses Bootstrap for styling and responsiveness.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript Templates), Bootstrap
- **Database**: MongoDB
- **Session Management**: Express-Session with MongoDB as the session store

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed
- MongoDB instance running locally or a MongoDB Atlas connection string

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-tracker.git
   cd task-tracker
2. Install dependencies:
   npm install
3. Create a .env file and configure the following:
   PORT=3000
   MONGO_URL=your-mongodb-connection-string
4. Start the application:
   npm server.js
5. Server will be live on:
   http://localhost:5000

Project Structure:
task-tracker/
├── frontend/
│   ├── Views/
│   │   ├── layout.ejs
│   │   ├── task.ejs
│   └── static/
│       ├── css/
│       └── js/
├── models/
│   └── task.model.js
├── routes/
│   ├── client.route.js
│   └── task.route.js
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md

Future Improvements
Add edit and delete functionality for tasks
Implement user authentication
Add task filtering and sorting options
Enhance UI with more styling and animations
Deploy the application to a hosting platform like Heroku or Vercel

License
This project is licensed under the MIT License.

Contributing
Feel free to fork the repository and make changes! Contributions are always welcome.

Contact
For any queries or suggestions, please reach out to:

Email: prathameshmonde.pm@gmail.com
GitHub: Yamraj-dev
