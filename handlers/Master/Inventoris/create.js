import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient';

const createInventoris = async (request, h) => {
  const data = {
    nama: request.payload.nama,
    deskripsi: request.payload?.deskripsi,
  };

  const result = await supabaseClient.from('inventoris').insert(data);

  if (result.error) {
    throw Boom.badData(result.error);
  }

  return h.response({ message: 'new item created' }.code(201));
};

export default createInventoris;
