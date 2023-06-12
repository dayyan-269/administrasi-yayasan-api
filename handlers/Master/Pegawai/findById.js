import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const findPegawaiById = async (request, h) => {
  const pegawaiId = request.params.pegawaiId;

  const findPegawai = await supabaseClient
    .from('pegawai')
    .select()
    .eq('id', pegawaiId)
    .limit(1)
    .single();

  if (findPegawai.error) {
    throw Boom.internal(findPegawai.error);
  }

  return h
    .response({
      message: 'find success',
      data: findPegawai.data,
    })
    .code(200);
};

export default findPegawaiById;
