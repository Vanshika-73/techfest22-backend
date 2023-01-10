const wbm = require('wbm');
wbm.start().then(async () => {
    const phones = ['7888617177'];
    console.log(phones);
    const message = 'Good afternoon ';
    console.log(message);
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));