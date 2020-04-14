export default
{
    "contractName": "HelloWorld",
    "abi": [
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
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "read",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.10+commit.5a6ea5b1\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"newMessage\",\"type\":\"string\"}],\"name\":\"update\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"read\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"message\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"initMessage\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol\":\"HelloWorld\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol\":{\"keccak256\":\"0x4b5dcd52aaff282f0e2c20fec55692a3c9406e0f77d49dee351744098b7002b2\",\"urls\":[\"bzzr://1d3b8a0b77f16947e7cd2887f5b5c6deac7b2d83a4991a76c7876353e1672e2e\",\"dweb:/ipfs/QmZ1nHeVvMhFcnPstzQUrJNpK5jgCz3BPWvXksSDtqEd9K\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b506040516105923803806105928339818101604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b5050929190505050806000908051906020019061009c9291906100a3565b5050610148565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100e457805160ff1916838001178555610112565b82800160010185558215610112579182015b828111156101115782518255916020019190600101906100f6565b5b50905061011f9190610123565b5090565b61014591905b80821115610141576000816000905550600101610129565b5090565b90565b61043b806101576000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633d7403a31461004657806357de26a414610101578063e21f37ce14610184575b600080fd5b6100ff6004803603602081101561005c57600080fd5b810190808035906020019064010000000081111561007957600080fd5b82018360208201111561008b57600080fd5b803590602001918460018302840111640100000000831117156100ad57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610207565b005b610109610221565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561014957808201518184015260208101905061012e565b50505050905090810190601f1680156101765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018c6102c3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101cc5780820151818401526020810190506101b1565b50505050905090810190601f1680156101f95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b806000908051906020019061021d929190610361565b5050565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102b95780601f1061028e576101008083540402835291602001916102b9565b820191906000526020600020905b81548152906001019060200180831161029c57829003601f168201915b5050505050905090565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103595780601f1061032e57610100808354040283529160200191610359565b820191906000526020600020905b81548152906001019060200180831161033c57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106103a257805160ff19168380011785556103d0565b828001600101855582156103d0579182015b828111156103cf5782518255916020019190600101906103b4565b5b5090506103dd91906103e1565b5090565b61040391905b808211156103ff5760008160009055506001016103e7565b5090565b9056fea265627a7a72305820da45fc010b8d7b4b6508807a92f82e7a759028b7653038f75350d06ba3e8f71f64736f6c634300050a0032",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80633d7403a31461004657806357de26a414610101578063e21f37ce14610184575b600080fd5b6100ff6004803603602081101561005c57600080fd5b810190808035906020019064010000000081111561007957600080fd5b82018360208201111561008b57600080fd5b803590602001918460018302840111640100000000831117156100ad57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610207565b005b610109610221565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561014957808201518184015260208101905061012e565b50505050905090810190601f1680156101765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018c6102c3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101cc5780820151818401526020810190506101b1565b50505050905090810190601f1680156101f95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b806000908051906020019061021d929190610361565b5050565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102b95780601f1061028e576101008083540402835291602001916102b9565b820191906000526020600020905b81548152906001019060200180831161029c57829003601f168201915b5050505050905090565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103595780601f1061032e57610100808354040283529160200191610359565b820191906000526020600020905b81548152906001019060200180831161033c57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106103a257805160ff19168380011785556103d0565b828001600101855582156103d0579182015b828111156103cf5782518255916020019190600101906103b4565b5b5090506103dd91906103e1565b5090565b61040391905b808211156103ff5760008160009055506001016103e7565b5090565b9056fea265627a7a72305820da45fc010b8d7b4b6508807a92f82e7a759028b7653038f75350d06ba3e8f71f64736f6c634300050a0032",
    "sourceMap": "242:791:0:-;;;535:213;8:9:-1;5:2;;;30:1;27;20:12;5:2;535:213:0;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;535:213:0;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;535:213:0;;;;;;730:11;720:7;:21;;;;;;;;;;;;:::i;:::-;;535:213;242:791;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "242:791:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;242:791:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;856:86;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;856:86:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;856:86:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;856:86:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;856:86:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;856:86:0;;;;;;;;;;;;;;;:::i;:::-;;948:83;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;948:83:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;436:21;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;436:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;856:86;925:10;915:7;:20;;;;;;;;;;;;:::i;:::-;;856:86;:::o;948:83::-;985:13;1017:7;1010:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;948:83;:::o;436:21::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;242:791::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "// Specifies that the source code is for a version\n// of Solidity greater than 0.5.10\npragma solidity ^0.5.10;\n\n// A contract is a collection of functions and data (its state)\n// that resides at a specific address on the Ethereum blockchain.\ncontract HelloWorld {\n\n    // The keyword \"public\" makes variables accessible from outside a contract\n    // and creates a function that other contracts or SDKs can call to access the value\n    string public message;\n\n    // A special function only run during the creation of the contract\n    constructor(string memory initMessage) public {\n        // Takes a string value and stores the value in the memory data storage area,\n        // setting `message` to that value\n        message = initMessage;\n    }\n\n    // A publicly accessible function that takes a string as a parameter\n    // and updates `message`\n    function update(string memory newMessage) public {\n        message = newMessage;\n    }\n\n    function read() public view returns (string memory) {\n        return message;\n    }\n}\n",
    "sourcePath": "/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol",
    "ast": {
      "absolutePath": "/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol",
      "exportedSymbols": {
        "HelloWorld": [
          32
        ]
      },
      "id": 33,
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
          "id": 32,
          "linearizedBaseContracts": [
            32
          ],
          "name": "HelloWorld",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 3,
              "name": "message",
              "nodeType": "VariableDeclaration",
              "scope": 32,
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
              "body": {
                "id": 12,
                "nodeType": "Block",
                "src": "581:167:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 10,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 8,
                        "name": "message",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "720:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 9,
                        "name": "initMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "730:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "720:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 11,
                    "nodeType": "ExpressionStatement",
                    "src": "720:21:0"
                  }
                ]
              },
              "documentation": null,
              "id": 13,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 6,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5,
                    "name": "initMessage",
                    "nodeType": "VariableDeclaration",
                    "scope": 13,
                    "src": "547:25:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 4,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "547:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "546:27:0"
              },
              "returnParameters": {
                "id": 7,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "581:0:0"
              },
              "scope": 32,
              "src": "535:213:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 22,
                "nodeType": "Block",
                "src": "905:37:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 20,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 18,
                        "name": "message",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "915:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 19,
                        "name": "newMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15,
                        "src": "925:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "915:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 21,
                    "nodeType": "ExpressionStatement",
                    "src": "915:20:0"
                  }
                ]
              },
              "documentation": null,
              "id": 23,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "update",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 16,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 15,
                    "name": "newMessage",
                    "nodeType": "VariableDeclaration",
                    "scope": 23,
                    "src": "872:24:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 14,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "872:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "871:26:0"
              },
              "returnParameters": {
                "id": 17,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "905:0:0"
              },
              "scope": 32,
              "src": "856:86:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 30,
                "nodeType": "Block",
                "src": "1000:31:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 28,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "1017:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 27,
                    "id": 29,
                    "nodeType": "Return",
                    "src": "1010:14:0"
                  }
                ]
              },
              "documentation": null,
              "id": 31,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "read",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 24,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "961:2:0"
              },
              "returnParameters": {
                "id": 27,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 26,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 31,
                    "src": "985:13:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 25,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "985:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "984:15:0"
              },
              "scope": 32,
              "src": "948:83:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 33,
          "src": "242:791:0"
        }
      ],
      "src": "86:948:0"
    },
    "legacyAST": {
      "absolutePath": "/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol",
      "exportedSymbols": {
        "HelloWorld": [
          32
        ]
      },
      "id": 33,
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
          "id": 32,
          "linearizedBaseContracts": [
            32
          ],
          "name": "HelloWorld",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 3,
              "name": "message",
              "nodeType": "VariableDeclaration",
              "scope": 32,
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
              "body": {
                "id": 12,
                "nodeType": "Block",
                "src": "581:167:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 10,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 8,
                        "name": "message",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "720:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 9,
                        "name": "initMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "730:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "720:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 11,
                    "nodeType": "ExpressionStatement",
                    "src": "720:21:0"
                  }
                ]
              },
              "documentation": null,
              "id": 13,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 6,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5,
                    "name": "initMessage",
                    "nodeType": "VariableDeclaration",
                    "scope": 13,
                    "src": "547:25:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 4,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "547:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "546:27:0"
              },
              "returnParameters": {
                "id": 7,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "581:0:0"
              },
              "scope": 32,
              "src": "535:213:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 22,
                "nodeType": "Block",
                "src": "905:37:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 20,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 18,
                        "name": "message",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "915:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 19,
                        "name": "newMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15,
                        "src": "925:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "915:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 21,
                    "nodeType": "ExpressionStatement",
                    "src": "915:20:0"
                  }
                ]
              },
              "documentation": null,
              "id": 23,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "update",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 16,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 15,
                    "name": "newMessage",
                    "nodeType": "VariableDeclaration",
                    "scope": 23,
                    "src": "872:24:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 14,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "872:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "871:26:0"
              },
              "returnParameters": {
                "id": 17,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "905:0:0"
              },
              "scope": 32,
              "src": "856:86:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 30,
                "nodeType": "Block",
                "src": "1000:31:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 28,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "1017:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 27,
                    "id": 29,
                    "nodeType": "Return",
                    "src": "1010:14:0"
                  }
                ]
              },
              "documentation": null,
              "id": 31,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "read",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 24,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "961:2:0"
              },
              "returnParameters": {
                "id": 27,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 26,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 31,
                    "src": "985:13:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 25,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "985:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "984:15:0"
              },
              "scope": 32,
              "src": "948:83:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 33,
          "src": "242:791:0"
        }
      ],
      "src": "86:948:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.5.10+commit.5a6ea5b1.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0xa0b650b96452381b7661a9495933BF8fFd7ccdD2",
        "transactionHash": "0xf4378e0e24dbda9ffa26c24e1f3335be54198f0c55b4690d457b100370cbffa4"
      }
    },
    "schemaVersion": "3.0.17",
    "updatedAt": "2020-04-14T17:47:21.475Z",
    "networkType": "ethereum",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
}