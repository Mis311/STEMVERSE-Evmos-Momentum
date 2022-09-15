# Stemverse

<!-- This is one of the projects made for the hackathons about creating  -->

## Getting Started

### Requirements

Before running this project, make sure you have the following things to get started.

- A System
- An Internet Connection
- [IDE](https://www.google.com/search?q=IDE+Examples&ei=YRVaYp65ObyM9u8P4tOpyAI&ved=0ahUKEwje7ZaGsZf3AhU8hv0HHeJpCikQ4dUDCA4&uact=5&oq=IDE+Examples&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAELADEEMyBwgAELADEENKBAhBGABKBAhGGABQfFh8YKYDaAFwAXgAgAEAiAEAkgEAmAEAoAEByAEKwAEB&sclient=gws-wiz) for Editing the Code
- [Node JS](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads) (Optional)
- [Meta Mask](https://metamask.io/download/)

### Git Clone

Before starting the project, you need to either download or clone this project. To clone the project using [Git](https://git-scm.com/downloads), perform the following command in the bash terminal or in any other CLI.

```bash
git clone https://github.com/Mis311/STEMVERSE-Evmos-Momentum.git
```

### Changing Directory

After cloning and downloading the project, you need to move towards the Stemverse Evmos Project folder which contains the actual marketplace files. To do so, use the following command:

```bash
cd ./STEMVERSE-Evmos-Momentum/
```

### Installing Packages

Now you need to install the depedenecies for the project using the terminal.

```bash
# Step 1
npm install

# Step 2
cd smart_contracts
npm install

########
## or ##
########

# Step 1
yarn

# Step 2
cd smart_contracts
yarn


```

## Configuration

### Ganache Lookup

### Metamask Configuration

### Running Development Server

Once the dependencies are installed, you can run the development server using the command:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the results!

## Features

Here are some of the features of this NFT Marketplace:

- Mint NFTs
- - Make sure you are on a test environemnt like Ganache or it will cost you actual amount 😅
- Buy NFTs

## Upcoming Features

This a list of upcoming features that will be arriving soon.

## Dependencies

It uses the following dependencies to make the NFT Marketplace work:

- chai@^4.2.0
- ethers@^5.4.7
- hardhat@^2.11.1
- @nomiclabs (Below Only)
- - @nomiclabs/hardhat-waffle
- - @nomiclabs/hardhat-ethers
- web3
- @metamask/detect-provider
- react
- ethereum-waffle
- web3modal
- @openzeppelin/contracts
- ipfs-http-client
- axios

### More Dependencies

- @nomicfoundation (Below Only)
- - @nomicfoundation/hardhat-toolbox@^2.0.0
- - @nomicfoundation/hardhat-network-helpers@^1.0.0
- - @nomicfoundation/hardhat-chai-matchers@^1.0.0
- - @nomiclabs/hardhat-ethers@^2.0.0
- - @nomiclabs/hardhat-etherscan@^3.0.0

- hardhat-gas-reporter@^1.0.8
- solidity-coverage@^0.8.0
- @typechain/hardhat@^6.1.2
- typechain@^8.1.0
- @typechain/ethers-v5@^10.1.0
- @ethersproject/abi@^5.4.7
- @ethersproject/providers@^5.4.7

<!--
hardhat
@nomiclabs/hardhat-waffle
ethereum-waffle
chai
@nomiclabs/hardhat-ethers
ethers

hardhat@^2.11.1
@nomicfoundation/hardhat-toolbox@^2.0.0
@nomicfoundation/hardhat-network-helpers@^1.0.0
@nomicfoundation/hardhat-chai-matchers@^1.0.0
@nomiclabs/hardhat-ethers@^2.0.0
@nomiclabs/hardhat-etherscan@^3.0.0
chai@^4.2.0
ethers@^5.4.7
hardhat-gas-reporter@^1.0.8
solidity-coverage@^0.8.0
@typechain/hardhat@^6.1.2
typechain@^8.1.0
@typechain/ethers-v5@^10.1.0
@ethersproject/abi@^5.4.7
@ethersproject/providers@^5.4.7
-->
