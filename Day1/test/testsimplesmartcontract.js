// import the contract artifacts
const SimpleSmartContract = artifacts.require("SimpleSmartContract");

Contract("SimpleSmartContract", () => {
    it("should be deployed", async () => {
        const simplesmartcontract = await SimpleSmartContract.deployed();
        // console.log(simplesmartcontract);
        assert(simplesmartcontract.address !== "");
    })
})

// always remove all console.log
// note that for every it block you must deploy instance of the contract line 6