const { Router } = require('express');
const productRouter = Router();

const getProductHandler = require('../handler/productHandler/getProductHandler');
const createProductHandler = require('../handler/productHandler/createProductHandler');
const updateProductHandler = require('../handler/productHandler/updateProductHandler');
const deleteProductHandler = require('../handler/productHandler/deleteProductHandler');

const {
    validateNameProductPost,
    validateTypeProductPost,
    validateDescriptionProductPost,
    validatePriceProductPost,
    validateStockProductPost,
    validateImageProductPost,
    validateProductIdPost,
} = require('../utils/middlewareProduct');

productRouter.get('/getProducts', getProductHandler);

// creacion unitaria de producto
productRouter.post('/createProduct', [
    validateNameProductPost,
    validateTypeProductPost,
    validateDescriptionProductPost,
    validatePriceProductPost,
    validateStockProductPost,
    validateImageProductPost,
], createProductHandler);

productRouter.put('/updateProduct', [
    validateProductIdPost
], updateProductHandler);

productRouter.delete('/deleteProduct', validateProductIdPost, deleteProductHandler);

module.exports = productRouter;