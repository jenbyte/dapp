import Web3 from 'web3';

const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      // New MetaMask & Dapp browsers
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          resolve(web3);
        } catch (error) {
          reject(error);
        }
        // Old MetaMask / Other
      } else if (window.web3) {
        resolve(window.web3);
      } else {
        //External (Obtain new token for production)
        const provider = new Web3.providers.HttpProvider('http://0.0.0.0:8845');
        const web3 = new Web3(provider);
        resolve(web3);
      }
    });
  });
};

export default getWeb3;
