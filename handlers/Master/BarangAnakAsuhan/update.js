import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const updateBarangAnakAsuhan = async (request, h) => {
  const barangId = request.params.barangId;

  const updatedBarang = {
    nama: request.payload.nama,
    deskripsi: request.payload?.deskripsi,
  };

  const updateBarang = await supabaseClient
    .from('barang_anak_asuhan')
    .update(updatedBarang)
    .eq('id', barangId);

  if (updateBarang.error) {
    throw Boom.internal(updateBarang);
  }

  return h
    .response({
      message: 'update success',
      data: updateBarang.data,
    })
    .code(201);
};

export default updateBarangAnakAsuhan;
