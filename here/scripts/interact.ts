import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const GetSwapContract = await ethers.getContractAt("ITokenSwap","0xd65Da948b6E4719Ca6f41AB8836500e565e5C01D");

  await GetSwapContract.addAggregator("BTC","0xA39434A63A52E749F02807ae27335515BA4b07F7");
  await GetSwapContract.addAggregator("CZK","0xAE45DCb3eB59E27f05C170752B218C6174394Df8");
  await GetSwapContract.addAggregator("DAI","0x0d79df66BE487753B02D015Fb622DED7f0E9798d");
  await GetSwapContract.addAggregator("ETH","0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e");
  await GetSwapContract.addAggregator("EUR","0x44390589104C9164407A0E0562a9DBe6C24A0E05");
  await GetSwapContract.addAggregator("FORTH","0x7A65Cf6C2ACE993f09231EC1Ea7363fb29C13f2F");
  await GetSwapContract.addAggregator("GBP","0x73D9c953DaaB1c829D01E1FC0bd92e28ECfB66DB");
  await GetSwapContract.addAggregator("JPY","0x982B232303af1EFfB49939b81AD6866B2E4eeD0B");
  await GetSwapContract.addAggregator("LINK","0x48731cF7e84dc94C5f84577882c14Be11a5B7456");

  await console.log("ALL DONE");
  
//   console.log(await GetSwapContract.getSwapTokenPrice("BTC","ETH",18,2));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
