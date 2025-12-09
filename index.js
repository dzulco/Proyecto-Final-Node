import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

import productsRouter from './src/routes/products.routes.js';
import authRoutes from './src/routes/auth.routes.js';

const app = express();

// Permite todos los origenes
app.use(cors());

//  Middleware global de body-parser para JSON
app.use(bodyParser.json());

//Rutas
app.use('/api',productsRouter);
app.use("/api", authRoutes);


// Middleware manejo de 404
app.use((req,res, next) => {
    res.status(404).send("Recurso no encontrado o ruta inválida");
});



//Inicia servidor puerto 3000
const PORT = 3000; 
app.listen(PORT, () => { 
    console.log(`Server running at http://localhost:${PORT}`); 
}); 
