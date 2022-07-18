const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Token = await hre.ethers.getContractFactory("AQEX");
  const token = await Token.deploy("Aquarius Token", "AQEX");

  await token.deployed();
  console.log("Aquarius Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
