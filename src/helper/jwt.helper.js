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
            user: user,
        };

        const { password, ...newData } = userToken.user;

        jwt.sign(
            {
                data: newData,
                exp: new Date().getTime(),
                iat: tokenLife,
            },
            secretSignature,
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
        jwt.verify(token, secretSignature, (error, decoded) => {
            if (error) {
                reject(error);
            }

            resolve(decoded);
        });
    });
};

export { generateToken, verifyToken };
