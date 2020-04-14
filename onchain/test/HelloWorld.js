const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
    //1. initialize accounts
    let [alice, bob] = accounts;

    it("is set up with the initial message 'bananarama' ", async () => {
        const contractInstance = await HelloWorld.new('bananarama');
        const msg = await contractInstance.read();
        assert.equal(msg, 'bananarama');
    })

    it("message can be changed", async () => {
        const contractInstance = await HelloWorld.new('bananarama');
        await contractInstance.update('papaya papaya', {from: alice});
        const msg = await contractInstance.read();
        assert.equal(msg, 'papaya papaya');
    })
})