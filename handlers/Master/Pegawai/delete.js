import supabaseClient from '../../../utils/supabaseClient.js';
import * as Boom from '@hapi/boom';

const deletePegawai = async (request, h) => {
  const pegawaiId = request.params.pegawaiId;

  const deletePegawai = await supabaseClient
    .from('pegawai')
    .delete()
    .eq('id', pegawaiId);

  if (deletePegawai.error) {
    throw Boom.internal(deletePegawai.error);
  }

  return h.response({ message: 'barang berhasil dihapus' }).code(200);
};

export default deletePegawai;
