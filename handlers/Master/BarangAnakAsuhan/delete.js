import supabaseClient from '../../../utils/supabaseClient.js';
import * as Boom from '@hapi/boom';

const deleteBarangAnakAsuhan = async (request, h) => {
  const barangId = request.params.barangId;

  const deleteBarang = await supabaseClient
    .from('barang_anak_asuhan')
    .delete()
    .eq('id', barangId);

  if (deleteBarang.error) {
    throw Boom.internal(deleteBarang.error);
  }

  return h.response({ message: 'barang berhasil dihapus' }).code(200);
};

export default deleteBarangAnakAsuhan;
