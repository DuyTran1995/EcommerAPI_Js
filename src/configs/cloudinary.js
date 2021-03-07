import cloudinary from 'cloudinary/lib/v2';

const cloudinaryConfig = (cloudinary_name, api_key, api_secret) => {
    cloudinary.config({
        cloud_name: cloudinary_name,
        api_key: api_key,
        api_secret: api_secret,
    });
};

export default cloudinaryConfig;
