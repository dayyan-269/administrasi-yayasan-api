import Joi from 'joi';

const InventorisSchema = Joi.object({
  barang_anak_asuhan_id: Joi.number().required(),
  anak_asuhan_id: Joi.number().required(),
  kuantitas: Joi.optional(),
  keterangan: Joi.optional(),
  tanggal_masuk: Joi.optional(),
});

export default InventorisSchema;
