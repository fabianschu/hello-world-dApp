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
  "metadata": "{\"compiler\":{\"version\":\"0.5.10+commit.5a6ea5b1\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"readMessage\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newMessage\",\"type\":\"string\"}],\"name\":\"update\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"readPrice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"currentPrice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"message\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"initMessage\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol\":\"HelloWorld\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol\":{\"keccak256\":\"0x1933a8a2198f6591c5fdb11c93deac5715558ad59450a8911a2b1bf1ed7c18d1\",\"urls\":[\"bzzr://df111a35d3ee9156c7e28f9ef3b313eaaf2ea862084c72e8ab35e63ae314b559\",\"dweb:/ipfs/QmNogDVZuTUnTPugSrk9NKJCdtpvbfKBn2srsW4BTeDnFo\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b506040516107bb3803806107bb8339818101604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b5050929190505050806000908051906020019061009c9291906100ab565b50600060018190555050610150565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100ec57805160ff191683800117855561011a565b8280016001018555821561011a579182015b828111156101195782518255916020019190600101906100fe565b5b509050610127919061012b565b5090565b61014d91905b80821115610149576000816000905550600101610131565b5090565b90565b61065c8061015f6000396000f3fe60806040526004361061004a5760003560e01c8063031d5d011461004f5780633d7403a3146100df5780637e91400f146102135780639d1b464a1461023e578063e21f37ce14610269575b600080fd5b34801561005b57600080fd5b506100646102f9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a4578082015181840152602081019050610089565b50505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610198600480360360208110156100f557600080fd5b810190808035906020019064010000000081111561011257600080fd5b82018360208201111561012457600080fd5b8035906020019184600183028401116401000000008311171561014657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061039b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d85780820151818401526020810190506101bd565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021f57600080fd5b506102286104d4565b6040518082815260200191505060405180910390f35b34801561024a57600080fd5b506102536104de565b6040518082815260200191505060405180910390f35b34801561027557600080fd5b5061027e6104e4565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102be5780820151818401526020810190506102a3565b50505050905090810190601f1680156102eb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103915780601f1061036657610100808354040283529160200191610391565b820191906000526020600020905b81548152906001019060200180831161037457829003601f168201915b5050505050905090565b60606001543411610414576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f496e73756666696369656e74207061796d656e7400000000000000000000000081525060200191505060405180910390fd5b346001819055508160009080519060200190610431929190610582565b5060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104c85780601f1061049d576101008083540402835291602001916104c8565b820191906000526020600020905b8154815290600101906020018083116104ab57829003601f168201915b50505050509050919050565b6000600154905090565b60015481565b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561057a5780601f1061054f5761010080835404028352916020019161057a565b820191906000526020600020905b81548152906001019060200180831161055d57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106105c357805160ff19168380011785556105f1565b828001600101855582156105f1579182015b828111156105f05782518255916020019190600101906105d5565b5b5090506105fe9190610602565b5090565b61062491905b80821115610620576000816000905550600101610608565b5090565b9056fea265627a7a72305820086347c7725b25c3f7009b65ecb40866c433daa93982e3102945c4e039c6677e64736f6c634300050a0032",
  "deployedBytecode": "0x60806040526004361061004a5760003560e01c8063031d5d011461004f5780633d7403a3146100df5780637e91400f146102135780639d1b464a1461023e578063e21f37ce14610269575b600080fd5b34801561005b57600080fd5b506100646102f9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a4578082015181840152602081019050610089565b50505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610198600480360360208110156100f557600080fd5b810190808035906020019064010000000081111561011257600080fd5b82018360208201111561012457600080fd5b8035906020019184600183028401116401000000008311171561014657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061039b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d85780820151818401526020810190506101bd565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021f57600080fd5b506102286104d4565b6040518082815260200191505060405180910390f35b34801561024a57600080fd5b506102536104de565b6040518082815260200191505060405180910390f35b34801561027557600080fd5b5061027e6104e4565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102be5780820151818401526020810190506102a3565b50505050905090810190601f1680156102eb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103915780601f1061036657610100808354040283529160200191610391565b820191906000526020600020905b81548152906001019060200180831161037457829003601f168201915b5050505050905090565b60606001543411610414576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f496e73756666696369656e74207061796d656e7400000000000000000000000081525060200191505060405180910390fd5b346001819055508160009080519060200190610431929190610582565b5060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104c85780601f1061049d576101008083540402835291602001916104c8565b820191906000526020600020905b8154815290600101906020018083116104ab57829003601f168201915b50505050509050919050565b6000600154905090565b60015481565b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561057a5780601f1061054f5761010080835404028352916020019161057a565b820191906000526020600020905b81548152906001019060200180831161055d57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106105c357805160ff19168380011785556105f1565b828001600101855582156105f1579182015b828111156105f05782518255916020019190600101906105d5565b5b5090506105fe9190610602565b5090565b61062491905b80821115610620576000816000905550600101610608565b5090565b9056fea265627a7a72305820086347c7725b25c3f7009b65ecb40866c433daa93982e3102945c4e039c6677e64736f6c634300050a0032",
  "sourceMap": "242:1135:0:-;;;565:239;8:9:-1;5:2;;;30:1;27;20:12;5:2;565:239:0;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;565:239:0;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;565:239:0;;;;;;760:11;750:7;:21;;;;;;;;;;;;:::i;:::-;;796:1;781:12;:16;;;;565:239;242:1135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "242:1135:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1195:90;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1195:90:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1195:90:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;912:277;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;912:277:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;912:277:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;912:277:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;912:277:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;912:277:0;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;912:277:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1291:84;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1291:84:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;463:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;463:24:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;436:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;436:21:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;436:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1195:90;1239:13;1271:7;1264:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1195:90;:::o;912:277::-;978:13;1036:12;;1024:9;:24;1003:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1119:9;1104:12;:24;;;;1148:10;1138:7;:20;;;;;;;;;;;;:::i;:::-;;1175:7;1168:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;912:277;;;:::o;1291:84::-;1333:4;1356:12;;1349:19;;1291:84;:::o;463:24::-;;;;:::o;436:21::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;242:1135::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "// Specifies that the source code is for a version\n// of Solidity greater than 0.5.10\npragma solidity ^0.5.10;\n\n// A contract is a collection of functions and data (its state)\n// that resides at a specific address on the Ethereum blockchain.\ncontract HelloWorld {\n\n    // The keyword \"public\" makes variables accessible from outside a contract\n    // and creates a function that other contracts or SDKs can call to access the value\n    string public message;\n    uint public currentPrice;\n\n    // A special function only run during the creation of the contract\n    constructor(string memory initMessage) public {\n        // Takes a string value and stores the value in the memory data storage area,\n        // setting `message` to that value\n        message = initMessage;\n        currentPrice = 0;\n    }\n\n    // A publicly accessible function that takes a string as a parameter\n    // and updates `message`\n    function update(string memory newMessage) public payable returns (string memory) {\n        require(\n            msg.value > currentPrice,\n            \"Insufficient payment\"\n        );\n        currentPrice = msg.value;\n        message = newMessage;\n        return message;\n    }\n\n    function readMessage() public view returns (string memory) {\n        return message;\n    }\n\n    function readPrice() public view returns (uint) {\n        return currentPrice;\n    }\n}\n",
  "sourcePath": "/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol",
  "ast": {
    "absolutePath": "/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol",
    "exportedSymbols": {
      "HelloWorld": [
        63
      ]
    },
    "id": 64,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".10"
        ],
        "nodeType": "PragmaDirective",
        "src": "86:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 63,
        "linearizedBaseContracts": [
          63
        ],
        "name": "HelloWorld",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3,
            "name": "message",
            "nodeType": "VariableDeclaration",
            "scope": 63,
            "src": "436:21:0",
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
              "src": "436:6:0",
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
            "scope": 63,
            "src": "463:24:0",
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
              "src": "463:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 18,
              "nodeType": "Block",
              "src": "611:193:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 12,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "750:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 11,
                      "name": "initMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "760:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "750:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 13,
                  "nodeType": "ExpressionStatement",
                  "src": "750:21:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 14,
                      "name": "currentPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "781:12:0",
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
                      "id": 15,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "796:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "781:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17,
                  "nodeType": "ExpressionStatement",
                  "src": "781:16:0"
                }
              ]
            },
            "documentation": null,
            "id": 19,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7,
                  "name": "initMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 19,
                  "src": "577:25:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "577:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "576:27:0"
            },
            "returnParameters": {
              "id": 9,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:0:0"
            },
            "scope": 63,
            "src": "565:239:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 45,
              "nodeType": "Block",
              "src": "993:196:0",
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
                        "id": 30,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 27,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 115,
                            "src": "1024:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 28,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1024:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 29,
                          "name": "currentPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "1036:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1024:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e73756666696369656e74207061796d656e74",
                        "id": 31,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1062:22:0",
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
                      "id": 26,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        118,
                        119
                      ],
                      "referencedDeclaration": 119,
                      "src": "1003:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 32,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1003:91:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33,
                  "nodeType": "ExpressionStatement",
                  "src": "1003:91:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 34,
                      "name": "currentPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "1104:12:0",
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
                        "id": 35,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "1119:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 36,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1119:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1104:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 38,
                  "nodeType": "ExpressionStatement",
                  "src": "1104:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 41,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 39,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "1138:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 40,
                      "name": "newMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "1148:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1138:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 42,
                  "nodeType": "ExpressionStatement",
                  "src": "1138:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 43,
                    "name": "message",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3,
                    "src": "1175:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 25,
                  "id": 44,
                  "nodeType": "Return",
                  "src": "1168:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 46,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "update",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "name": "newMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 46,
                  "src": "928:24:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "928:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "927:26:0"
            },
            "returnParameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 46,
                  "src": "978:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "977:15:0"
            },
            "scope": 63,
            "src": "912:277:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 53,
              "nodeType": "Block",
              "src": "1254:31:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 51,
                    "name": "message",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3,
                    "src": "1271:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 50,
                  "id": 52,
                  "nodeType": "Return",
                  "src": "1264:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 54,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readMessage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 47,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1215:2:0"
            },
            "returnParameters": {
              "id": 50,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "1239:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 48,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1239:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1238:15:0"
            },
            "scope": 63,
            "src": "1195:90:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 61,
              "nodeType": "Block",
              "src": "1339:36:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 59,
                    "name": "currentPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "1356:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 58,
                  "id": 60,
                  "nodeType": "Return",
                  "src": "1349:19:0"
                }
              ]
            },
            "documentation": null,
            "id": 62,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 55,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1309:2:0"
            },
            "returnParameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 62,
                  "src": "1333:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1333:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1332:6:0"
            },
            "scope": 63,
            "src": "1291:84:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 64,
        "src": "242:1135:0"
      }
    ],
    "src": "86:1292:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol",
    "exportedSymbols": {
      "HelloWorld": [
        63
      ]
    },
    "id": 64,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".10"
        ],
        "nodeType": "PragmaDirective",
        "src": "86:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 63,
        "linearizedBaseContracts": [
          63
        ],
        "name": "HelloWorld",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3,
            "name": "message",
            "nodeType": "VariableDeclaration",
            "scope": 63,
            "src": "436:21:0",
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
              "src": "436:6:0",
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
            "scope": 63,
            "src": "463:24:0",
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
              "src": "463:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 18,
              "nodeType": "Block",
              "src": "611:193:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 12,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "750:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 11,
                      "name": "initMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "760:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "750:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 13,
                  "nodeType": "ExpressionStatement",
                  "src": "750:21:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 14,
                      "name": "currentPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "781:12:0",
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
                      "id": 15,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "796:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "781:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17,
                  "nodeType": "ExpressionStatement",
                  "src": "781:16:0"
                }
              ]
            },
            "documentation": null,
            "id": 19,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7,
                  "name": "initMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 19,
                  "src": "577:25:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "577:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "576:27:0"
            },
            "returnParameters": {
              "id": 9,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:0:0"
            },
            "scope": 63,
            "src": "565:239:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 45,
              "nodeType": "Block",
              "src": "993:196:0",
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
                        "id": 30,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 27,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 115,
                            "src": "1024:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 28,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1024:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 29,
                          "name": "currentPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "1036:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1024:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e73756666696369656e74207061796d656e74",
                        "id": 31,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1062:22:0",
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
                      "id": 26,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        118,
                        119
                      ],
                      "referencedDeclaration": 119,
                      "src": "1003:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 32,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1003:91:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33,
                  "nodeType": "ExpressionStatement",
                  "src": "1003:91:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 34,
                      "name": "currentPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "1104:12:0",
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
                        "id": 35,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "1119:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 36,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1119:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1104:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 38,
                  "nodeType": "ExpressionStatement",
                  "src": "1104:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 41,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 39,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "1138:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 40,
                      "name": "newMessage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "1148:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1138:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 42,
                  "nodeType": "ExpressionStatement",
                  "src": "1138:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 43,
                    "name": "message",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3,
                    "src": "1175:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 25,
                  "id": 44,
                  "nodeType": "Return",
                  "src": "1168:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 46,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "update",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "name": "newMessage",
                  "nodeType": "VariableDeclaration",
                  "scope": 46,
                  "src": "928:24:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "928:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "927:26:0"
            },
            "returnParameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 46,
                  "src": "978:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "977:15:0"
            },
            "scope": 63,
            "src": "912:277:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 53,
              "nodeType": "Block",
              "src": "1254:31:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 51,
                    "name": "message",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3,
                    "src": "1271:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 50,
                  "id": 52,
                  "nodeType": "Return",
                  "src": "1264:14:0"
                }
              ]
            },
            "documentation": null,
            "id": 54,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readMessage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 47,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1215:2:0"
            },
            "returnParameters": {
              "id": 50,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "1239:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 48,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1239:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1238:15:0"
            },
            "scope": 63,
            "src": "1195:90:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 61,
              "nodeType": "Block",
              "src": "1339:36:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 59,
                    "name": "currentPrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "1356:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 58,
                  "id": 60,
                  "nodeType": "Return",
                  "src": "1349:19:0"
                }
              ]
            },
            "documentation": null,
            "id": 62,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "readPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 55,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1309:2:0"
            },
            "returnParameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 62,
                  "src": "1333:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1333:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1332:6:0"
            },
            "scope": 63,
            "src": "1291:84:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 64,
        "src": "242:1135:0"
      }
    ],
    "src": "86:1292:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.10+commit.5a6ea5b1.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x2097D66Af507Ab8BDeaC55A931489a5e9df9e921",
      "transactionHash": "0x32854a88e6f1d24276adc1dc1c8a8a9db865284e6dc865416fce9689ffe3dc9c"
    }
  },
  "schemaVersion": "3.0.17",
  "updatedAt": "2020-04-14T20:00:03.278Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}