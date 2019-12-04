const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./task1_3.json', 'utf8'));

for (let key in data) {
    if (Object.keys(data[key]).length > 3) {
        for (let entry in data[key]) {
            for (let row in data[key][entry]) {
                console.log(`keyName = ${row}, value = ${data[key][entry][row]}`);
            }
            console.log("============================================");
        }
    }
}