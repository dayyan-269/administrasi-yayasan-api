import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const findJenisKetunaanByNama = async (request, h) => {
  const { nama } = request.query;

  const result = await supabaseClient
    .from('jenis_ketunaan')
    .select()
    .ilike('nama', `%${nama}%`);

  if (result.error) {
    throw new Boom.internal(result.error);
  }

  return h
    .response({
      message: 'find success',
      data: result.data,
    })
    .code(200);
};

export default findJenisKetunaanByNama;
