import Joi from 'joi';

const InventorisSchema = Joi.object({
    barang_anak_id: Joi.number().required(),
    anak_asuhan_id: Joi.number().required(),
    kuantitas: Joi.number().optional(),
    keterangan: Joi.string().optional(),
    tanggal_masuk: Joi.date().optional()
});

export default InventorisSchema;