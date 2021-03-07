import cloudinary from 'cloudinary/lib/v2';

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

const getCloudinaryImages = () => {
    cloudinary.search
        .expression('folder:ecommerce_app')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute()
        .then((result) =>
            result.resources.map((resource) => resource.public_id)
        )
        .then((public_id) => public_id);
};

const removeCloudniryImage = (image) => {
    return cloudinary.uploader.destroy(image, function (result) {
        console.log(result);
    });
};

export { uploadCloudinaryFile, getCloudinaryImages, removeCloudniryImage };
