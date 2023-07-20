import Joi from 'joi';

const AnakAsuhanSchema = Joi.object({
  nama: Joi.string().required(),
  tempat_lahir: Joi.string().optional(),
  tanggal_lahir: Joi.optional(),
  asal: Joi.string().required(),
  tanggal_masuk: Joi.required(),
  tanggal_keluar: Joi.optional(),
  tipe_pembayaran_id: Joi.number().required(),
  jenis_ketunaan_id: Joi.number().required(),
  tinggi_badan: Joi.number().required(),
  berat_badan: Joi.number().required(),
});

export default AnakAsuhanSchema;
