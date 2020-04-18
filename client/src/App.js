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
      //web3js.eth.getAccounts().then(array => setUserAccount(array[0])).catch(err => console.log(err));
    } else {
      console.log('blub')
    }

    console.log(helloWorldContract);

    helloWorldContract.methods.readMessage().call()
      .then(msg => setMessage(msg))
      .catch(err => {
        console.log('buha')
        console.log(err)
      });
    // helloWorldContract.methods.readPrice().call()
    //   .then(price => setLastPrice(price))
    //   .catch(err => console.log(err));
  }, []);


  const update = (text, number) => {
    console.log(text, number)
    helloWorldContract.methods.update(text).send({from: userAccount, value: web3js.utils.toWei(number.toString(), "ether")})
      .on('receipt', function(receipt){
        console.log(receipt)
      })
      .on('confirmation', function(confirmation){
        console.log(confirmation)
      })
      .then(() => helloWorldContract.methods.readMessage().call())
      .then((res) => setMessage(res))
      .then(() => helloWorldContract.methods.readPrice().call())
      .then((res) => setLastPrice(res))
      .catch(err => console.log(err));
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
