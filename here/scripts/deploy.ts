import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const GetSwapContract = await ethers.getContractFactory("PriceConverter");
  const getSwapContract = await GetSwapContract.deploy();
  await getSwapContract.deployed()

  console.log(getSwapContract.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
