# Asset-Tokenization
Solidity/Truffle Project using OpenZeppelin.  
### Project Real World Use Cases : ###
- Tokenization of any Assets as fungible Tokens (ERC20) 
- Creation of Gift Cards/ Vouchers
- Automated Entrance System (Theme Park Coins)
- Creation of new Currency

###  Development Goal ###
- Understand truffle-config json file
- Understand deployment of dApps
- Understand Tokenization using Open-Zeppelin Smart Contracts
- Deeper dive into Unit-Testing
  
### Technologies Used: ###
- Javascript
- VS Code
- Truffle 
- Solidity
- Ganache
- ERC20 Open-Zeppelin Contract

## Sections: ## 
### 1. Introduction ### 
*Fungible vs Non-Fungible Tokens -*
Real world assets (anything from coins to houses to gifts or cars) can be mapped to tokens in a blockchain. Some of the tokens are interchangable unlike others

Non-Fungible Tokens  | Fungible Tokens
------------- | -------------
Non-Interchangable  | Interchangable
Unique  |  Uniform
Non Divisible | Divisible
ERC-721 Standard | ERC-20 or ERC-777

*Implementable path*

1. ERC20 Token Creation
2. Initial Supply to Owner
3. Initial Supply to Crowdsale Contract 
5. Buy Token
6. Send MOney to Crowdsale Smart Contract
7. Get Token

![picture alt](https://drive.google.com/file/d/18Zjycf5eU3irqaQjD519V52LCEJq91oy/view?usp=sharing "Title is optional")

*Other Token Considerations*
- Price and Rate Configuration
- Fixed/flexible price
- does price change over time or as a function of demand
- Emission
- How is token actually sent to participants
- Validation- who is allowed to purchase tokens
- Are there KYC/ AML Checks?
- Is there a max cap on tokens
- What is that cap is per-participant
- Is there a starting and ending time frame
- Distribution
- Does distribution happen in realtime or after crowdsale
- Can Participants recieve refund if goal is not met

### 3. Local Development with Truffle ### 
### 4. In-Depth Truffle-Config file using Mnemonics ### 
### 5. Deployment to Public Networks or Consortium Network ### 
