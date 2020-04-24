import React, {useEffect, useState} from 'react';
import './App.css';
import Web3 from 'web3';
import contractAbi from './abi';
import styled from 'styled-components';
import {strToArr, hideRandomLetter, overlapIdx, initializeNewMsg, toggleRndLetter} from './helpers/helpers';

let web3js;

// ganache:
const address = "0x2097D66Af507Ab8BDeaC55A931489a5e9df9e921";
const {abi} = contractAbi;
web3js = new Web3("http://localhost:8545");

// styling:
const DarkContainer = styled.div`
    background-image: radial-gradient(circle, #000000, #090200, #0d0500, #0a0a00, #001001);
    min-height: 100vh;
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .message {
        text-align: center;
    }
`;

const NeonLetter = styled.span`
    margin: 0;
    font-family: Lato;
    font-size: 10rem;
    color: white;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
    visibility: ${props => props.visible ? "default" : "hidden"};
`

const MainView = () => {

    const [userAccount, setUserAccount] = useState();
    const [helloWorldContract, setHelloWorldContract] = useState(new web3js.eth.Contract(abi, address));

    const [onChainMsg, setOnChainMsg] = useState();
    const [onChainPrice, setOnChainPrice] = useState();

    const [msgVisibility, setMsgVisibility] = useState();

    const [txt, setTxt] = useState("");
    const [num, setNum] = useState("");

    const [isHiding, setIsHiding] = useState(false);
    const [isShowing, setIsShowing] = useState(true);

    const [newOnChainMsg, setNewOnChainMsg] = useState("");
    const [stableIdxArr, setStableIdxArr] = useState([]);

    useEffect(() => {

        //check for Metamask & set user
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            window.ethereum.enable();
            web3js.eth.getAccounts()
                .then(array => setUserAccount(array[0]))
                .catch(err => console.log(err));
        } else {
            console.log('You need Metamask!');
        }

        //read data from blockchain
        helloWorldContract.methods.readMessage().call()
            .then(msg => {
                setOnChainMsg(msg);
                const showMsgSpaces = strToArr(msg);
                const spacesActivated = showMsgSpaces(true);
                setMsgVisibility(spacesActivated);
                setIsShowing(true);
            })
            .catch(err => console.log("Error when reading msg from Blockchain: ", err));
        helloWorldContract.methods.readPrice().call()
            .then(price => setOnChainPrice(parseInt(web3js.utils.fromWei(price.toString(), "ether"))))
            .catch(err => console.log("Error when reading price from Blockchain: ", err))
    }, [])

    //managing the mounting animation
    useEffect(() => {
        console.log('new msg: ', onChainMsg);
        //initial msg retrieving:
        if (onChainMsg) {
            //TODO: animate
            setIsHiding(false);
            setIsShowing(true);
        }

    }, [onChainMsg]);

    //animation
    useEffect(() => {
        let interval = null;
        if((isHiding && msgVisibility) && msgVisibility.includes(true)) {
            console.log('msgVisibility: ', msgVisibility);
            console.log('stableIdxArr: ', stableIdxArr);
            if (msgVisibility.filter(el => el === true).length > stableIdxArr.length) {
                interval = setTimeout(() => {
                    const newVisibility = toggleRndLetter([...msgVisibility], false, stableIdxArr);
                    setMsgVisibility(newVisibility);
                }, 1000)
            }
        } else if ((!isHiding && msgVisibility) && msgVisibility.includes(true)) {
            clearTimeout(interval);
        } else {
            setIsHiding(false);
        }
        return () => clearTimeout(interval);
    }, [isHiding, msgVisibility]);

    useEffect(() => {
        console.log('true')
        let interval = null;
        if((isShowing && msgVisibility) && msgVisibility.includes(false)) {
            console.log('true2')
            if (msgVisibility.filter(el => el === true).length !== onChainMsg.length) {
                console.log('true3');
                interval = setTimeout(() => {
                    const newVisibility = toggleRndLetter([...msgVisibility], true, stableIdxArr);
                    setMsgVisibility(newVisibility);
                }, 1000)
            }
        } else if ((!isShowing && msgVisibility) && msgVisibility.includes(false)) {
            clearTimeout(interval);
        } else {
            setIsShowing(false);
        }
        return () => clearTimeout(interval);
    }, [isShowing, msgVisibility])


    const hide = (bool) => {
        const showMsgSpaces = strToArr(onChainMsg);
        if(!isHiding) setMsgVisibility(showMsgSpaces(!bool));
        setIsHiding(bool);
    }

    //submission
    const handleSubmission = () => {
        web3js.eth.getAccounts()
            .then(accounts => web3js.eth.getBalance(accounts[0]))
            .then(balance => {
                balance = parseFloat(web3js.utils.fromWei(balance.toString(), "ether"));
                if (parseFloat(num) <= onChainPrice) {
                    console.log('pay more!')
                    //TODO: show some kind of message
                    return;
                }
                if (balance < parseFloat(num)) {
                    console.log('you dont have enough ether')
                    //TODO: show some kind of message
                    return;
                }
                //TODO: initialize animation
                //setNewOnChainMsg(txt);
                setStableIdxArr(overlapIdx(onChainMsg, txt));
                hide(true);

                helloWorldContract.methods
                    .update(txt)
                    .send({from: userAccount, value: parseInt(web3js.utils.toWei(num, "ether"))})
                    .on("receipt", (receipt) => {
                        const newMsg = receipt.events.NewMessage.returnValues.message;
                        setOnChainMsg(newMsg);
                        setStableIdxArr(overlapIdx(onChainMsg, newMsg));
                        setOnChainPrice(parseInt(web3js.utils.fromWei(receipt.events.NewMessage.returnValues.currentPrice.toString(), "ether")));
                        const showMsgSpaces = strToArr(newMsg);
                        const spacesTrue = showMsgSpaces(true);
                        //console.log(spacesTrue);
                        console.log(stableIdxArr);
                        const initializedVis = initializeNewMsg(spacesTrue, overlapIdx(onChainMsg, newMsg));
                        //console.log(initializedVis);
                        setMsgVisibility(initializedVis);
                    })
                    .on("error", (error) => {
                        console.log(error);
                    })
            })
    }
    
    //input handling
    const handleTxtChange = (event) => {
        setTxt(event.target.value);
    }
    const handleNumChange = (event) => {
        setNum(event.target.value);
    }

    console.log(msgVisibility);
    console.log(onChainMsg);
    console.log(newOnChainMsg);
    console.log(stableIdxArr);
    console.log('hiding: ', isHiding);
    console.log('showing: ', isShowing);

    return (
        <>
            <DarkContainer>
                <p className="message">
                {(onChainMsg && msgVisibility) && onChainMsg.split('').map((el, idx) => {
                    return <NeonLetter id={`${idx}`} key={idx} visible={msgVisibility[idx]}>{el}</NeonLetter>
                })}
                </p>
            </DarkContainer>
            <div>
                <input type="text" value={txt} onChange={handleTxtChange}></input>
                <input type="number" value={num} onChange={handleNumChange}></input>
                <button onClick={handleSubmission}>New Message</button>
                <button onClick={() => hide(true)}>Start Hiding</button>
                <button onClick={() => hide(false)}>Stop Hiding</button>
                <p>Price: <span>{onChainPrice && web3js.utils.fromWei(onChainPrice.toString(), "ether")}</span></p>
            </div>
        </>
    )
}

export default MainView
