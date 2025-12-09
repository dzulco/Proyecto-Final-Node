  // products.controller.js 
 import productsService from '../services/products.service.js';
  
 export const getAllProducts=  async (req, res) => { 
      const products=  await productsService.getAllProducts()
      if (products) { 
          res.status(200).json(products); 
      } else { 
          res.status(404).json({ message: 'Productos no encontrados' }); 
      }
  };  
  export const getProductById=  async (req, res) => { 
      const id=  req.params.id; 
      const product=  await productsService.getProductById(id); 
      if (product) { 
          res.status(200).json(product); 
      } else { 
          res.status(404).json({ message: 'Producto no encontrado' }); 
      } 
  }; 
  
  export const createProduct=  async (req, res) => { 
      const { category, description, sku, stock, name, price }=  req.body; 
      const newProduct= await productsService.addNewProduct({ category, description, sku, stock, name, price }); 
      res.status(201).json(newProduct); 
  }; 

  export const deleteProduct = async (req, res) => { 
    const id=  req.params.id; 
    const deletedProduct=  await productsService.deleteProduct(id); 
    
    if (!deletedProduct) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }

    return res.status(200).json(deletedProduct);
  }; 