import cloudinary from 'cloudinary/lib/v2';

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const uploadCloudinaryCustomerAvatar = async (req, res, next) => {
    try {
        req.imageUpload = await cloudinary.uploader.upload(
            req.files.avatar.tempFilePath,
            { upload_preset: 'avatar' }
        );
        next();
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getCloudinaryImages = async (req, res, next) => {
    try {
        const getImages = await cloudinary.search
            .expression('folder:ecommerce_app')
            .sort_by('public_id', 'desc')
            .max_results(30)
            .execute();

        req.getImagesCloudinary = getImages;
    } catch (error) {
        res.status(500).send(error);
    }

    next();
};

/**
 *
 * @param {string} image
 * @returns {any}
 */
const removeCloudinaryImage = (image) => {
    return cloudinary.uploader.destroy(image);
};

export {
    uploadCloudinaryCustomerAvatar,
    getCloudinaryImages,
    removeCloudinaryImage,
};
