require("@nomicfoundation/hardhat-toolbox");

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and replace "KEY" with its key

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts

module.exports = {
  solidity: "0.8.18",
  networks: {
    taiko: {
      url: `https://rpc.test.taiko.xyz/`, //https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY
      accounts: ["",]
    }
  },
  etherscan: {
    apiKey: {
        taiko: "42069",
    },
    customChains: [
        {
            network: "taiko",
            chainId: 167005,
            urls: {
                apiURL: "https://explorer.test.taiko.xyz/api",
                browserURL: "https://explorer.test.taiko.xyz",
            },
        },
    ],
},
};
