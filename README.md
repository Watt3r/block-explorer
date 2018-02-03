# TurtleCoin-Blockchain-Explorer
Block explorer for TurtleCoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon turtlecoind. It should be accessible from the Internet. Run turtlecoind with open port as follows:
```bash
./turtlecoind --restricted-rpc --enable-cors=* --enable_blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.


### Development
Devs:
    @devopsralf
    @watt3r

Donate [TRTL] to @devopsralf TRTLv2RCPuD7AaaVpQkRPF59MMLx5WW3qFxwJz4Doy7dHhNA6UuQjEpLL3rpUQS4RXdQn8fb4P1XC3K62GeJjGgG8DP9LNaTrNL
Donate [TRTL] to @watt3r TRTLuxXuMJYPAWwbqUpBPkjWA79hLdb6G5CF4fjqhdgP8ufhbLcFWNRPJiwtdZ5QcDgukvXT8yVxXSoXrehdwnRTZwDLQCMVoNf 


### Note

Alot of this code is from the great Karbovanets/Karbowanec-Blockchain-Explorer