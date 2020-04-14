import React, {useEffect, useState} from 'react';
import './App.css';
import Web3 from 'web3';
import contractAbi from './abi';

const address = "0x2097D66Af507Ab8BDeaC55A931489a5e9df9e921";
const {abi} = contractAbi;
const web3 = new Web3("http://localhost:8545");

const App = () => {

  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const [helloWorldContract, setHelloWorldContract] = useState(new web3.eth.Contract(abi, address));
  
  useEffect(() => {
    helloWorldContract.methods.read().call()
      .then(msg => setMessage(msg))
      .catch(err => console.log(err));
  }, []);

  const handleClick = () => {
    helloWorldContract.methods.update(text).call()
      .then(msg => setMessage(msg))
      .catch(err => console.log(err));
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
      <p>Message: <span>{message}</span></p>
      <input value={text} onChange={handleChange}></input>
      <button onClick={handleClick}>New Message</button>
    </div>
  );
}

export default App;
