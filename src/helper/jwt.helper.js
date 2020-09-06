import jwt from 'jsonwebtoken';

/**
 *
 * @param {*} user
 * @param {*} secretSignature
 * @param {*} tokenLife
 */
const generateToken = (user, secretSignature, tokenLife) => {
    return new Promise((resolve, reject) => {
        const userToken = {
            _id: user._id,
            email: user.email,
            phone: user.phone,
            first_name: user.first_name,
            last_name: user.last_name,
        };

        jwt.sign(
            { data: userToken },
            secretSignature,
            {
                algorithm: 'HS256',
                expiresIn: tokenLife,
            },
            (error, token) => {
                if (error) {
                    return reject(error);
                }
                resolve(token);
            }
        );
    });
};

/**
 *
 * @param {*} token
 * @param {*} secretSignature
 */
const verifyToken = (token, secretSignature) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretSignature, (error, deconded) => {
            if (error) {
                reject(error);
            }

            resolve(deconded);
        });
    });
};

module.exports = { generateToken, verifyToken };
