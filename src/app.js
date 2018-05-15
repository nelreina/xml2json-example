const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const p2 = require('xml2json');
const readFile = promisify(fs.readFile);
const xmlFile = path.resolve(__dirname, '../data/gib-accounts.xml');
// const xmlFile = path.resolve(__dirname, '../data/wrong.xml');



(async () => {
    const bf = await readFile(xmlFile);
    const xml = bf.toString();
    const json = await p2.toJson(xml)
    console.info(JSON.stringify(JSON.parse(json), null, 2))

})();