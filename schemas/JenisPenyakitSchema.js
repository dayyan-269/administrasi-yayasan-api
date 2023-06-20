import Joi from 'joi';

const JenisPenyakitSchema = Joi.object({
    nama: Joi.string().required()
});

export default JenisPenyakitSchema;