const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Portfolio/SADIK INFRA Portfolio.pdf');

// try accessing default or just call it if it is a function
const parse = typeof pdf === 'function' ? pdf : (pdf.default || Object.values(pdf)[0]);

parse(dataBuffer).then(function (data) {
    fs.writeFileSync('parsed_pdf.txt', data.text);
    console.log("SUCCESS");
}).catch(console.error);
