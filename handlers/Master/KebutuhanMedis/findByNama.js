import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const findKebutuhanMedisByNama = async (request, h) => {
  const { nama } = request.query;

  const findKebutuhan = await supabaseClient
    .from('kebutuhan_medis')
    .select()
    .ilike('nama', `%${nama}%`);

  if (findKebutuhan.error) {
    return Boom.internal(findKebutuhan.error.message);
  }

  return h
    .response({
      message: 'find success',
      data: findKebutuhan.data,
    })
    .code(200);
};

export default findKebutuhanMedisByNama;
