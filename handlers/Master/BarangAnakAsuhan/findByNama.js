import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const findBarangAnakAsuhanByNama = async (request, h) => {
  const { nama } = request.query;

  const findBarang = await supabaseClient
    .from('barang_anak_asuhan')
    .select()
    .ilike('nama', `%${nama}%`);

  if (findBarang.error) {
    throw new Boom.internal(findBarang.error);
  }

  return h
    .response({
      message: 'find success',
      data: findBarang.data,
    })
    .code(200);
};

export default findBarangAnakAsuhanByNama;
