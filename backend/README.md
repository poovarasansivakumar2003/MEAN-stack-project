# Real Estate Application Backend

This is the backend part of the Real Estate Application built using the MEAN stack (MongoDB, Express, Angular, Node.js).

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.js**: Entry point of the application.
  - **config/**: Configuration files, including database connection.
  - **controllers/**: Contains controllers for handling business logic.
  - **models/**: Mongoose models for the application.
  - **routes/**: API routes for the application.
  - **utils/**: Utility functions used throughout the application.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd real-estate-app/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the backend server, run:
```
npm start
```

The server will run on `http://localhost:3000` by default.

## API Endpoints

- **GET /api/properties**: Retrieve all properties.
- **GET /api/properties/:id**: Retrieve a property by ID.
- **POST /api/properties**: Create a new property.
- **PUT /api/properties/:id**: Update a property by ID.
- **DELETE /api/properties/:id**: Delete a property by ID.

## Database Configuration

Make sure to configure your MongoDB connection in `src/config/database.js` before running the application.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.