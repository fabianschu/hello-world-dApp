import React, {useEffect, useState} from 'react';
import './App.css';
import Web3 from 'web3';
import contractAbi from './abi';

const address = "0x2097D66Af507Ab8BDeaC55A931489a5e9df9e921";
const {abi} = contractAbi;
const web3 = new Web3("http://localhost:8545");

const App = () => {

  const [message, setMessage] = useState("");
  const [lastPrice, setLastPrice] = useState();
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const [helloWorldContract] = useState(new web3.eth.Contract(abi, address));
  
  useEffect(() => {
    helloWorldContract.methods.readMessage().call()
      .then(msg => setMessage(msg))
      .catch(err => console.log(err));
    helloWorldContract.methods.readPrice().call()
      .then(price => setLastPrice(price))
      .catch(err => console.log(err));
  }, []);

  const handleClick = () => {
    helloWorldContract.methods.update(text).send({from: "0xcA1a36ad57358F64AC5c052F7373261FAD93E352", value: web3.utils.toWei(number.toString(), "ether")})
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
