import express from 'express'
import { getUserController, registerController, loginController } from '../controllers/userController.js';

const router = express.Router();

// Fot getting all User
 router.get('/all-user', getUserController)

// For Creating User's we use Post Method
router.post('/register', registerController)

// For login route we also use our Post Method 
router.post('/login', loginController)


export default router