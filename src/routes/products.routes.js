 // products.routes.js   
import express from 'express'; 
import { authenticateToken } from "../middlewares/auth.middleware.js";
 
const router =  express.Router(); 

import { 
    getAllProducts, 
    getProductById, 
    createProduct,
    deleteProduct   } from '../controllers/products.controller.js'; 

router.get('/products',authenticateToken, getAllProducts); 
router.get('/products/:id',authenticateToken, getProductById); 
router.post('/products',authenticateToken, createProduct); 
router.delete('/products/:id',authenticateToken, deleteProduct)

export default router; 