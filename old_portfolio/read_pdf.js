const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Sinchana_G_S_Resume_CV.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error) {
    console.error(error);
});
