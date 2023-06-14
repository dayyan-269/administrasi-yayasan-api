import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const listJenisKetunaan = async (request, h) => {
  const result = await supabaseClient.from('jenis_ketunaan').select();

  if (result.error) {
    throw Boom.internal(result.error);
  }

  return h
    .response({
      message: 'fecth success',
      data: result.data,
    })
    .code(200);
};

export default listJenisKetunaan;
