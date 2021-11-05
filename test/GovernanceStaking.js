const GovernanceStaking = artifacts.require("GovernanceStaking"); 

contract('GovernanceStaking' , (accounts) => {
it("is able to return 3" , async() => {

const GovernanceStakingInstance = await GovernanceStaking.deployed();
assert.equal(await(GovernanceStakingInstance.func1()) , 3); 

    
});



});
