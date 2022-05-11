require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace hero fortune skull trap birth range purchase install clog swallow spot'; 
let testAccounts = [
"0x9620761049eeabe498ee408b4dbcb3a36a50fbd12d13aae4760bbb6411d8971c",
"0xd9acb1fb8d84ac2f8d15c00ebbd366d59085494977844d050d6a8a7e865f8e47",
"0xec469062bbc33c1f42f869bddff2b9797df55794238ad1a0f84bdb5ea771726f",
"0x45c0a9ba9bd361a44db53cd692c3177217823e65b5d3637984054804b552a672",
"0x4f722ae17ecf058263b8fc4e7f9f6922db3e1d38d7f7f4105e7542ac7a547950",
"0x4e81d6016663f6388e4989f1d4b49fb3ca9198c65eac5c99bc35ede6da6e27a6",
"0xdab0a76a09f81563799b94f2c49960ef6bf783758795cf6191ccc05b77dc5340",
"0x055710099fbdbdc048b0fc4ae1ea2a88b5d01d62fbd519bc56b7ff73532d00fc",
"0xc1f754dce84b2a12c14910d2e60959cfc4a5af684532d548499089c0a817d04b",
"0xa020586d6f4872ad894205023b2205e17e13cfc054705153bb87273cd795b6e6"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


