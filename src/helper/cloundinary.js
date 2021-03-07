const getCloudinaryImages = (folder, subfolder, image, quality, width, crop) => {
    cloudinary.image(`${folder}/${subfolder}/${image}`, {
        quality?: quality,
        width?: width,
        crop?: crop,
    });
};

const uploadCloudinaryImages = ()