const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.fm/u/pz4ws8d4px",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello,I am SANIJA-MD_V2. I am Alive Now!✅   🔰My youtube channel :-https://youtube.com/@futuretechwithsanija?si=5nlmeymqJOXU1599  ",
};
