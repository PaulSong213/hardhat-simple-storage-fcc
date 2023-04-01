import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
import "@nomiclabs/hardhat-etherscan";

const SEPOLIA_RPC_URL: string = process.env.SEPOLIA_RPC_URL!;
const SEPOLIA_PRIVATE_KEY: string = process.env.SEPOLIA_PRIVATE_KEY!;
const ETHERSCAN_API_KEY: string = process.env.ETHERSCAN_API_KEY!;

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [SEPOLIA_PRIVATE_KEY],
            chainId: 11155111,
        },
    },
    solidity: "0.8.7",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
};

export default config;
