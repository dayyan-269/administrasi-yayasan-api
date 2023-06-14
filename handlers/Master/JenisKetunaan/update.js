import * as Boom from '@hapi/boom';

import supabaseClient from '../../../utils/supabaseClient.js';

const updateJenisKetunaan = async (request, h) => {
  const { jenisId } = request.params;

  const updatedJenisKetunaan = {
    nama: request.payload.nama,
  };

  const updateJenisKetunaan = await supabaseClient
    .from('jenis_ketunaan')
    .update(updatedJenisKetunaan)
    .eq('id', jenisId);

  if (updateJenisKetunaan.error) {
    throw Boom.internal(updateJenisKetunaan);
  }

  return h
    .response({
      message: 'success',
    })
    .code(201);
};

export default updateJenisKetunaan;
