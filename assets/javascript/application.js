const contract_abi = "[ { \"constant\": true, \"inputs\": [], \"name\": \"name\", \"outputs\": [ { \"name\": \"\", \"type\": \"string\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [], \"name\": \"withdraw\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"amICursed\", \"outputs\": [ { \"name\": \"\", \"type\": \"bool\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [ { \"name\": \"\", \"type\": \"address\" } ], \"name\": \"unfortunates\", \"outputs\": [ { \"name\": \"\", \"type\": \"bool\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [], \"name\": \"renounceOwnership\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"_victim\", \"type\": \"address\" } ], \"name\": \"curse\", \"outputs\": [], \"payable\": true, \"stateMutability\": \"payable\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"owner\", \"outputs\": [ { \"name\": \"\", \"type\": \"address\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"symbol\", \"outputs\": [ { \"name\": \"\", \"type\": \"string\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"curseCost\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [], \"name\": \"nullify\", \"outputs\": [], \"payable\": true, \"stateMutability\": \"payable\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"_newOwner\", \"type\": \"address\" } ], \"name\": \"transferOwnership\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": false, \"name\": \"_curser\", \"type\": \"address\" }, { \"indexed\": false, \"name\": \"_accursed\", \"type\": \"address\" } ], \"name\": \"Curse\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": false, \"name\": \"_blessed\", \"type\": \"address\" } ], \"name\": \"Nullify\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"name\": \"previousOwner\", \"type\": \"address\" } ], \"name\": \"OwnershipRenounced\", \"type\": \"event\" }, { \"anonymous\": false, \"inputs\": [ { \"indexed\": true, \"name\": \"previousOwner\", \"type\": \"address\" }, { \"indexed\": true, \"name\": \"newOwner\", \"type\": \"address\" } ], \"name\": \"OwnershipTransferred\", \"type\": \"event\" } ]"

const rinkeby = "0xf6e76c00ff05b95fd0721712e87b654eb4665724"
const mainnet = "0x0"
const ropsten = "0x0"
const kovan = "0x0"
