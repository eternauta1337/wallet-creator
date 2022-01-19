task('create-wallet', 'Create random wallets')
  .setAction(function (_, { ethers }) {
    for (let i = 0; i < Number.MAX_VALUE; i++) {
      const randomWallet = ethers.Wallet.createRandom();
      console.log(i, randomWallet.privateKey, randomWallet.address);
    }
  })
