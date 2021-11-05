module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    development: {
      host: "127.0.0.1",
     port: 8545,
     network_id: "*",
     mnemonic: ""
   },
   ropsten: {
      network_id: "3",
      host: "https://mainnet.infura.io/v3/dd3960c95b9046d796f033ac2ff157be",
      provider: () =>
      new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"),
   },
   test: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*"
   }
  },
 
    solc: {
      version: "^0.5.0"

    }
};
