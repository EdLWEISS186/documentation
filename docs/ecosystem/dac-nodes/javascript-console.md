# JavaScript Console

The DAC Node JavaScript console exposes the full [web3 JavaScript Dapp API](https://web3js.readthedocs.io/en/v1.2.9/) and further administrative APIs.

## Interactive Use: The Console

The `dacnode` JavaScript console is started with the `console` or `attach` node sub-commands.\
The `console` subcommands starts the DAC Node and then opens the console. The `attach` subcommand attaches to the console to an already-running dacnode instance.

```
dacnode console
dacnode attach
```

Attach mode accepts an endpoint in case the dacnode is running with a non default\
ipc endpoint or you would like to connect over the rpc interface.

```
dacnode attach /some/custom/.dac/gdacnode.ipc
dacnode attach http://191.168.1.1:8545
dacnode attach ws://191.168.1.1:8546
```

Note that by default the dacnode doesn't start the HTTP and WebSocket servers and not all functionality is provided over these interfaces for security reasons. These defaults can be overridden with the `--http.api` and `--ws.api` arguments when the DAC Node is started, or with `admin.startRPC` and `admin.startWS`.

If you need log information, start with:

```
dacnode console --verbosity 5 2>> /tmp/dacnode.log
```

Otherwise mute your logs, so that it does not pollute your console:

```
dacnode console 2> /dev/null
```

Dacnode has support to load custom JavaScript files into the console through the `--preload` option. This can be used to load often used functions, or to setup web3 contract objects.

```
dacnode console --preload "/my/scripts/folder/utils.js,/my/scripts/folder/contracts.js"
```

## Non-interactive Use: Script Mode

It's also possible to execute files to the JavaScript interpreter. The `console` and `attach` subcommand accept the `--exec` argument which is a javascript statement.

```
dacnode attach --exec "eth.blockNumber"
```

This prints the current block number of a running dacnode instance.

Or execute a local script with more complex statements on a remote node over http:

```
dacnode attach http://dacnode.example.org:8545 --exec 'loadScript("/tmp/checkbalances.js")'
dacnode attach http://dacnode.example.org:8545 --jspath "/tmp" --exec 'loadScript("checkbalances.js")'
```

Use the `--jspath <path/to/my/js/root>` to set a library directory for your js scripts.\
Parameters to `loadScript()` with no absolute path will be understood relative to this directory.

You can exit the console by typing `exit` or simply with `CTRL-C`.

## Caveats

Dacnode now uses the [GoJa JS VM](https://github.com/dop251/goja) which is compatible with ECMAScript 5.1. There are some limitations though:

* Promises and `async` won't work.

`web3.js` uses the [`bignumber.js`](https://github.com/MikeMcl/bignumber.js) library.\
This library is auto-loaded into the console.

### Timers

In addition to the full functionality of JS (as per ECMA5), the DAC JSRE is augmented with various timers. It implements `setInterval`, `clearInterval`, `setTimeout`, `clearTimeout` you may be used to using in browser windows. It also provides implementation for `admin.sleep(seconds)` and a block based timer, `admin.sleepBlocks(n)` which sleeps till the number of new blocks added is equal to or greater than `n`, think "wait for n confirmations".
