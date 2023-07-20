import Joi from 'joi';

const AnakAsuhanSchema = Joi.object({
  nama: Joi.string().required(),
  tempat_lahir: Joi.string().optional(),
  tanggal_lahir: Joi.date().optional(),
  asal: Joi.string().required(),
  tanggal_masuk: Joi.date().required(),
  tanggal_keluar: Joi.date().optional(),
  tipe_pembayaran_id: Joi.number().required(),
  jenis_ketunaan: Joi.number().required(),
  tinggi_badan: Joi.number().required(),
  berat_badan: Joi.number().required(),
});

export default AnakAsuhanSchema;
