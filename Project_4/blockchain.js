/* ===== SHA256 with Crypto-js ===============================
|  Learn more: Crypto-js: https://github.com/brix/crypto-js  |
|  =========================================================*/
const SHA256 = require('crypto-js/sha256');
const Block = require('./block')
/*1 - Variables to persist data*/
const db = require('level')('./data/chain')

/* ===== Blockchain Class ==========================
|  Class with a constructor for new blockchain 		|
|  ================================================*/

class Blockchain {
  constructor() {
    /* 2 - Create a Genesis block if doesn't exists (all data persist using promises) */
    this.getBlockHeight().then((height) => {
      if (height === -1) {
        this.addBlock(new Block("Genesis block")).then(() => console.log("Genesis block added!"));
      }
    })
  }

  // Add new block - changed to async
async addBlock(newBlock){

		const height = parseInt(await this.getBlockHeight());

    newBlock.height = height + 1;
    newBlock.time = new Date().getTime().toString().slice(0, -3);

    if (newBlock.height > 0) {
      const previousBlock = await this.getBlock(height);
      newBlock.previousBlockHash = previousBlock.hash;
      console.log(`Hash anterior: ${newBlock.previousBlockHash}`);
    }
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    console.log(`Novo hash ${newBlock.hash}`);

    await this.addBlockToDB(newBlock.height, JSON.stringify(newBlock));
  }

// Get block height - changed to retrive current block on LevelDB
async getBlockHeight() {
	return await this.getBlockHeightFromDB();
}

// get block - changed to async
async getBlock(blockHeight) {
  return await this.getBlockByHeight(blockHeight)
}

// validate block - changed to async
async validateBlock(blockHeight) {
  let block = await this.getBlock(blockHeight);
  let blockHash = block.hash;
  block.hash = '';

  let validBlockHash = SHA256(JSON.stringify(block)).toString();

  if (blockHash === validBlockHash) {
      return true;
    } else {
      console.log(`Bloco #${blockHeight} com hash invalido: ${blockHash} <> ${validBlockHash}`);
      return false;
    }
}

// Validate blockchain - changed to async
async validateChain() {
	let errorLog = [];
	let previousHash = '';
	let isValidBlock = false;

	const heigh = await this.getBlockHeightFromDB();

	for (let i = 0; i < heigh; i++) {
	 this.getBlock(i).then((block) => {
		 isValidBlock = this.validateBlock(block.height);

		 if (!isValidBlock) {
			 errorLog.push(i);
		 }

		 if (block.previousBlockHash !== previousHash) {
			 errorLog.push(i);
		 }

		 previousHash = block.hash;

		 if (i === (heigh -1)) {
			 if (errorLog.length > 0) {
				 console.log(`Bloco com erros = ${errorLog.length}`);
				 console.log(`Blocos: ${errorLog}`);
			 } else {
				 console.log('Nenhum erro encontrado');
			 }
		 }
	 })
	}
}

/* Functions from levelSandbox.js */
/* Changed to promises*/
async addBlockToDB(key, value) {
	 return new Promise((resolve, reject) => {
		 db.put(key, value, (error) => {
			 if (error) {
				 reject(error);
			 }

			 console.log(`Added block #${key}`);
			 resolve(`Added block #${key}`);
		 })
	 })
 }

  async getBlockHeightFromDB () {
    return new Promise((resolve, reject) => {
      let height = -1

      db.createReadStream().on('data', (data) => {
        height++
      }).on('error', (error) => {
        return reject(error)
      }).on('close', () => {
        return resolve(height)
      })
    })
  }
  
  async getBlockByHeight (key) {
    return new Promise((resolve, reject) => {
      db.get(key, (error, value) => {
        if (value === undefined) {
          return reject('Not found')
        } else if (error) {
          return reject(error)
        }

        value = JSON.parse(value)

        if (parseInt(key) > 0) {
          value.body.star.storyDecoded = new Buffer(value.body.star.story, 'hex').toString()
        }

        return resolve(value)
      })
    })
  }

  async getBlockByHash (hash) {
    let block

    return new Promise((resolve, reject) => {
      db.createReadStream().on('data', (data) => {    
        block = JSON.parse(data.value)
        
        if (block.hash === hash) {
          if (!this.isGenesis(data.key)) {
            block.body.star.storyDecoded = new Buffer(block.body.star.story, 'hex').toString()
            return resolve(block)
          } else {
            return resolve(block)
          }
        }
      }).on('error', (error) => {
        return reject(error)
      }).on('close', () => {
        return reject('Not found')
      })
    })
  }
  
  async getBlocksByAddress (address) {
    const blocks = []
    let block

    return new Promise((resolve, reject) => {
      db.createReadStream().on('data', (data) => {
        // Não checar Genesis Block
        if (!this.isGenesis(data.key)) {
          block = JSON.parse(data.value)

          if (block.body.address === address) {
            block.body.star.storyDecoded = new Buffer(block.body.star.story, 'hex').toString()
            blocks.push(block)
          }
        }
      }).on('error', (error) => {
        return reject(error)
      }).on('close', () => {
        return resolve(blocks)
      })
    })
  }

  isGenesis (key) {
    return parseInt(key) === 0
  }
}

module.exports = Blockchain;
