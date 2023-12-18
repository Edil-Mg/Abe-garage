import employeeController from '../controllers/employee.controller.js';
import express from 'express';
const employeeRout = express.Router();

employeeRout.post('/api/employee', employeeController.addemployee);
// employeeRout.update('/api/employee', employeeController.updateemployee);
employeeRout.get('/api/all-employee', employeeController.allEmployee);


export default employeeRout; 