import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const listPegawai = async (request, h) => {
  const result = await supabaseClient.from('pegawai').select();

  if (result.error) {
    throw Boom.internal(result.error);
  }

  return h
    .response({
      message: 'fetch success',
      data: result.data,
    })
    .code(200);
};

export default listPegawai;
