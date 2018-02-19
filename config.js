var api = 'https://turtle-coin.com/daemon';
var blockTargetInterval = 30;
var coinUnits = 100;
var symbol = 'trtl';
var refreshDelay = 30000;
// pools stats provided by the discord.
var networkStat = {
    "trtl": [
        ["eu.turtlepool.space", "https://api.turtleco.in/eu.turtlepool.space"],
        ["us.turtlepool.space", "https://blocks.turtle.link/pool/us.turtlepool.space"],
        ["hk.turtlepool.space", "https://api.turtleco.in/hk.turtlepool.space"],
        ["turtlecoinpool.ddns.net", "https://api.turtleco.in/turtlecoinpool.ddns.net"],
        ["slowandsteady.fun", "https://api.turtleco.in/slowandsteady.fun"],
        ["trtl.mine2gether.com", "https://trtl.mine2gether.com/api"],
        // RIP ["pool.cowabungadu.de", "https://api.turtleco.in/pool.cowabungadu.de"],
        // RIP ["pool.turtleco.in", "https://pool.turtleco.in/api"],
        ["auspool.turtleco.in", "https://auspool.turtleco.in/api/"],
        ["trtl.radicaldelta.org", "https://api.turtleco.in/trtl.radicaldelta.org"],
        ["turtle.atpool.party", "https://api.turtleco.in/turtle.atpool.party"],
        ["ny.minetrtl.us", "https://api.turtleco.in/ny.minetrtl.us"],
        ["z-pool.com", "https://api.turtleco.in/z-pool.com"],
        ["cryptoknight.cc/turtle", "https://api.turtleco.in/cryptoknight.cc"],
        // RIP ["xk.is", "https://xk.is/api"],
        ["trtl.ninja", "https://trtl.ninja/api"],
        // No block for 8 days, 0h/s ["pool.trtl.me", "https://blocks.turtle.link/pool/pool.trtl.me"],
        ['trtl.flashpool.club', "https://api.trtl.flashpool.club"],
        // RIP ["turtle.spacepools.org", "https://turtle.spacepools.org/api/"],
        ["etnchina.io/trtl", "https://turtle-coin.com/api/etnchina.io"],
        // No block for 8 days, 0h/s ["trtl.fetch.cash", "https://trtl.fetch.cash:16119"],
        ["trtlpool.ninja", "https://turtle-coin.com/api/trtlpool.ninja"],
        ["turtlecoinpool.ml", "https://turtlecoinpool.ml:8443"],
        ["turtle.mining.garden", "https://turtle.mining.garden:8117"],
        
    ]
};

var networkStat2 = {
    "trtl": [
		["sewer.ninja","https://api.sewer.ninja"]
		]
};