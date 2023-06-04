import * as Boom from '@hapi/boom';

import supabaseClient from '../utils/supabaseClient.js';

const validateBarangAnakAsuhanId = async (request, h) => {
  const { barangId } = request.params;

  const validateBarangId = await supabaseClient
    .from('barang_anak_asuhan')
    .select('*', { count: 'exact', head: true })
    .eq('id', barangId);

  if (validateBarangId.error) {
    return Boom.internal(validateBarangId.error);
  }

  if (validateBarangId.count === 0) {
    return Boom.notFound('barang anak asuhan tidak ditemukan');
  }

  return h.continue;
};

export default validateBarangAnakAsuhanId;
