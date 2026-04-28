# Obtaining Testnet DACC (Faucet)

The **DAC Testnet Faucet** is a service that provides free "Testnet DACC" coins to developers and users. These coins have no real-world value but are essential for testing transactions, deploying smart contracts, and testing applications on the DAC Testnet.

### Accessing the Faucet <a href="#accessing-the-faucet" id="accessing-the-faucet"></a>

**URL**: [https://faucet.dachain.tech](https://faucet.dachain.tech/)

### How to Request Funds <a href="#how-to-request-funds" id="how-to-request-funds"></a>

1. **Get your Wallet Address**: Ensure you have created a wallet (see _How to Create and Manage a Blockchain Wallet_) and have your public address ready (starts with `0x...`).
2. **Visit the Faucet**: Open [faucet.dachain.tech](https://faucet.dachain.tech/) in your browser.
3. **Enter Address**: Paste your public wallet address into the input field.
4. **Request**: Click the "Claim" button.
5. **Confirmation**: The system will confirm the transaction hash. Wait a few seconds for the block to be mined.

### Checking Your Balance <a href="#checking-your-balance" id="checking-your-balance"></a>

You can verify that you received the funds by:

*   Checking your balance via the Node CLI:

    ```bash
    ./dacnode attach
    > eth.getBalance("YOUR_ADDRESS")
    ```
* Connecting MetaMask to the DAC Testnet.
* Using the DAC Testnet Explorer (if available).

### Limits <a href="#limits" id="limits"></a>

The DAC Blockchain Faucet allows up to 10 requests every 24 hours per IP address to distribute funds to up to 10 wallets per user, in order to ensure fair distribution for all testers.
