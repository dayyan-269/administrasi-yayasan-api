import supabaseClient from '../../../utils/supabaseClient.js';
import * as Boom from '@hapi/boom';

const deleteKebutuhanMedis = async (request, h) => {
  const kebutuhanId = request.params.kebutuhanId;

  const deleteKebutuhan = await supabaseClient
    .from('kebutuhan_medis')
    .delete()
    .eq('id', kebutuhanId);

  if (deleteKebutuhan.error) {
    throw new Boom.internal(deleteKebutuhan.error);
  }

  return h.response({ message: 'barang berhasil dihapus' }).code(200);
};

export default deleteKebutuhanMedis;
