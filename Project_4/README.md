## Project overview (by Udacity rubric specification)
Based on the third project, the challenge proposed is build an Notary Service with NodeJS and blockchain libraries

## Why this project?
This project introduces a storage of digital assets.

Using your own private blockchain to create a web API that attend the prereqs: Blockchain Wallet Address
,Star Block Hash and Star Block Height

## What will I learn?
You will learn to create and manage a web API with a Node.js framework to interact with your private blockchain. You’ll get second hand experience generating API endpoints and configuring the endpoints with validations.

This project helps build on the skills you learned in Lesson 1, Lesson 2, and Lesson 3. You will be apply these skills using real world technologies to get hands on with the tools used to create web API's.

## How does this help my career?
Understanding web API's and ways to create them will help you build user applications later in the program. These applications will serve as great portfolio items for potential employers.

## Project specification

https://review.udacity.com/#!/rubrics/2098/view
---

## Framework used
bitcoinjs-message
compression
express
crypto-js
level
## Getting Started

Open a command prompt or shell terminal after install node.js and execute:

```
npm install
```

## Running

```
npm start
```

## Endpoint description

### 1. Blockchain ID validation request

**Method**

```
POST
```

**Endpoint**

```
http://localhost:8000/requestValidation
```

**Parameters**

```
address - A bitcoin address, you can take it from your project1
```

### 2. Blockchain ID message signature validation

**Method**

```
POST
```

**Endpoint**

```
http://localhost:8000/message-signature/validate
```

**Parameters**

```
address - The addres that you used in last step
signature - You can take it from the Electrum wallet (see below) or make it by code (see test/index.test.js)
```

### 3. Star registration

**Method**

```
POST
```

**Endpoint**

```
http://localhost:8000/block
```

**Parameters**

```
address - The addres that you used in last step
star - Containing dec, ra and story (max 500 bytes)
```

### 4. Get block by height

**Method**

```
GET
```

**Endpoint**

```
http://localhost:8000/block/:height
```

**Parameters**

```
height - The height of block
```
### 6. Get block by address

**Method**

```
GET
```

**Endpoint**

```
http://localhost:8000/stars/address:address
```

**Parameters**

```
address - The address used so far
```
### 5. Get block by hash

**Method**

```
GET
```

**Endpoint**

```
http://localhost:8000/stars/hash:hash
```

**Parameters**

```
hash - The hash of one block created beforenpm

Referência do trabalho:

- Udacity Project4 Concepts section
- Udacity nanodegree slack
- http://www.darrenbeck.co.uk/blockchain/nodejs/nodejscrypto/
- https://github.com/bitcoinjs/bitcoinjs-message
- https://bitcoin.stackexchange.com/questions/49946/understanding-signing-messages-with-bitcoinjs-lib

