var express = require('express');
var router = express.Router();
var equipmentController =  require('../controllers/equipmentController');

router.route('/')
    .get(equipmentController.getAllEquipment)
    .post(equipmentController.addEquipment);

router.route('/:id')
    .get(equipmentController.getEquipment)
    .put(equipmentController.updateEquipment)
    .delete(equipmentController.deleteEquipment);

router.route('/:year')
    .get(equipmentController.getEquipmentByYear);

router.route('/:month')
    .get(equipmentController.getEquipmentByMonth);

 router.route('/:year-month')
 .get(equipmentController.getEquipmentByMonth);

module.exports = router;