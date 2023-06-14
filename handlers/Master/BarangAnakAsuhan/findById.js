import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const findBarangAnakAsuhanById = async (request, h) => {
  const barangId = request.params.barangId;

  const findBarang = await supabaseClient
    .from('barang_anak_asuhan')
    .select()
    .eq('id', barangId)
    .limit(1)
    .single();

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

export default findBarangAnakAsuhanById;
