# Create and Manage Wallets

This guide explains how to create a wallet for the DAC Blockchain using the command-line interface (CLI) provided with the `dacnode` binary, as well as general information for external wallets.

### Method 1: Using the DAC Node CLI <a href="#method-1-using-the-dac-node-cli" id="method-1-using-the-dac-node-cli"></a>

The `dacnode` binary includes a built-in wallet manager compatible with the standard Ethereum keystore format.

#### 1. Create a New Account <a href="#id-1-create-a-new-account" id="id-1-create-a-new-account"></a>

To generate a new wallet address and keystore file:

**Linux / macOS:**

```bash
./dacnode account new --datadir ./data
```

**Windows:**

```cmd
dacnode.exe account new --datadir ./data
```

#### 2. Set a Password <a href="#id-2-set-a-password" id="id-2-set-a-password"></a>

The system will prompt you to enter and confirm a password.

* **Important**: Remember this password. It encrypts your private key. There is no "forgot password" feature.

#### 3. Output <a href="#id-3-output" id="id-3-output"></a>

After confirming the password, the CLI will output:

* **Public Address**: `0x...` (Save this!)
* **Path to Keystore**: Location of the encrypted key file.

#### 4. Backup <a href="#id-4-backup" id="id-4-backup"></a>

Navigate to the `keystore` directory inside your data folder. Copy the usage `UTC--...` file to a secure location (USB drive, offline storage).

### Method 2: Importing into MetaMask (For Developers) <a href="#method-2-importing-into-metamask-for-developers" id="method-2-importing-into-metamask-for-developers"></a>

To develop dApps or Smart Contracts, you often need a browser extension wallet like MetaMask.

1. **Locate your Keystore file** (created above) or export your Private Key.
2. Open MetaMask.
3. Select **Import Account**.
4. Choose **JSON File** (for Keystore) or **Private Key**.
5. Enter your password (if using JSON) or paste the key.
6. Connect MetaMask to the DAC Testnet RPC (see network connection details).

### Security Best Practices <a href="#security-best-practices" id="security-best-practices"></a>

* **Backup**: Always keep multiple backups of your Keystore file.
* **Offline Storage**: For large amounts, use cold storage (offline devices).
* **Phishing**: Never enter your private key on a website unless you are 100% sure it is safe.
