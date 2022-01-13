const { ethers } = require('hardhat');

async function main() {
  for (let i = 0; i < Number.MAX_VALUE; i++) {
    const randomWallet = ethers.Wallet.createRandom();
    console.log(i, randomWallet.privateKey, randomWallet.address);
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
