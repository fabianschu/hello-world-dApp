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
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
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
    "metadata": "{\"compiler\":{\"version\":\"0.5.10+commit.5a6ea5b1\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"newMessage\",\"type\":\"string\"}],\"name\":\"update\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"read\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"message\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"initMessage\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol\":\"HelloWorld\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol\":{\"keccak256\":\"0x3b1e00e3b9de79f4fc09e416538d0a80ff15c1fd1843c66177373f9b88be3105\",\"urls\":[\"bzzr://28848a2feb05225200a22fa1f47cdef40219adf579b4aa67cb5003f16a6e44b7\",\"dweb:/ipfs/QmUByrApNFFUdZYiUEGfhPAdXorKxZetkxfKjE1sMweXz4\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b506040516106ac3803806106ac8339818101604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b5050929190505050806000908051906020019061009c9291906100a3565b5050610148565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100e457805160ff1916838001178555610112565b82800160010185558215610112579182015b828111156101115782518255916020019190600101906100f6565b5b50905061011f9190610123565b5090565b61014591905b80821115610141576000816000905550600101610129565b5090565b90565b610555806101576000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633d7403a31461004657806357de26a41461017a578063e21f37ce146101fd575b600080fd5b6100ff6004803603602081101561005c57600080fd5b810190808035906020019064010000000081111561007957600080fd5b82018360208201111561008b57600080fd5b803590602001918460018302840111640100000000831117156100ad57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610280565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013f578082015181840152602081019050610124565b50505050905090810190601f16801561016c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018261033b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c25780820151818401526020810190506101a7565b50505050905090810190601f1680156101ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102056103dd565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561024557808201518184015260208101905061022a565b50505050905090810190601f1680156102725780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6060816000908051906020019061029892919061047b565b5060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561032f5780601f106103045761010080835404028352916020019161032f565b820191906000526020600020905b81548152906001019060200180831161031257829003601f168201915b50505050509050919050565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103d35780601f106103a8576101008083540402835291602001916103d3565b820191906000526020600020905b8154815290600101906020018083116103b657829003601f168201915b5050505050905090565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104735780601f1061044857610100808354040283529160200191610473565b820191906000526020600020905b81548152906001019060200180831161045657829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106104bc57805160ff19168380011785556104ea565b828001600101855582156104ea579182015b828111156104e95782518255916020019190600101906104ce565b5b5090506104f791906104fb565b5090565b61051d91905b80821115610519576000816000905550600101610501565b5090565b9056fea265627a7a7230582068658d881d4ea300672ecc18215ab6367baa774ac215591416a47dc4a72a198364736f6c634300050a0032",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80633d7403a31461004657806357de26a41461017a578063e21f37ce146101fd575b600080fd5b6100ff6004803603602081101561005c57600080fd5b810190808035906020019064010000000081111561007957600080fd5b82018360208201111561008b57600080fd5b803590602001918460018302840111640100000000831117156100ad57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610280565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013f578082015181840152602081019050610124565b50505050905090810190601f16801561016c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018261033b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c25780820151818401526020810190506101a7565b50505050905090810190601f1680156101ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102056103dd565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561024557808201518184015260208101905061022a565b50505050905090810190601f1680156102725780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6060816000908051906020019061029892919061047b565b5060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561032f5780601f106103045761010080835404028352916020019161032f565b820191906000526020600020905b81548152906001019060200180831161031257829003601f168201915b50505050509050919050565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103d35780601f106103a8576101008083540402835291602001916103d3565b820191906000526020600020905b8154815290600101906020018083116103b657829003601f168201915b5050505050905090565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104735780601f1061044857610100808354040283529160200191610473565b820191906000526020600020905b81548152906001019060200180831161045657829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106104bc57805160ff19168380011785556104ea565b828001600101855582156104ea579182015b828111156104e95782518255916020019190600101906104ce565b5b5090506104f791906104fb565b5090565b61051d91905b80821115610519576000816000905550600101610501565b5090565b9056fea265627a7a7230582068658d881d4ea300672ecc18215ab6367baa774ac215591416a47dc4a72a198364736f6c634300050a0032",
    "sourceMap": "242:839:0:-;;;535:213;8:9:-1;5:2;;;30:1;27;20:12;5:2;535:213:0;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;535:213:0;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;535:213:0;;;;;;730:11;720:7;:21;;;;;;;;;;;;:::i;:::-;;535:213;242:839;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "242:839:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;242:839:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;856:134;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;856:134:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;856:134:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;856:134:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;856:134:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;856:134:0;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;856:134:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;996:83;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;996:83:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;436:21;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;436:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;856:134;914:13;949:10;939:7;:20;;;;;;;;;;;;:::i;:::-;;976:7;969:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;856:134;;;:::o;996:83::-;1033:13;1065:7;1058:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;996:83;:::o;436:21::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;242:839::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "// Specifies that the source code is for a version\n// of Solidity greater than 0.5.10\npragma solidity ^0.5.10;\n\n// A contract is a collection of functions and data (its state)\n// that resides at a specific address on the Ethereum blockchain.\ncontract HelloWorld {\n\n    // The keyword \"public\" makes variables accessible from outside a contract\n    // and creates a function that other contracts or SDKs can call to access the value\n    string public message;\n\n    // A special function only run during the creation of the contract\n    constructor(string memory initMessage) public {\n        // Takes a string value and stores the value in the memory data storage area,\n        // setting `message` to that value\n        message = initMessage;\n    }\n\n    // A publicly accessible function that takes a string as a parameter\n    // and updates `message`\n    function update(string memory newMessage) public returns (string memory) {\n        message = newMessage;\n        return message;\n    }\n\n    function read() public view returns (string memory) {\n        return message;\n    }\n}\n",
    "sourcePath": "/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol",
    "ast": {
      "absolutePath": "/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol",
      "exportedSymbols": {
        "HelloWorld": [
          36
        ]
      },
      "id": 37,
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
          "id": 36,
          "linearizedBaseContracts": [
            36
          ],
          "name": "HelloWorld",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 3,
              "name": "message",
              "nodeType": "VariableDeclaration",
              "scope": 36,
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
              "scope": 36,
              "src": "535:213:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 26,
                "nodeType": "Block",
                "src": "929:61:0",
                "statements": [
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
                        "name": "message",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "939:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 21,
                        "name": "newMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15,
                        "src": "949:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "939:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 23,
                    "nodeType": "ExpressionStatement",
                    "src": "939:20:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 24,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "976:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 19,
                    "id": 25,
                    "nodeType": "Return",
                    "src": "969:14:0"
                  }
                ]
              },
              "documentation": null,
              "id": 27,
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
                    "scope": 27,
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
                "id": 19,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 18,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 27,
                    "src": "914:13:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 17,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "914:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "913:15:0"
              },
              "scope": 36,
              "src": "856:134:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 34,
                "nodeType": "Block",
                "src": "1048:31:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 32,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "1065:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 31,
                    "id": 33,
                    "nodeType": "Return",
                    "src": "1058:14:0"
                  }
                ]
              },
              "documentation": null,
              "id": 35,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "read",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 28,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1009:2:0"
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
                    "scope": 35,
                    "src": "1033:13:0",
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
                      "src": "1033:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1032:15:0"
              },
              "scope": 36,
              "src": "996:83:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 37,
          "src": "242:839:0"
        }
      ],
      "src": "86:996:0"
    },
    "legacyAST": {
      "absolutePath": "/Users/fabianscherer/Lernen/repos/dApps/hello-world-dApp/onchain/contracts/HelloWorld.sol",
      "exportedSymbols": {
        "HelloWorld": [
          36
        ]
      },
      "id": 37,
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
          "id": 36,
          "linearizedBaseContracts": [
            36
          ],
          "name": "HelloWorld",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 3,
              "name": "message",
              "nodeType": "VariableDeclaration",
              "scope": 36,
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
              "scope": 36,
              "src": "535:213:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 26,
                "nodeType": "Block",
                "src": "929:61:0",
                "statements": [
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
                        "name": "message",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "939:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 21,
                        "name": "newMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15,
                        "src": "949:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "939:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 23,
                    "nodeType": "ExpressionStatement",
                    "src": "939:20:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 24,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "976:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 19,
                    "id": 25,
                    "nodeType": "Return",
                    "src": "969:14:0"
                  }
                ]
              },
              "documentation": null,
              "id": 27,
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
                    "scope": 27,
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
                "id": 19,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 18,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 27,
                    "src": "914:13:0",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 17,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "914:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "913:15:0"
              },
              "scope": 36,
              "src": "856:134:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 34,
                "nodeType": "Block",
                "src": "1048:31:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 32,
                      "name": "message",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3,
                      "src": "1065:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 31,
                    "id": 33,
                    "nodeType": "Return",
                    "src": "1058:14:0"
                  }
                ]
              },
              "documentation": null,
              "id": 35,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "read",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 28,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1009:2:0"
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
                    "scope": 35,
                    "src": "1033:13:0",
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
                      "src": "1033:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1032:15:0"
              },
              "scope": 36,
              "src": "996:83:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 37,
          "src": "242:839:0"
        }
      ],
      "src": "86:996:0"
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
        "transactionHash": "0xd934936e90920ebf765b7813bb347a9571024b97ed6c52ecdc9b50a99e43edbc"
      }
    },
    "schemaVersion": "3.0.17",
    "updatedAt": "2020-04-14T18:54:25.942Z",
    "networkType": "ethereum",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
  }