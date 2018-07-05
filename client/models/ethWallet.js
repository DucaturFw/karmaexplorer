
import Web3 from 'web3';
const abi = require('./ducatur.abi.json');

const SUCCESS_STATUS = 'success';
const LOGIN_STATUS = 'login';
const MISS_STATUS = 'miss';
const GOOD_NETWORK_STATUS = 'good_newtwork';
const BAD_NETWORK_STATUS = 'bad_newtwork';

let localWeb3,
  contractInstance,
  status,
  userAccount;

export default {
  init: function () {
    return this.getNetwork().then(() => {
      contractInstance = new localWeb3.eth.Contract(abi, ethContractAddress);
      console.log("Contract methods: ", contractInstance.methods);
      console.log("Contract events: ", contractInstance.events);
      this.updateAccount();
    })
  },

  getNetwork() {
    return new Promise((res, rej) => {
      if (typeof web3 !== 'undefined') {
        this.resolveNetwork()
          .then(() => {
            localWeb3 = new Web3(web3.currentProvider);
            status = LOGIN_STATUS;

            res(status);
          })
          .catch(() => {
            status = MISS_STATUS;

            rej(status)
          });
      } else {
        status = MISS_STATUS;

        res(status);
      }
    });
  },

  updateAccount: function () {
    userAccount = web3.eth.defaultAccount;
  },

  resolveNetwork() {
    return new Promise((res, rej) => {
      web3.version.getNetwork((err, netId) => {
        console.log(netId);
        // Check Rinkeby Network
        if (netId == 4) {
          status = GOOD_NETWORK_STATUS;
          res();
        } else {
          status = BAD_NETWORK_STATUS;
          rej();
        }
      })
    });
  },

  exchange({quantity, blockchain, to}) {
    const amount = web3.toWei(quantity),
      bc = blockchain,
      toHex = web3.toHex(to);

    console.log('eth exchange', amount, bc, toHex, userAccount);

    return new Promise((res, rej) => {
      contractInstance.methods.blockchainExchange(amount, bc, toHex)
        .send({
          from: userAccount,
          gasPrice: "0x098bca5a00",
          gasLimit: "0x57d8"
        })
        .on("receipt", receipt => res(receipt))
        .on("error", error => rej(error));
    })
  }
}