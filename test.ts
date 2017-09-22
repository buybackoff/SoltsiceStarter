import { W3, testAccounts } from "soltsice";
import { StandardToken } from "./types";


// default wrapper for web3: either window['web3'] if present,
// or http provider connected to localhost: 8545, if not running on https 
let w3: W3 = W3.Default;
let st: StandardToken = new StandardToken(w3, W3.TC.txParamsDefaultDeploy(testAccounts[0]));
// note that typings are optional in variable definitions, TypeScript infers types

st.totalSupply().then(supply => {
    console.log("TOTAL SUPPLY", supply.dividedBy(1e18).toFormat(0));
});

