import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const findPengobatanByNama = async (request, h) => {
  const { nama } = request.query;

  const findPengobatan = await supabaseClient
    .from('pengobatan')
    .select('*, kebutuhan_medis!inner(nama)')
    .ilike('kebutuhan_medis.nama', `%${nama}%`);

  if (findPengobatan.error) {
    throw Boom.internal(findPengobatan.error.message);
  }

  return h
    .response({
      message: 'find success',
      data: findPengobatan.data,
    })
    .code(200);
};

export default findPengobatanByNama;
