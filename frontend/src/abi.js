export default
{
  "contractName": "HelloWorld",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "currentPrice",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "message",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "initMessage",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "message",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "currentPrice",
          "type": "uint256"
        }
      ],
      "name": "NewMessage",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newMessage",
          "type": "string"
        }
      ],
      "name": "update",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "readMessage",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "readPrice",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.10+commit.5a6ea5b1\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"readMessage\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newMessage\",\"type\":\"string\"}],\"name\":\"update\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"readPrice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"currentPrice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"message\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"initMessage\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"message\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"currentPrice\",\"type\":\"uint256\"}],\"name\":\"NewMessage\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol\":\"HelloWorld\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol\":{\"keccak256\":\"0xb72c5577df96db3da6cecc2c59e5f3ba970e4e32eb3c0b951aab61d8e2e719b3\",\"urls\":[\"bzzr://5f3b96a9367ccba99d42868e84c8490b42daf565c222ea2899e85083eb11547f\",\"dweb:/ipfs/QmWUm5DaZrMNsGzeiKq7SFNcrTTpGKxrn77NjLNEfufECL\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b5060405161087f38038061087f8339818101604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b5050929190505050806000908051906020019061009c9291906100ab565b50600060018190555050610150565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100ec57805160ff191683800117855561011a565b8280016001018555821561011a579182015b828111156101195782518255916020019190600101906100fe565b5b509050610127919061012b565b5090565b61014d91905b80821115610149576000816000905550600101610131565b5090565b90565b6107208061015f6000396000f3fe60806040526004361061004a5760003560e01c8063031d5d011461004f5780633d7403a3146100df5780637e91400f146102135780639d1b464a1461023e578063e21f37ce14610269575b600080fd5b34801561005b57600080fd5b506100646102f9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a4578082015181840152602081019050610089565b50505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610198600480360360208110156100f557600080fd5b810190808035906020019064010000000081111561011257600080fd5b82018360208201111561012457600080fd5b8035906020019184600183028401116401000000008311171561014657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061039b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d85780820151818401526020810190506101bd565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021f57600080fd5b50610228610598565b6040518082815260200191505060405180910390f35b34801561024a57600080fd5b506102536105a2565b6040518082815260200191505060405180910390f35b34801561027557600080fd5b5061027e6105a8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102be5780820151818401526020810190506102a3565b50505050905090810190601f1680156102eb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103915780601f1061036657610100808354040283529160200191610391565b820191906000526020600020905b81548152906001019060200180831161037457829003601f168201915b5050505050905090565b60606001543411610414576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f496e73756666696369656e74207061796d656e7400000000000000000000000081525060200191505060405180910390fd5b346001819055508160009080519060200190610431929190610646565b507f0d34d131a1f85bcc89736dd29e7ec7490953ca549773647a014c72b70ecfbc82600060015460405180806020018381526020018281038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104e75780601f106104bc576101008083540402835291602001916104e7565b820191906000526020600020905b8154815290600101906020018083116104ca57829003601f168201915b5050935050505060405180910390a160008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561058c5780601f106105615761010080835404028352916020019161058c565b820191906000526020600020905b81548152906001019060200180831161056f57829003601f168201915b50505050509050919050565b6000600154905090565b60015481565b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561063e5780601f106106135761010080835404028352916020019161063e565b820191906000526020600020905b81548152906001019060200180831161062157829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061068757805160ff19168380011785556106b5565b828001600101855582156106b5579182015b828111156106b4578251825591602001919060010190610699565b5b5090506106c291906106c6565b5090565b6106e891905b808211156106e45760008160009055506001016106cc565b5090565b9056fea265627a7a723058202b8ff062431faeaf63595d0f97862c0a5dc71cd6d0373a289274625ce40c7a7964736f6c634300050a0032",
  "deployedBytecode": "0x60806040526004361061004a5760003560e01c8063031d5d011461004f5780633d7403a3146100df5780637e91400f146102135780639d1b464a1461023e578063e21f37ce14610269575b600080fd5b34801561005b57600080fd5b506100646102f9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a4578082015181840152602081019050610089565b50505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610198600480360360208110156100f557600080fd5b810190808035906020019064010000000081111561011257600080fd5b82018360208201111561012457600080fd5b8035906020019184600183028401116401000000008311171561014657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061039b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d85780820151818401526020810190506101bd565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021f57600080fd5b50610228610598565b6040518082815260200191505060405180910390f35b34801561024a57600080fd5b506102536105a2565b6040518082815260200191505060405180910390f35b34801561027557600080fd5b5061027e6105a8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102be5780820151818401526020810190506102a3565b50505050905090810190601f1680156102eb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103915780601f1061036657610100808354040283529160200191610391565b820191906000526020600020905b81548152906001019060200180831161037457829003601f168201915b5050505050905090565b60606001543411610414576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f496e73756666696369656e74207061796d656e7400000000000000000000000081525060200191505060405180910390fd5b346001819055508160009080519060200190610431929190610646565b507f0d34d131a1f85bcc89736dd29e7ec7490953ca549773647a014c72b70ecfbc82600060015460405180806020018381526020018281038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104e75780601f106104bc576101008083540402835291602001916104e7565b820191906000526020600020905b8154815290600101906020018083116104ca57829003601f168201915b5050935050505060405180910390a160008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561058c5780601f106105615761010080835404028352916020019161058c565b820191906000526020600020905b81548152906001019060200180831161056f57829003601f168201915b50505050509050919050565b6000600154905090565b60015481565b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561063e5780601f106106135761010080835404028352916020019161063e565b820191906000526020600020905b81548152906001019060200180831161062157829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061068757805160ff19168380011785556106b5565b828001600101855582156106b5579182015b828111156106b4578251825591602001919060010190610699565b5b5090506106c291906106c6565b5090565b6106e891905b808211156106e45760008160009055506001016106cc565b5090565b9056fea265627a7a723058202b8ff062431faeaf63595d0f97862c0a5dc71cd6d0373a289274625ce40c7a7964736f6c634300050a0032",
  "sourceMap": "241:1240:0:-;;;621:239;8:9:-1;5:2;;;30:1;27;20:12;5:2;621:239:0;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;621:239:0;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;621:239:0;;;;;;816:11;806:7;:21;;;;;;;;;;;;:::i;:::-;;852:1;837:12;:16;;;;621:239;241:1240;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "241:1240:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1299:90;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1299:90:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1299:90:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;968:325;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;968:325:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;968:325:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;968:325:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;968:325:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;968:325:0;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;968:325:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1395:84;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1395:84:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;462:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;462:24:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;435:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;435:21:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;435:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1299:90;1343:13;1375:7;1368:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1299:90;:::o;968:325::-;1034:13;1092:12;;1080:9;:24;1059:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1175:9;1160:12;:24;;;;1204:10;1194:7;:20;;;;;;;;;;;;:::i;:::-;;1229:33;1240:7;1249:12;;1229:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1279:7;1272:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;968:325;;;:::o;1395:84::-;1437:4;1460:12;;1453:19;;1395:84;:::o;462:24::-;;;;:::o;435:21::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;241:1240::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "// Specifies that the source code is for a version\n// of Solidity greater than 0.5.10\npragma solidity ^0.5.9;\n\n// A contract is a collection of functions and data (its state)\n// that resides at a specific address on the Ethereum blockchain.\ncontract HelloWorld {\n\n    // The keyword \"public\" makes variables accessible from outside a contract\n    // and creates a function that other contracts or SDKs can call to access the value\n    string public message;\n    uint public currentPrice;\n    event NewMessage(string message, uint currentPrice);\n\n    // A special function only run during the creation of the contract\n    constructor(string memory initMessage) public {\n        // Takes a string value and stores the value in the memory data storage area,\n        // setting `message` to that value\n        message = initMessage;\n        currentPrice = 0;\n    }\n\n    // A publicly accessible function that takes a string as a parameter\n    // and updates `message`\n    function update(string memory newMessage) public payable returns (string memory) {\n        require(\n            msg.value > currentPrice,\n            \"Insufficient payment\"\n        );\n        currentPrice = msg.value;\n        message = newMessage;\n        emit NewMessage(message, currentPrice);\n        return message;\n    }\n\n    function readMessage() public view returns (string memory) {\n        return message;\n    }\n\n    function readPrice() public view returns (uint) {\n        return currentPrice;\n    }\n}\n",
  "sourcePath": "/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol",
  "ast": {
    "absolutePath": "/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol",
    "exportedSymbols": {
      "HelloWorld": [
        74
      ]
    },
    "id": 75,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".9"
        ],
        "nodeType": "PragmaDirective",
        "src": "86:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 74,
        "linearizedBaseContracts": [
          74
        ],
        "name": "HelloWorld",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3,
            "name": "message",
            "nodeType": "VariableDeclaration",
            "scope": 74,
            "src": "435:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 2,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "435:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 5,
            "name": "currentPrice",
            "nodeType": "VariableDeclaration",
            "scope": 74,
            "src": "462:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "462:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 11,
            "name": "NewMessage",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7,
                  "indexed": false,
                  "name": "message",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "509:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9,
                  "indexed": false,
                  "name": "currentPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "525:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "525:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "508:35:0"
            },
            "src": "492:52:0"
          },
          {
            "body": {
              "id": 24,
              "nodeType": "Block",
              "src": "667:193:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 18,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "806:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 17,
                      "name": "initMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13,
                      "src": "816:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "806:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 19,
                  "nodeType": "ExpressionStatement",
                  "src": "806:21:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 22,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 20,
                      "name": "currentPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "837:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "852:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "837:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 23,
                  "nodeType": "ExpressionStatement",
                  "src": "837:16:0"
                }
              ]
            },
            "documentation": null,
            "id": 25,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13,
                  "name": "initMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 25,
                  "src": "633:25:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "633:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "632:27:0"
            },
            "returnParameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "667:0:0"
            },
            "scope": 74,
            "src": "621:239:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 56,
              "nodeType": "Block",
              "src": "1049:244:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 36,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 33,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 126,
                            "src": "1080:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 34,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1080:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 35,
                          "name": "currentPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "1092:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1080:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e73756666696369656e74207061796d656e74",
                        "id": 37,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1118:22:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8d1b93b434e468e73514a2449ae955e822f73dcdf924bb4553be247ebca8755e",
                          "typeString": "literal_string \"Insufficient payment\""
                        },
                        "value": "Insufficient payment"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_8d1b93b434e468e73514a2449ae955e822f73dcdf924bb4553be247ebca8755e",
                          "typeString": "literal_string \"Insufficient payment\""
                        }
                      ],
                      "id": 32,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        129,
                        130
                      ],
                      "referencedDeclaration": 130,
                      "src": "1059:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 38,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1059:91:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 39,
                  "nodeType": "ExpressionStatement",
                  "src": "1059:91:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 43,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 40,
                      "name": "currentPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "1160:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 41,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 126,
                        "src": "1175:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 42,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1175:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1160:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 44,
                  "nodeType": "ExpressionStatement",
                  "src": "1160:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 47,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 45,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "1194:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 46,
                      "name": "newMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27,
                      "src": "1204:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1194:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 48,
                  "nodeType": "ExpressionStatement",
                  "src": "1194:20:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 50,
                        "name": "message",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "1240:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 51,
                        "name": "currentPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "1249:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 49,
                      "name": "NewMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "1229:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,uint256)"
                      }
                    },
                    "id": 52,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1229:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 53,
                  "nodeType": "EmitStatement",
                  "src": "1224:38:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 54,
                    "name": "message",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3,
                    "src": "1279:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 31,
                  "id": 55,
                  "nodeType": "Return",
                  "src": "1272:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 57,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "update",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 28,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27,
                  "name": "newMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "984:24:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "984:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "983:26:0"
            },
            "returnParameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "1034:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1034:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1033:15:0"
            },
            "scope": 74,
            "src": "968:325:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 64,
              "nodeType": "Block",
              "src": "1358:31:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 62,
                    "name": "message",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3,
                    "src": "1375:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 61,
                  "id": 63,
                  "nodeType": "Return",
                  "src": "1368:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 65,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readMessage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1319:2:0"
            },
            "returnParameters": {
              "id": 61,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "1343:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1343:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1342:15:0"
            },
            "scope": 74,
            "src": "1299:90:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 72,
              "nodeType": "Block",
              "src": "1443:36:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 70,
                    "name": "currentPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "1460:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 69,
                  "id": 71,
                  "nodeType": "Return",
                  "src": "1453:19:0"
                }
              ]
            },
            "documentation": null,
            "id": 73,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1413:2:0"
            },
            "returnParameters": {
              "id": 69,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "1437:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1437:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1436:6:0"
            },
            "scope": 74,
            "src": "1395:84:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 75,
        "src": "241:1240:0"
      }
    ],
    "src": "86:1396:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol",
    "exportedSymbols": {
      "HelloWorld": [
        74
      ]
    },
    "id": 75,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".9"
        ],
        "nodeType": "PragmaDirective",
        "src": "86:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 74,
        "linearizedBaseContracts": [
          74
        ],
        "name": "HelloWorld",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3,
            "name": "message",
            "nodeType": "VariableDeclaration",
            "scope": 74,
            "src": "435:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 2,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "435:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 5,
            "name": "currentPrice",
            "nodeType": "VariableDeclaration",
            "scope": 74,
            "src": "462:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 4,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "462:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 11,
            "name": "NewMessage",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7,
                  "indexed": false,
                  "name": "message",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "509:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9,
                  "indexed": false,
                  "name": "currentPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "525:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "525:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "508:35:0"
            },
            "src": "492:52:0"
          },
          {
            "body": {
              "id": 24,
              "nodeType": "Block",
              "src": "667:193:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 18,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "806:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 17,
                      "name": "initMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13,
                      "src": "816:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "806:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 19,
                  "nodeType": "ExpressionStatement",
                  "src": "806:21:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 22,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 20,
                      "name": "currentPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "837:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "852:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "837:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 23,
                  "nodeType": "ExpressionStatement",
                  "src": "837:16:0"
                }
              ]
            },
            "documentation": null,
            "id": 25,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13,
                  "name": "initMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 25,
                  "src": "633:25:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "633:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "632:27:0"
            },
            "returnParameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "667:0:0"
            },
            "scope": 74,
            "src": "621:239:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 56,
              "nodeType": "Block",
              "src": "1049:244:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 36,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 33,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 126,
                            "src": "1080:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 34,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1080:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 35,
                          "name": "currentPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "1092:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1080:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e73756666696369656e74207061796d656e74",
                        "id": 37,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1118:22:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8d1b93b434e468e73514a2449ae955e822f73dcdf924bb4553be247ebca8755e",
                          "typeString": "literal_string \"Insufficient payment\""
                        },
                        "value": "Insufficient payment"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_8d1b93b434e468e73514a2449ae955e822f73dcdf924bb4553be247ebca8755e",
                          "typeString": "literal_string \"Insufficient payment\""
                        }
                      ],
                      "id": 32,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        129,
                        130
                      ],
                      "referencedDeclaration": 130,
                      "src": "1059:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 38,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1059:91:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 39,
                  "nodeType": "ExpressionStatement",
                  "src": "1059:91:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 43,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 40,
                      "name": "currentPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "1160:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 41,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 126,
                        "src": "1175:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 42,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1175:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1160:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 44,
                  "nodeType": "ExpressionStatement",
                  "src": "1160:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 47,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 45,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "1194:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 46,
                      "name": "newMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27,
                      "src": "1204:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1194:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 48,
                  "nodeType": "ExpressionStatement",
                  "src": "1194:20:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 50,
                        "name": "message",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "1240:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 51,
                        "name": "currentPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "1249:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 49,
                      "name": "NewMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "1229:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,uint256)"
                      }
                    },
                    "id": 52,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1229:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 53,
                  "nodeType": "EmitStatement",
                  "src": "1224:38:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 54,
                    "name": "message",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3,
                    "src": "1279:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 31,
                  "id": 55,
                  "nodeType": "Return",
                  "src": "1272:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 57,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "update",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 28,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27,
                  "name": "newMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "984:24:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "984:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "983:26:0"
            },
            "returnParameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "1034:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1034:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1033:15:0"
            },
            "scope": 74,
            "src": "968:325:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 64,
              "nodeType": "Block",
              "src": "1358:31:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 62,
                    "name": "message",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3,
                    "src": "1375:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 61,
                  "id": 63,
                  "nodeType": "Return",
                  "src": "1368:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 65,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readMessage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1319:2:0"
            },
            "returnParameters": {
              "id": 61,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "1343:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1343:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1342:15:0"
            },
            "scope": 74,
            "src": "1299:90:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 72,
              "nodeType": "Block",
              "src": "1443:36:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 70,
                    "name": "currentPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "1460:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 69,
                  "id": 71,
                  "nodeType": "Return",
                  "src": "1453:19:0"
                }
              ]
            },
            "documentation": null,
            "id": 73,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1413:2:0"
            },
            "returnParameters": {
              "id": 69,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "1437:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1437:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1436:6:0"
            },
            "scope": 74,
            "src": "1395:84:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 75,
        "src": "241:1240:0"
      }
    ],
    "src": "86:1396:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.10+commit.5a6ea5b1.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {},
      "links": {},
      "address": "0x427072875ca9de9B61D9c81Da91F1695EdcaC319",
      "transactionHash": "0x2e54fa8391fd3b6a30c8c1117cc456bcc6f898bfa85812485ea4873b2cc0e8f4"
    },
    "5777": {
      "events": {},
      "links": {},
      "address": "0x2097D66Af507Ab8BDeaC55A931489a5e9df9e921",
      "transactionHash": "0x073dc85ba976b657fdf956007edb33dc83f28f0b61403ab8016cdcd688d19fc9"
    }
  },
  "schemaVersion": "3.1.0",
  "updatedAt": "2020-04-18T21:03:49.402Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}