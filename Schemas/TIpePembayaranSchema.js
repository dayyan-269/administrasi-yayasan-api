import Joi from 'joi';

const TipePembayaranSchema = Joi.object({
    nama: Joi.string().required(),
});

export default TipePembayaranSchema;