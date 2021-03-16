import express from 'express';
import { CategoryController } from '../controllers';

const router = express.Router();

/**
 *
 * @param {express} app include from app.js
 */

const ProductRoutes = (app) => {
    router.get('/', CategoryController.getAllCategories);
    router.get('/:categoryId', CategoryController.getCategoryById);
    router.post('/', CategoryController.createNewCategory);
    router.patch('/:categoryId', CategoryController.updateCategory);
    router.delete('/:categoryId', CategoryController.deleteCategory);
    return app.use('/api/v1/category', router);
};

export default ProductRoutes;
