import supabaseClient from '../../../utils/supabaseClient.js';
import * as Boom from '@hapi/boom';

const deleteTipePembayaran = async (request, h) => {
  const pembayaranId = request.params.pembayaranId;

  const tipePembayaran = await supabaseClient
    .from('tipe_pembayaran')
    .delete()
    .eq('id', pembayaranId);

  if (tipePembayaran.error) {
    throw new Boom.internal(tipePembayaran.error);
  }

  return h.response({ message: 'item berhasil dihapus' }).code(200);
};

export default deleteTipePembayaran;
