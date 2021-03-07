import Joi from 'joi';

const validateBody = (schema) => {
    return (req, res, next) => {
        const validatorResult = schema.validate(req.body);

        if (validatorResult.error) {
            return res.status(400).json(validatorResult.error);
        } else {
            next();
        }
    };
};

const schemas = {
    SignUpSchema: Joi.object().keys({
        firstName: Joi.string().alphanum().min(3).max(30).required(),

        lastName: Joi.string().alphanum().min(3).max(30).required(),

        email: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: { allow: ['com', 'net'] },
            })
            .required(),

        password: Joi.string()
            .pattern(
                new RegExp(
                    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
                )
            )
            .required(),
    }),
};

export { validateBody, schemas };
