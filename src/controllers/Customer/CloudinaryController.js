import cloudinary from 'cloudinary/lib/v2';

import { removeCloudinaryImage } from '../../middleware/cloudinary';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const uploadCloudinaryImageController = async (req, res) => {
    if (!req.imageUpload) {
        res.status(404).json({
            message: 'Cannot read property avatar of undefined',
        });
    }

    await cloudinary.uploader.upload(req.imageUpload.tempFilePath, {
        upload_preset: 'ecommerce_app',
        name: 'avatar',
    });

    const Images = req.getImagesCloudinary.resources;

    for (const element of Images) {
        removeCloudinaryImage(element.public_id);
    }

    res.status(200).json({
        success: true,
        message: 'Upload is Success',
    });
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getCloudinaryImagesController = async (req, res) => {
    try {
        if (!req.getImagesCloudinary)
            res.status(404).json({
                message: 'Images Not Found',
            });

        res.status(200).json({
            images: req.getImagesCloudinary,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

export { uploadCloudinaryImageController, getCloudinaryImagesController };
