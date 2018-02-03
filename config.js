var api = 'http://127.0.0.1:11898';
var blockTargetInterval = 30;
var coinUnits = 100;
var symbol = 'trtl';
var refreshDelay = 30000;
// pools stats provided by the discord. Join at https://discord.gg/8eR3PBF
var networkStat = {
    "trtl": [
        ["eu.turtlepool.space", "https://api.turtleco.in/eu.turtlepool.space"],
        ["us.turtlepool.space", "https://api.turtleco.in/us.turtlepool.space"],
        ["hk.turtlepool.space", "https://api.turtleco.in/hk.turtlepool.space"],
        ["turtlecoinpool.ddns.net", "https://api.turtleco.in/turtlecoinpool.ddns.net"],
        ["slowandsteady.fun", "https://api.turtleco.in/slowandsteady.fun"],
        ["trtl.mine2gether.com", "https://trtl.mine2gether.com/api"],
        // RIP ["pool.cowabungadu.de", "https://api.turtleco.in/pool.cowabungadu.de"],
        ["pool.turtleco.in", "https://pool.turtleco.in/api"],
        ["auspool.turtleco.in", "https://auspool.turtleco.in/api/"],
        ["trtl.radicaldelta.org", "https://api.turtleco.in/trtl.radicaldelta.org"],
        ["turtle.atpool.party", "https://api.turtleco.in/turtle.atpool.party"],
        ["ny.minetrtl.us", "https://api.turtleco.in/ny.minetrtl.us"],
        ["z-pool.com", "https://api.turtleco.in/z-pool.com"],
        ["cryptoknight.cc/turtle", "https://api.turtleco.in/cryptoknight.cc"],
        ["xk.is", "https://xk.is/api"],
        ["trtl.ninja", "https://trtl.ninja/api"]
    ]
};

var networkStat2 = {
    "trtl": [
		[""]
		]
};