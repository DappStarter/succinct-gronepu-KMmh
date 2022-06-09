require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remain unusual hunt industry foster twice'; 
let testAccounts = [
"0x79134635eb74833c4f66c86079d28c395251805b08cdf2f09243a81a4779d724",
"0xa1f791511f5d391d8aebdb831c965710f3f4a54d3f66b9c2d77b145926d22c1f",
"0xbde67ba6403d7140cb265a541f688b1aec075dd6c72eddfe24b6add4a69abd49",
"0x79fed6b0a9b8bc1798d11f778c476fc292a65f67b5690b5e2a5ed3d19f4108a9",
"0xb8c1faa54a15523ca0ca478338f42889340568a6a5cf11c6f0e297318eeded7a",
"0x3bef3641fdbd382d1c983da6022a5f7dc61b6d79c025f00d8ed4fadb93357e88",
"0xfd9df664b7b9bf1a491e28f466d7efd3e2a56a62379fb9421e0c22aa6b052722",
"0x8cb7268658d33808a801075753c3e6a29957ceec347dd516ce48dd3029ceebbe",
"0x66581be9ae82669507b2e5b382f0f350d18fc9542634be739b136c9a8e01baa2",
"0xa702159b94a83bff2e2226fae1fb0111333724d02117884800587aa424f2c981"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


