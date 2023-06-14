import Joi from 'joi';

const BarangAnakAsuhanSchema = Joi.object({
  nama: Joi.string().required(),
  deskripsi: Joi.optional(),
});

export default BarangAnakAsuhanSchema;