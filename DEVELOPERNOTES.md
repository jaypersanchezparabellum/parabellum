# Overview

This Truffle project is for the Parabellum Swap exchange.  To be able to simulate a swap between tokens in the development environment, there are a few setups steps required.  This is not a standard Truffle development flow.  This Truffle project is more of a project file holder.

## Setup Instructions

The development environment will require the following

1. Remix from remix.ethereum.org
2. Metamask extension is enabled in Firefox or Chrome
3. Ganache CLI
4. Latest version of Truffle

In the contracts directory open the ParabellumAudit.sol.  Copy this content in Remix by creating a new ParabellumAudit.sol and pasting the content you just copied.  The pragma setting for this contract is 0.5.0. 

Click on the left side of the menu in Remix, click on "Solidity Compiler".  Change the "Compiler" to 0.5.17+commit.d19bba13.

Makie sure the "Language" is set to Solidity.  In the "Contract" drop down, select any of the ParabellumAudit.sol.  Then click on "Compile ParabellumAudit.sol".

Then click on "Deploy and Run Transaction" on the left side of the menu.  Then in the "Environment" field, select "Web3 Provider".  Open a terminal and start Ganache with the following line

```
ganache-cli  -f https://mainnet.infura.io/v3/7eaff5f6184245569bd9e0a45548a219 -d -i 66 --unlock 0xf584F8728B874a6a5c7A8d4d387C9aae9172D621 -l 8000000
```

Once Ganache has started, you can now login into your Metamask.  Once connected, you should be able to see all 10 accounts in Remix "Account" list.  It will take a while but the number of ethers will show for each accounts.

In Remix, select ParabellumAudit in the "Contract" drop down field.  Copy and paste the contract address just below the side panel.  In the TaishoSupuritto.js, change the "onesplitaddress" variable with the contract address you just copied.

Run on the a terminal console the following command

````
node TaishoExchange.js
````

