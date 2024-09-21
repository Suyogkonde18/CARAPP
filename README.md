****Car Vault App**
****Overview**
The Car Vault App is a full-stack web application designed to manage and track vehicles securely. This application consists of a React.js frontend and a Node.js/Express.js backend, with MongoDB as the database for data storage. The app allows users to authenticate, manage vehicle data, and track vehicles in real-time.
**Features**
**Backend**
User Authentication: JWT-based authentication system to secure API endpoints.
Vehicle Management: CRUD operations for vehicle data.
Real-time Tracking: API endpoints to track vehicles in real-time.
Secure API: Implemented with security best practices to protect user data.
Database Integration: MongoDB for storing vehicle and user data.
**Frontend**
User Interface: Built with React.js to provide a dynamic and responsive user experience.
API Integration: Uses Axios to communicate with the backend API.
Date Management: Moment.js for handling and displaying dates.
State Management: Manages application state efficiently with React’s component-based architecture.
**Installation and Setup
Prerequisites**
Node.js
MongoDB
**Backend Setup**
Navigate to the server directory:
cd car-vault-app-using-mern-stack/server
Install dependencies:
npm install
**Set up environment variables:**
Create a .env file in the server directory with the following:
plaintext
Copy code
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
Start the backend server:
Copy code
npm start
Frontend Setup
Navigate to the client directory:
Copy code
cd ../client
Install dependencies:
Copy code
npm install
Start the frontend server:
Copy code
npm start
The frontend will be available at http://localhost:3000.
API Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in a user.
Vehicles
GET /api/vehicles: Retrieve all vehicles.
POST /api/vehicles: Add a new vehicle.
GET /api/vehicles/:id: Get a specific vehicle by ID.
PUT /api/vehicles/:id: Update a vehicle by ID.
DELETE /api/vehicles/:id: Delete a vehicle by ID.
Tracking
GET /api/track/:vehicleId: Get real-time tracking data for a specific vehicle.
Libraries and Technologies Used
Backend
Node.js: JavaScript runtime environment.
Express.js: Web application framework for Node.js.
MongoDB: NoSQL database for storing vehicle and user data.
Mongoose: MongoDB object modeling tool.
JWT: JSON Web Token for securing API endpoints.
Frontend
React: JavaScript library for building user interfaces.
Axios: HTTP client for making API requests.
Moment.js: Library for parsing and formatting dates.
React-Scripts: Scripts and configuration for Create React App.
Contributing
Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request with your changes.

License
This project is licensed under the MIT License.

Contact
For any queries, please contact HARATHI2003 via [harthid2003@gmail.com].
