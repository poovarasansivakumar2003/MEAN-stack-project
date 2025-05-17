# Real Estate Web Application

This is a MEAN stack real estate web application that allows users to view, add, update, and delete property listings.

## Project Structure

```
real-estate-app
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── config
│   │   │   └── database.js
│   │   ├── controllers
│   │   │   └── propertyController.js
│   │   ├── models
│   │   │   └── propertyModel.js
│   │   ├── routes
│   │   │   └── propertyRoutes.js
│   │   └── utils
│   │       └── index.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   │   └── property-list
│   │   │   │       ├── property-list.component.html
│   │   │   │       ├── property-list.component.ts
│   │   │   │       └── property-list.component.css
│   │   │   ├── services
│   │   │   │   └── property.service.ts
│   │   │   └── app.module.ts
│   │   ├── assets
│   │   ├── environments
│   │   │   ├── environment.prod.ts
│   │   │   └── environment.ts
│   │   ├── index.html
│   │   └── main.ts
│   ├── angular.json
│   ├── package.json
│   └── README.md
└── README.md
```

## Features

- User-friendly interface to view property listings.
- Ability to add new properties.
- Update existing property details.
- Delete properties from the listings.
- Responsive design for mobile and desktop views.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd real-estate-app/backend
   npm install
   ```

3. Set up the database connection in `backend/src/config/database.js`.

4. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

5. Run the backend server:
   ```
   cd backend
   npm start
   ```

6. Run the frontend application:
   ```
   cd frontend
   ng serve
   ```

### Usage

- Access the application at `http://localhost:4200`.
- Use the provided UI to manage property listings.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.