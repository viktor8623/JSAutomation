const MAX_VALUE = 10;

for (let i = 0; i < 10; i++) {
    let generatedNumbers = [];
    while(generatedNumbers.length < MAX_VALUE) {
        let number = Math.floor(Math.random() * MAX_VALUE) + 1;
        if(!generatedNumbers.includes(number)) {
            generatedNumbers.push(number);
            console.log(number);
        }
    }
    console.log("");
}