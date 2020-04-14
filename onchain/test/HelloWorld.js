const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
    //1. initialize accounts
    let [alice, bob] = accounts;

    it("is set up with the initial message 'bananarama' ", async () => {
        const contractInstance = await HelloWorld.new('bananarama');
        const msg = await contractInstance.readMessage();
        assert.equal(msg, 'bananarama');
    })

    xit("message can be changed", async () => {
        const contractInstance = await HelloWorld.new('bananarama');
        await contractInstance.update('papaya papaya', {from: alice});
        const msg = await contractInstance.read();
        assert.equal(msg, 'papaya papaya');
    })

    it("message can be changed if the payment is larger", async () => {
        const contractInstance = await HelloWorld.new('bananarama');
        await contractInstance.update('papaya papaya', {value: 50});
        const msg = await contractInstance.readMessage();
        assert.equal(msg, 'papaya papaya');
    })

    it("price changes after new message", async () => {
        const contractInstance = await HelloWorld.new('bananarama');
        await contractInstance.update('papaya papaya', {value: 1800000000000000000000});
        const newPrice = await contractInstance.readPrice();
        assert.equal(newPrice, 1800000000000000000000);
    })
})