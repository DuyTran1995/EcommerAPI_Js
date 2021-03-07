import cloudinary from 'cloudinary/lib/v2';

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

    res.status(200).json({
        success: true,
        message: 'Upload is Success',
    });
};

export { uploadCloudinaryImageController };
