const express = require('express');
const PropertyController = require('../controllers/propertyController'); // Import the class
const router = express.Router();

const propertyController = new PropertyController(); // Instantiate the class

router.post('/properties', propertyController.createProperty);
router.get('/properties', propertyController.getProperties);
router.get('/properties/:id', propertyController.getPropertyById);
router.put('/properties/:id', propertyController.updateProperty);
router.delete('/properties/:id', propertyController.deleteProperty);

module.exports = router;