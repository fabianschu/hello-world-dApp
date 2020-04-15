import React, {useEffect, useState} from 'react';
import './App.css';
import Web3 from 'web3';
import contractAbi from './abi';

const address = "0x427072875ca9de9B61D9c81Da91F1695EdcaC319";
const {abi} = contractAbi;
let web3js;
web3js = new Web3(Web3.givenProvider);

const App = () => {

  const [message, setMessage] = useState("");
  const [lastPrice, setLastPrice] = useState();
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

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
      .catch(err => console.log(err));
    helloWorldContract.methods.readPrice().call()
      .then(price => setLastPrice(price))
      .catch(err => console.log(err));
  }, []);

  const handleClick = () => {
    helloWorldContract.methods.update(text).send({from: userAccount, value: web3js.utils.toWei(number.toString(), "ether")})
      .then(() => helloWorldContract.methods.readMessage().call())
      .then((res) => setMessage(res))
      .then(() => helloWorldContract.methods.readPrice().call())
      .then((res) => setLastPrice(res))
      .catch(err => console.log(err));
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handlePaymentChange = (event) => {
    setNumber(event.target.value);
  }

  return (
    <div>
      <p>Message: <span>{message}</span></p>
      <p>Price: <span>{lastPrice}</span></p>
      <input type="text" value={text} onChange={handleTextChange}></input>
      <input type="number" value={number} onChange={handlePaymentChange}></input>
      <button onClick={handleClick}>New Message</button>
    </div>
  );
}

export default App;
