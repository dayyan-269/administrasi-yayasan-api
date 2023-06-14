import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const listKebutuhanMedis = async (request, h) => {
  const result = await supabaseClient.from('kebutuhan_medis').select();

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

export default listKebutuhanMedis;
