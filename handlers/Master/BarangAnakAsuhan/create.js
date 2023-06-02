import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const createBarangAnakAsuhan = async (request, h) => {
  const data = {
    nama: request.payload.nama,
    deskripsi: request.payload?.deskripsi,
  };

  const result = await supabaseClient.from('barang_anak_asuhan').insert(data);

  if (result.error) {
    throw Boom.badData(result.error);
  }

  return h.response({message: 'new item created'}).code(201);
}

export default createBarangAnakAsuhan;