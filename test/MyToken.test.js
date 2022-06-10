const Token=artifacts.require("MyToken.sol")

// const { expect } = require("chai");
var chai=require("chai");
const BN=web3.utils.BN;
const chaiBN= require("chai-bn")(BN);
chai.use(chaiBN);

var chaiAsPromised=require("chai-as-promised")
chai.use(chaiAsPromised);

const expect=chai.expect;
const { assert } = require("console");
const { isTypedArray } = require("util/types");

contract("Token Test", async (accounts)=>{

    const[deployerAccount, recipient, anotherAccount]= accounts

   it("all tokens should be in my account", async ()=>{
    let instance= await Token.deployed();
    let totalSupply= await instance.totalSupply();
    //let balance= await instance.balanceOf(accounts[0]);
    // assert.equal(balance.valueOf(), initialSupply.valueOf, "the balance was equal")
    expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply);
   })

   it("is not possible to send more than maximum tokens betweek accounts", async ()=>{
       let instance= await Token.deployed();
       let balanceOfDeployer= await instance.balanceOf(deployerAccount);

       expect(instance.transfer(recipient,new BN(balanceOfDeployer+1))).to.eventually.be.rejected;
       expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(balanceOfDeployer);
   })

   it("is possible to send tokens between accounts", async ()=>{
    const sendTokens=1
    let instance= await Token.deployed();
    let totalSupply= await instance.totalSupply();
    expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply);
    expect(instance.transfer(recipient, sendTokens)).to.be.fulfilled;
    expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply.sub(new BN(sendTokens)));
    expect(instance.balanceOf(recipient)).to.eventually.be.a.bignumber.equal(new BN(sendTokens));
   })
})