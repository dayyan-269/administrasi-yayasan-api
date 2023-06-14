import Joi from 'joi';

const JenisKetunaanSchema = Joi.object({
    nama: Joi.string().required()
});

export default JenisKetunaanSchema;