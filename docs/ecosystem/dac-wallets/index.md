# DAC Wallets

## What is a Blockchain Wallet? <a href="#what-is-a-blockchain-wallet" id="what-is-a-blockchain-wallet"></a>

A blockchain wallet is a digital tool that allows users to store and manage their interaction with a blockchain network. Unlike a physical wallet, it does not actually store funds. Instead, it stores the **cryptographic keys** required to access and control your assets on the blockchain.

### Core Concepts <a href="#core-concepts" id="core-concepts"></a>

#### 1. Public Key & Address <a href="#id-1-public-key--address" id="id-1-public-key--address"></a>

* **Public Key**: Think of this as your bank account number. It is derived from your private key and can be shared with anyone.
* **Address**: A shortened version of your public key (e.g., starting with `0x...` on DAC Chain). This is the destination you give to others to receive DACC coins.

#### 2. Private Key <a href="#id-2-private-key" id="id-2-private-key"></a>

* **Private Key**: Think of this as your PIN or password. It signs transactions proving you own the funds.
* **Critical**: **NEVER share your private key.** Anyone with access to your private key can steal your funds. If you lose it, you lose access to your funds permanently.

#### 3. Keystore File <a href="#id-3-keystore-file" id="id-3-keystore-file"></a>

In the context of the **DAC Node**, a Keystore file is an encrypted version of your private key protected by a password you define. It allows you to store your key more safely on your computer.

#### Custodial vs. Non-Custodial <a href="#custodial-vs-non-custodial" id="custodial-vs-non-custodial"></a>

* **Non-Custodial (Recommended)**: You control the private keys (e.g., DAC CLI Wallet, MetaMask). You are your own bank.
* **Custodial**: A third party controls the keys (e.g., centralized exchanges).

### Summary <a href="#summary" id="summary"></a>

To interact with the DAC Blockchain, deploy smart contracts, or send transactions, you need a wallet to sign these actions cryptographically.
