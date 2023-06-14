import * as Boom from '@hapi/boom';
import supabaseClient from '../../../utils/supabaseClient.js';

const findPegawaiByNama = async (request, h) => {
  const { nama } = request.query;

  const findBarang = await supabaseClient
    .from('pegawai')
    .select()
    .ilike('nama', `%${nama}%`);

  if (findPegawai.error) {
    throw Boom.internal(findBarang.error);
  }

  return h
    .response({
      message: 'find success',
      data: findPegawai.data,
    })
    .code(200);
};

export default findPegawaiByNama;
