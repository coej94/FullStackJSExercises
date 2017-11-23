const crypto = require('crypto');
//Called first
console.log('before');
//promise started
crypto.randomBytes(64, /*the callback is called last*/function(err, buffer){
    if(err){
        throw new Error("fksjej");
    }
    let secureHex = buffer.toString('hex');
    console.log(secureHex);
})
//prints this as second thing.
console.log('after');

crypto.then().catch();

console.log('before');
console.log(secureHex);
console.log('after');
