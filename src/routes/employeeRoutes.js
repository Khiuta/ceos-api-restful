const { Router } = require('express');

const employeeController = require('../Controllers/EmployeeController.js');

const router = Router();

router.get('/:id', employeeController.show)
router.get('/', employeeController.index)
router.post('/', employeeController.store)

module.exports = router;