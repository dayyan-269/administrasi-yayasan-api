import Joi from 'joi';

const PengobatanSchema = Joi.object({
  jenis_penyakit_id: Joi.number().required(),
  kebutuhan_medis_id: Joi.number().required(),
  tanggal_dipesan: Joi.date().required(),
  tanggal_diterima: Joi.optional(),
});

export default PengobatanSchema;
