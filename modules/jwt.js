import JWT from 'jsonwebtoken';

function sign(payload, secret, options) {
    return JWT.sign(payload, secret, options);
}


// JWT.io