import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const findBarangAnakAsuhan = async (request, h) => {
  const barangId = request.params.barangId;

  const findBarang = await supabaseClient
    .from('barang_anak_asuhan')
    .select()
    .eq('id', barangId);

  if (findBarang.error) {
    throw Boom.internal(findBarang.error)
  }

  return h.response({
    message: "find success",
    data: findBarang.data 
  }).code(200);
}

export default findBarangAnakAsuhan;