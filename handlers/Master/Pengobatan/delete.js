import supabaseClient from '../../../utils/supabaseClient.js';
import * as Boom from '@hapi/boom';

const deletePengobatan = async (request, h) => {
  const pengobatanId = request.params.pengobatanId;

  const deletePengobatan = await supabaseClient
    .from('pengobatan')
    .delete()
    .eq('id', pengobatanId);

  if (deletePengobatan.error) {
    throw Boom.internal(deletePengobatan.error);
  }

  return h.response({ message: 'barang berhasil dihapus' }).code(200);
};

export default deletePengobatan;
