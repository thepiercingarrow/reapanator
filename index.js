var USER = process.env.REAPER_USER;
var PASS = process.env.REAPER_PASS;
var GAME_ID = process.env.REAPER_ID;
var DEBUG = process.env.DEBUG;

var Nightmare = require('nightmare');

var options = {};

if (DEBUG) {
    options.show = true;
}

if (!USER || !PASS || !GAME_ID) {
    console.log("Please specify a username, password, and game number (REAPER_USER, REAPER_PASS, REAPER_ID");
    process.exit(1);
}

var bot = new Nightmare(options)
    .goto('http://artofproblemsolving.com/')
    .click('#header-login')
    .type('#login-username', USER)
    .type('#login-password', PASS)
    .click('#login-button')
    .wait('.username')
    .goto('http://artofproblemsolving.com/reaper/reaper.php?id=' + GAME_ID)
    .then();

while (1) {
    bot.wait('#reap-button')
	.then();
    
}
