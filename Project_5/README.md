## Project overview

Build additional functionality with your smart contract and deploy it on the public testnet to create a DApp.

## Project specification 

https://review.udacity.com/#!/rubrics/2297/view

## console output
Compiling .\contracts\ERC721.sol...
Compiling .\contracts\ERC721Token.sol...
Compiling .\contracts\Migrations.sol...
Compiling .\contracts\StarNotary.sol...
Compiling openzeppelin-solidity/contracts/token/ERC721/ERC721.sol...
Compiling openzeppelin-solidity\contracts\introspection\ERC165.sol...
Compiling openzeppelin-solidity\contracts\introspection\IERC165.sol...
Compiling openzeppelin-solidity\contracts\math\SafeMath.sol...
Compiling openzeppelin-solidity\contracts\token\ERC721\IERC721.sol...
Compiling openzeppelin-solidity\contracts\token\ERC721\IERC721Receiver.sol...
Compiling openzeppelin-solidity\contracts\utils\Address.sol...

Compilation warnings encountered:

/C/Users/bruno/Documents/Udacity/project-5-besm-v2/smart_contracts/contracts/ERC721Token.sol:59:31: Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable {
                              ^-----------^
,/C/Users/bruno/Documents/Udacity/project-5-besm-v2/smart_contracts/contracts/ERC721Token.sol:59:46: Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable {
                                             ^---------^
,/C/Users/bruno/Documents/Udacity/project-5-besm-v2/smart_contracts/contracts/ERC721Token.sol:59:59: Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable {
                                                          ^--------------^
,/C/Users/bruno/Documents/Udacity/project-5-besm-v2/smart_contracts/contracts/ERC721Token.sol:59:77: Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable {
                                                                            ^--------^
,/C/Users/bruno/Documents/Udacity/project-5-besm-v2/smart_contracts/contracts/ERC721Token.sol:69:31: Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable {
                              ^-----------^
,/C/Users/bruno/Documents/Udacity/project-5-besm-v2/smart_contracts/contracts/ERC721Token.sol:69:46: Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable {
                                             ^---------^
,/C/Users/bruno/Documents/Udacity/project-5-besm-v2/smart_contracts/contracts/ERC721Token.sol:69:59: Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable {
                                                          ^--------------^

Writing artifacts to .\build\contracts

Using network 'rinkeby'.

Running migration: 1_initial_migration.js
  Replacing Migrations...
  ... 0xf467d959390293ecb57e7d8e6efb8b987d97b99287f74fbcf78a6c058f05d668
  Migrations: 0xdf2af6add0deab4ce758fd7639e52042dc55a5af
Saving successful migration to network...
  ... 0x3467b59a4a100c409b4faaa76cec98f8b819acc9cfc35d5dd05d0705b4bb8e3a
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Replacing StarNotary...
  ... 0xd1f4d6983c4485bd1b2900d186d1c642c40f0a1b5734d4b7341d3f9c9c11cae0
  StarNotary: 0x40ca537fedadd8ae4c162b9b756ceaeb89495ee0
Saving successful migration to network...
  ... 0x6056bd8ab27fea760b52c91781bf7b9c5dae6aaff5be810e69fd6544dcebe358
Saving artifacts...

## contract address
0x40ca537fedadd8ae4c162b9b756ceaeb89495ee0
https://rinkeby.etherscan.io/address/0x40ca537fedadd8ae4c162b9b756ceaeb89495ee0

## contract hash
0xd1f4d6983c4485bd1b2900d186d1c642c40f0a1b5734d4b7341d3f9c9c11cae0
https://rinkeby.etherscan.io/tx/0xd1f4d6983c4485bd1b2900d186d1c642c40f0a1b5734d4b7341d3f9c9c11cae0

## transaction hash
0xce11aabe8ed3ec1a1b45f6e080a6be3ed721e1fca53ee76464af5c8d2c2a5606
https://rinkeby.etherscan.io/tx/0xce11aabe8ed3ec1a1b45f6e080a6be3ed721e1fca53ee76464af5c8d2c2a5606

## star tokenId
1

## Udacity honor code

Giving credits for places that helped me to do this project

- https://walkingtree.tech/blockchain/deploying-a-smart-contract-in-rinkeby-using-infura/
- Udacity concepts section
- Udacity Decentralized Star Notary Project at: https://study-hall.udacity.com/sg-562321-1911/rooms/community:nd1309:562321-cohort-1911-project-2297
