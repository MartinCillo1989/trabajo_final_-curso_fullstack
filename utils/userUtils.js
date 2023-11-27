const crypto = require('crypto')
const createHashAndSalt = (password)=>{
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return {
        salt:salt,
        hash:hash
    }
}

const comparePasswords = (password,hash,salt) =>{
    const newHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

    return hash === newHash
}

module.exports = {
    createHashAndSalt:createHashAndSalt,
    comparePasswords:comparePasswords
}
