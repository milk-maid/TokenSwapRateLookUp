import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const GetSwapContract = await ethers.getContractAt("ITokenSwap","0xd65Da948b6E4719Ca6f41AB8836500e565e5C01D");

  console.log(`BTC:ETH ${await GetSwapContract.getSwapTokenPrice("BTC","ETH",18,2)}`);
  console.log(`DAI:GBP ${await GetSwapContract.getSwapTokenPrice("DAI","GBP",8,500)}`);
  console.log(`FORTH:LINK ${await GetSwapContract.getSwapTokenPrice("FORTH","LINK",8,200)}`);
  console.log(`CZK:BTC ${await GetSwapContract.getSwapTokenPrice("CZK","BTC",8,1000)}`);
  console.log(`JPY:EUR ${await GetSwapContract.getSwapTokenPrice("JPY","EUR",8,75)}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
