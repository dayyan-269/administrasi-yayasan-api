const getJWTFormat = (iss = 'test1') => {
  return {
    aud: 'urn.audience:test',
    iss: `urn.issuer:${iss}`,
    sub: false,
    maxAgeSec: 14400,
    timeSkewSec: 10,
  };
};

export default getJWTFormat;
