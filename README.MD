# HOW TO RUN

## Go into the *onchain* directory
1. Fire up a local Ganache blockchain
2. Run: truffle migrate
3. Note the contract address 
4. Go to build/contracts and copy the content of HelloWorld.json (=the contract ABI)

## Go into the *client* directory
5. Copy the contract ABI into client/src/abi.js
6. Copy the contract address in App.js in the address variable
7. Run: npm start