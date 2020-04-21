import React, {useEffect, useState} from 'react';
import View from './View';
import './App.css';
import Web3 from 'web3';
import contractAbi from './abi';

process.on('warning', e => console.warn(e.stack)); 
// rinkeby:
// const address = "0x427072875ca9de9B61D9c81Da91F1695EdcaC319";
//web3js = new Web3(Web3.givenProvider);

// ganache:
const address = "0x2097D66Af507Ab8BDeaC55A931489a5e9df9e921";
const {abi} = contractAbi;
let web3js;
web3js = new Web3("http://localhost:8545");


const App = () => {

  const [message, setMessage] = useState();
  const [lastPrice, setLastPrice] = useState();

  const [helloWorldContract, setHelloWorldContract] = useState(new web3js.eth.Contract(abi, address));
  const [userAccount, setUserAccount] = useState();
  
  useEffect(() => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      web3js.eth.getAccounts().then(array => setUserAccount(array[0])).catch(err => console.log(err));
    } else {
      console.log('blub')
    }

    helloWorldContract.methods.readMessage().call()
      .then(msg => setMessage(msg))
      .catch(err => {
        console.log('buha')
        console.log(err)
      });
    
    // web3js.eth.subscribe("logs", {address: address}, (res, err) => console.log(res))
    //   .on("data", event => console.log(event))
    // helloWorldContract.events.NewMessage()
    //   .on("data", (event) => console.log(event))
    //   .on("error", (error) => console.log(error))
    // helloWorldContract.methods.readPrice().call()
    //   .then(price => setLastPrice(price))
    //   .catch(err => console.log(err));
  }, []);


  const update = (text, number) => {

    web3js.eth.getAccounts()
    .then(accounts => web3js.eth.getBalance(accounts[0]))
    .then(balance => {
        balance = parseInt(balance);
        const price = parseInt(web3js.utils.toWei(number.toString(), "ether"))
        console.log(price, balance);
        if (balance >= price) {
          console.log('yes')
          return new Promise((resolve,reject) => {
            helloWorldContract.methods
              .update(text)
              .send({from: userAccount, value: web3js.utils.toWei(number.toString(), "ether")})
              .on("receipt", (receipt) => {
                resolve(receipt);
                setMessage(receipt.events.NewMessage.returnValues.message);
                setLastPrice(receipt.events.NewMessage.returnValues.currentPrice);
              })
              .on("error", (error) => {
                console.log(error)
                reject(error);
              })
          })
        } else {
          return
          console.log("you don' have enough ether")
        }
    })
}

  return (
    <>
    {message && <View 
      message={message}
      lastPrice={lastPrice}
      update={update}
      />}
    </>
  );
}

export default App;
