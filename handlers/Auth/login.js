import supabaseClient from '../../utils/supabaseClient.js';
import generateJWT from '../../utils/generateJWT.js'

const login = async (request, h) => {
    const credential = {
        email: request.payload.email,
        password: request.payload.password,
    };

    const loginUser = await supabaseClient.auth.signInWithPassword(credential);

    if (loginUser.error) {
        return h.response(loginUser.error).code(500);
    }

    const jwt = generateJWT();

    return h.response({
        message: 'login success',
        jwt
    }).code(201);
}

export default login;