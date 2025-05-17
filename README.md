# Real Estate Web Application

This is a full-stack real estate web application built using the MEAN stack (MongoDB, Express, Angular, Node.js). The application allows users to view, create, update, and delete property listings.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built with Node.js and Express. It handles API requests and interacts with the MongoDB database.

- **src/app.js**: Entry point of the backend application.
- **src/config/database.js**: Configuration for connecting to the MongoDB database.
- **src/controllers/propertyController.js**: Handles CRUD operations for properties.
- **src/models/propertyModel.js**: Defines the Mongoose schema for properties.
- **src/routes/propertyRoutes.js**: Defines API endpoints for properties.
- **src/utils/index.js**: Contains utility functions for the backend.
- **package.json**: Lists dependencies and scripts for the backend.

### Frontend

The frontend is built with Angular. It provides a user interface for interacting with the property listings.

- **src/app/components/property-list**: Contains the component for displaying the list of properties.
  - **property-list.component.html**: HTML template for the property list.
  - **property-list.component.ts**: Logic for fetching and displaying properties.
  - **property-list.component.css**: Styles for the property list component.
- **src/app/services/property.service.ts**: Service for making HTTP requests to the backend API.
- **src/app/app.module.ts**: Main module of the Angular application.
- **src/assets**: Directory for static assets.
- **src/environments**: Contains environment-specific settings.
- **src/index.html**: Main HTML file for the Angular application.
- **src/main.ts**: Entry point of the Angular application.
- **angular.json**: Configuration settings for the Angular project.
- **package.json**: Lists dependencies and scripts for the frontend.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd real-estate-app
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the backend server:
     ```
     npm start
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the Angular application:
     ```
     ng serve
     ```

## Features

- View a list of properties.
- Create new property listings.
- Update existing property details.
- Delete property listings.

## Technologies Used

- MongoDB
- Express.js
- Angular
- Node.js

## License

This project is licensed under the MIT License.