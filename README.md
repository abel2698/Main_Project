<h1 align="center">
  <br>
  
  <br>  
  Smart Invest Using Blockchain
  <br>
</h1>

<p align="center">
  
  <a href="https://github.com/trufflesuite/ganache-cli">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/ganachetrans.png" width="90">
  </a>
  <a href="https://soliditylang.org/">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/Solidity.svg" width="80">       
  </a>
  <a href="https://reactjs.org/"><img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/react.png" width="80"></a>
  
  <a href="https://www.trufflesuite.com/">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/trufflenew.png" width="50">
  </a>
   &nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/web3">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/web3.jpg" width="60">
  </a>
  
  <a href="https://material-ui.com/">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/mat.png" width="60">       
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://expressjs.com/"><img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/express.svg" width="50"></a>
  &nbsp;&nbsp;
  <a href="https://www.nginx.com/">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/nginx.png" width="80">
  </a>
</p>

<h4 align="center">A simple Supply Chain setup with <a href="https://docs.soliditylang.org/en/v0.8.4/" target="_blank">Solidity</a>.</h4>


## Description
Supply chain is always hard to manage and requires a lot of admistrative machinery. However, when managed with smart contracts using blockchain, a lot of the paperwork is reduced.
Also it leads to an increase in the transparency and helps to build an efficient Root of Trust. Supply-chain-dapp is such an implementation of a supply chain management system which uses blockchain to ensure a transparent and secure transfer of product from the manufacturer to the customer via the online e-commerce websites. 
## Architecture
The smart contract is being written with Solidity which is then compiled, migrated and deployed using Truffle.js on the local blockchain network created using Ganache-cli.The frontend uses Web3.js to communicate with the smart contract and local blockchain network and is written using React.js framework for better component and state lifecycle management.The requests from user are forwarded to frontend through Nginx(load balancer) and Express.js for dynamic routing.



## Installation and Setup
Prerequisites : `npm, git`

Install dependencies
```Bash
npm i
```
Install node modules
```Bash
npm i 
```
Migrate the contracts
```Bash
truffle migrate 
```Bash
cd client
```
Install node modules
```Bash
npm i 
```
Run the app
```Bash
npm start
```
The app gets hosted by default at port 3000.

