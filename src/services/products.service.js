 import productModel from '../models/products.model.js';

 async function getProductsInStock() {
    const products = await productModel.getProductsInStock();
    return products.filter(product => product.stock > 0);    
 }

 async function addNewProduct(productData) {
    if(!productData.name || !productData.price){
        throw new Error("Nombre y precio del producto son obligatirios");
    }

    if(productData.price <= 0){
        throw new Error("Precio debe ser mayor a cero.");
    }

    return await productModel.saveProduct(productData);
 }

 async function getAllProducts() {
    return await productModel.getAllProducts();
 }

  async function getProductById(id) {
    if(!id){
        throw new Error("Debe enviar un id de producto");
    }
    return await productModel.getProductById(id);
 }

 async function deleteProduct(id) {
    if (!id) {
        throw new Error("Debe enviar un id de producto");
    }
    // 1. Buscar producto antes de borrarlo
    const product = await productModel.getProductById(id);

    if (!product) {
        return null; // No existe → controller devuelve 404
    }

    // 2. Borrar el producto
    await productModel.deleteProduct(id);

    // 3. Devolver el producto eliminado
    return {
        id,
        ...product
    };
}

 const productService = {
    getProductsInStock,
    addNewProduct,
    getAllProducts,
    getProductById,
    deleteProduct
}

export default productService;




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 