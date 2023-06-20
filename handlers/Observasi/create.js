import * as Boom from '@hapi/boom';

import supabaseClient from '../../utils/supabaseClient.js';

const createObservasi = async (request, h) => {
  const data = {
    anak_asuhan_id: request.payload.anak_asuhan,
    tanggal: request.payload.tanggal,
    jenis_perilaku: request.payload.jenis_perilaku,
    penanganan: request.payload.penanganan,  
  };

  const result = await supabaseClient.from('observasi').insert(data);

  if (result.error) {
    throw Boom.badData(result.error.message);
  }

  return h.response({message: 'new item created'}).code(201);
}

export default createObservasi;