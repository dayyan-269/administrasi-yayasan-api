import * as Boom from '@hapi/boom';
import supabaseClient from '../../utils/supabaseClient.js';

const createPengobatan = async (request, h) => {
  const {
    jenis_penyakit_id,
    kebutuhan_medis_id,
    tanggal_dipesan,
    tanggal_diterima,
  } = request.payload;

  const data = {
    jenis_penyakit_id,
    kebutuhan_medis_id,
    tanggal_dipesan,
    tanggal_diterima,
  };

  const result = await supabaseClient.from('pengobatan').insert(data);

  if (result.error) {
    throw Boom.badData(result.error.message);
  }

  return h.response({ message: 'new item created' }).code(201);
};

export default createPengobatan;
