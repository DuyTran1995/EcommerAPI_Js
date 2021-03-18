import express from 'express';
import { ProductController } from '../controllers';

const router = express.Router();

/**
 *
 * @param {express} app include from app.js
 */

const ProductRoutes = (app) => {
    router.post('/:categoryId', ProductController.createNewProduct);
    router.get('/', ProductController.getProducts);
    router.get('/:productId', ProductController.getProductById);
    router.patch('/:productSku', ProductController.updateProduct);
    router.delete('/:productSku', ProductController.deleteProduct);
    return app.use('/api/v1/product', router);
};

export default ProductRoutes;
