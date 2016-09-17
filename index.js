/* eslint no-console: 0 */

'use strict';

var nodemailer = require('nodemailer');

// Create a SMTP transporter object
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'YOUR-EMAIL@gmail.com',
        pass: 'YOUR-PASSWORD'
    },
    logger: true, // log to console
    debug: true // include SMTP traffic in the logs
}, {
    // default message fields

    // sender info
    from: 'Sua Empresa <contato@suaempresa.com>',
    headers: {
        'X-Laziness-level': 1000 // just an example header, no need to use this
    }
});

console.log('SMTP Configured');

var to = "fillipe.dornelas@hotmail.com";
// Message object
var message = {

    // Comma separated list of recipients
    to: '"Fillipe" <fillipe.dornelas@hotmail.com>',

    // Subject of the message
    subject: 'Contato do site da sua empresa', //

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html: '<p><b>Olá</b> fique por dentro do que a SuaEmpresa está fazendo</p>',

    // Apple Watch specific HTML body
    watchHtml: '<b>Olá</b> '+to
};

console.log('Sending Mail');
transporter.sendMail(message, function (error, info) {
    if (error) {
        console.log('Error occurred');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
});
