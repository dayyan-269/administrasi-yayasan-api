import * as Boom from '@hapi/boom';
import supabaseClient from '../../utils/supabaseClient.js';

const findObservasiByNama = async (request, h) => {
  const { observasiId } = request.query;

  const findObservasi = await supabaseClient
    .from('anak_asuhan_id')
    .select()
    .ilike('nama', `%${nama}%`);

  if (findObservasi.error) {
    return Boom.internal(findObservasi.error.message);
  }

  return h
    .response({
      message: 'find success',
      data: findObservasi.data,
    })
    .code(200);
};

export default findObservasiByNama;
