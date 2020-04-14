import React, {useEffect, useState} from 'react';
import './App.css';
import Web3 from 'web3';
import contractAbi from './abi';

const address = "0xa0b650b96452381b7661a9495933BF8fFd7ccdD2";
const {abi} = contractAbi;
const web3 = new Web3("http://localhost:8545");

const App = () => {

  const [helloWorldContract, setHelloWorldContract] = useState(new web3.eth.Contract(abi, address));
  
  useEffect(() => {
    web3.eth.getAccounts().then(console.log);
    console.log(helloWorldContract.methods.read().call());
  }, [])

  const handleClick = () => {

  }

  return (
    <div>
      <p>hi</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
