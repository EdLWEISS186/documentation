# Local Testnet Tools

### Local RPC Node Setup <a href="#id-1-rpc-endpoint-remote-procedure-call" id="id-1-rpc-endpoint-remote-procedure-call"></a>

For developers and enterprise partners requiring high throughput, low latency, or enhanced privacy, we recommend setting up a Local RPC Node. Running a local node allows your applications to communicate directly with the **DAC Inception Testnet Blockchain** without relying on the public gateway.

#### Configuration & CORS Settings

To allow web-based applications (like your frontend dApp or a local Blockscout instance) to interact with your node, you must properly configure CORS (Cross-Origin Resource Sharing).

When launching your **dacnode**, use the following flags:

* HTTP RPC Flag: `--http`
*   CORS Configuration: `--http.corsdomain "*"`

    > _Note: For production environments, replace `"*"` with your specific domain (e.g., `"https://app.dacdeveloper.com"`) to enhance security._
* RPC APIs: `--http.api "eth,net,web3,txpool"`
* RPC Port: `--http.port 8545`

#### Step-by-Step Instructions

1. **Installation:** Download the latest DAC Node binary from our [official repository](https://download.dachain.tech/).
2.  **Execution:** Run the node with the CORS flags enabled:

    ```
    ./dacnode --testnet --datadir ./data --http --http.addr 0.0.0.0 --http.port 8545 --http.corsdomain "*" --http.api "eth,net,web3"
    ```
3.  Verification: Test your local RPC connection using `curl`:

    ```
    curl -X POST http://localhost:8545 \
      -H "Content-Type: application/json" \
      --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
    ```

#### Why use a Local RPC?

* No Rate Limits: Unlimited requests for indexing data or heavy smart contract calls.
* Security: Your private keys used in local scripts never leave your infrastructure.
* Reliability: Independence from the public infrastructure's availability during peak traffic.
