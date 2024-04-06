import { Router } from 'express';

import employeeController from '../Controllers/EmployeeController.js';

const router = Router();

router.get('/:id', employeeController.show)
router.get('/', employeeController.index)
router.post('/', employeeController.store)

export default router;