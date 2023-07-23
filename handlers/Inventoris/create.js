import * as Boom from '@hapi/boom';
import supabaseClient from '../../utils/supabaseClient.js';

const createInventoris = async (request, h) => {
  const {
    barang_anak_asuhan_id,
    anak_asuhan_id,
    kuantitas,
    keterangan,
    tanggal_masuk,
  } = request.payload;

  const data = {
    barang_anak_asuhan_id,
    anak_asuhan_id,
    kuantitas,
    keterangan,
    tanggal_masuk,
  };

  const result = await supabaseClient.from('inventoris').insert(data);

  if (result.error) {
    throw new Boom.badData(result.error.message);
  }

  return h.response({ message: 'new item created' }).code(201);
};

export default createInventoris;
