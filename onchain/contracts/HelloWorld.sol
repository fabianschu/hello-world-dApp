// Specifies that the source code is for a version
// of Solidity greater than 0.5.10
pragma solidity ^0.5.9;

// A contract is a collection of functions and data (its state)
// that resides at a specific address on the Ethereum blockchain.
contract HelloWorld {

    // The keyword "public" makes variables accessible from outside a contract
    // and creates a function that other contracts or SDKs can call to access the value
    string public message;
    uint public currentPrice;
    event NewMessage(string message, uint currentPrice);

    // A special function only run during the creation of the contract
    constructor(string memory initMessage) public {
        // Takes a string value and stores the value in the memory data storage area,
        // setting `message` to that value
        message = initMessage;
        currentPrice = 0;
    }

    // A publicly accessible function that takes a string as a parameter
    // and updates `message`
    function update(string memory newMessage) public payable returns (string memory) {
        require(
            msg.value > currentPrice,
            "Insufficient payment"
        );
        currentPrice = msg.value;
        message = newMessage;
        emit NewMessage(message, currentPrice);
        return message;
    }

    function readMessage() public view returns (string memory) {
        return message;
    }

    function readPrice() public view returns (uint) {
        return currentPrice;
    }
}
