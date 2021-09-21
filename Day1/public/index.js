// this web3.js file interact with the smart contract so it needs the contract ABI & the contract address

const contractABI = []; // empty because no function in our contract
const contractAddress = "0xc943fe0C514291e5de4C644501588F862E8546fD";

// create the web3.js instance to communicate with the contract
// give the ganache URL to the web3(local host)
let web3 = new Web3("http://localhost:9545"); // web3 instance is what is needed, changable to other networks

// object that points to the deployed contract on the blockchain
let simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);
console.log('WEB LABEL',simpleSmartContract); // label for identifying, not neccessary tho
    
// get the accounts generated
let acc = web3.eth.getAccounts().then(console.log); // this returns a promise 

// install static: npm i -g static-server
// install web3: npm install web3, paste the cdn as script in the html file just before the web3.js  script