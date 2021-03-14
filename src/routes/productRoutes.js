import express from 'express';
import { ProductController } from '../controllers';

const router = express.Router();

/**
 *
 * @param {express} app include from app.js
 */

const ProductRoutes = (app) => {
    router.post('/:categoryId', ProductController.createNewProduct);
    return app.use('/api/v1/product', router);
};

export default ProductRoutes;
