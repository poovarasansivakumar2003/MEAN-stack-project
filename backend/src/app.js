const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const propertyRoutes = require('./routes/propertyRoutes');
const databaseConfig = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Database connection
databaseConfig();

// Routes
app.use('/api/properties', propertyRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});