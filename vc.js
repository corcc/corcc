const fs = require('fs');
const { writeJson } = require('./write');
let cases = fs.readFileSync('./case/latest.json');
let vaccinations = fs.readFileSync('./vaccination/latest.json');
cases = JSON.parse(cases);
vaccinations = JSON.parse(vaccinations);
let vc = {};
vc['case'] = cases;
vc['vaccination'] = vaccinations;
writeJson(vc, "./");