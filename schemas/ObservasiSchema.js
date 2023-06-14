import Joi from 'joi';

const ObservasiSchema = Joi.object({
    anak_asuhan: Joi.number().required(),
    tanggal: Joi.optional(),
    jenis_perilaku: Joi.string().required(),
    penanganan: Joi.string().required(),
});

export default ObservasiSchema;