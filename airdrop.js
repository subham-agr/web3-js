// import { clusterApiUrl, Connection } from "@solana/web3.js";
const solanaWeb3 = require("@solana/web3.js");
// const { generateKeyPair } = require('crypto');
const a = async () => {
  const connection = new solanaWeb3.Connection(
    solanaWeb3.clusterApiUrl("devnet"),
    "confirmed"
  );

  let keypair = solanaWeb3.Keypair.generate();

  let tokenAmount = await connection.getBalance(keypair.publicKey);
  console.log(`amount: ${tokenAmount}`);
  // console.log(`decimals: ${tokenAmount.value.decimals}`);

  // console.log(keypair.publicKey);
  // console.log(keypair.secretKey);
  const airdropSignature = await connection.requestAirdrop(
    keypair.publicKey,
    2 * solanaWeb3.LAMPORTS_PER_SOL
  );

  await connection.confirmTransaction(airdropSignature);

  tokenAmount = await connection.getBalance(keypair.publicKey);
  console.log(`amount: ${tokenAmount}`);
};

a();
