import Joi from 'joi';

const PegawaiSchema = Joi.object({
    nama: Joi.string().required(),
    tempat_lahir: Joi.string().required(),
    tanggal_lahir: Joi.date().optional(),
    agama: Joi.string().required(),
    kewarganegaraan: Joi.string().required(),
    tanggal_masuk: Joi.date().required(),
    tanggal_keluar: Joi.date().required(),
});

export default PegawaiSchema;