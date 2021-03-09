import cloudinary from 'cloudinary/lib/v2';

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const uploadCloudinaryFile = async (req, res, next) => {
    try {
        req.imageUpload = await req.files.avatar;
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Cannot read property avatar of undefined',
        });
    }
    next();
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
        res.status(500).json(error);
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

export { uploadCloudinaryFile, getCloudinaryImages, removeCloudinaryImage };
