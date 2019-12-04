const moment = require('moment');
const tz = require('moment-timezone');

function getCurrentTime() {
    let timeStamp = "YYYY-MM-DD HH:mm";
    let londonTime = moment.tz("Europe/London").format(timeStamp);
    let losAngelesTime = moment.tz("America/Los_Angeles").format(timeStamp);
    let tokyoTime = moment.tz("Asia/Tokyo").format(timeStamp);

    console.log(`Time in London is ${londonTime}`);
    console.log(`Time in Los Angeles is ${losAngelesTime}`);
    console.log(`Time in Tokyo is ${tokyoTime}`);
}

getCurrentTime();