import Joi from 'joi';

const PengobatanSchema = Joi.object({
    jenis_penyakit: Joi.number().required(),
    kebutuhan_medis_id: Joi.number().required(),
    tanggal_dipesan: Joi.date().required(),
    tanggal_diterima: Joi.date().optional(),
});

export default PengobatanSchema;