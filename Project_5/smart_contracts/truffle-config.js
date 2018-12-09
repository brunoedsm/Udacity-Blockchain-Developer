var HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = 'project trick mystery movie ranch garden cry solution silent grape crowd tip';
const infura = 'https://rinkeby.infura.io/v3/d08f4212c069438ba4fa180f6b150762';

module.exports = {
  networks: { 
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: "*"
    }, 
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infura),
      network_id: 4,
      gas : 6700000,
      gasPrice : 10000000000
    },
  }
};
