import Joi from 'joi';

const KebutuhanMedisSchema = Joi.object({
    nama: Joi.string().required(),
});

export default KebutuhanMedisSchema;