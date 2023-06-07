import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const findKebutuhanMedisByNama = async (request, h) => {
  const { nama } = request.query;

  const findKebutuhan = await supabaseClient
    .from('Kebutuhan_medis')
    .select()
    .ilike('nama', `%${nama}`);

  if (findKebutuhan.error) {
    throw new Boom.internal(findKebutuhan.error);
  }

  return h
    .response({
      message: 'find success',
      data: findKebutuhan.data,
    })
    .code(200);
};

export default findKebutuhanMedisByNama;
