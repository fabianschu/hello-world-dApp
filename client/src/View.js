import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-image: radial-gradient(circle, #000000, #090200, #0d0500, #0a0a00, #001001);
    min-height: 100vh;
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .centered{
        text-align: center;
    }
`; 

const Neonletter = styled.span`
    margin: 0;
    font-family: Lato;
    font-size: 10rem;
    color: white;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
    visibility: ${props => props.visible ? "default" : "hidden"};
`; 

const View = (props) => {

    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");
    const [visibility, setVisibility] = useState(new Array(props.message.length).fill(true));
    const [removeTimeoutState, setRemoveTimeoutState] = useState();

    const {message, lastPrice, update} = props

    const handleTextChange = (event) => {
        setText(event.target.value);
      }
    
    const handlePaymentChange = (event) => {
    setNumber(event.target.value);
    }

    const handleClick = () => {
        update(text, number);
    }

    useEffect(() => {
        if (removeTimeoutState && visibility.includes(true)) {
            const myTimer = setTimeout(() => {
                let arr = [...visibility];
                let hideIdx = Math.floor(Math.random() * arr.length);
                while (!arr[hideIdx]) {
                    hideIdx = Math.floor(Math.random() * arr.length);
                }
                arr[hideIdx] = false;
                setVisibility(arr);
                setRemoveTimeoutState(myTimer);
            }, 500)
        } else {
            console.log('all good')
        }
    }, [removeTimeoutState])

    const hideLetters = () => {
        const arr = [...visibility];
        const whiteSpaceIdx = getIndices([...message], " ");
        const deactivatedWhiteSpaces = arr.map((el, idx) => {
            if (whiteSpaceIdx.includes(idx)) return false  
            return true
        })
        setVisibility(deactivatedWhiteSpaces);
        setRemoveTimeoutState(1);
    }

    const showLetters = (msg) => {
        const whiteSpaceIdx = getIndices(msg.split(''), " ");
    }

    const getIndices = (arr, sym, res=[]) => {
        while(arr.indexOf(sym, (res[0] ? res[res.length - 1] + 1 : 0)) !== -1) {
            const idx = arr.indexOf(sym, (res[0] ? res[res.length - 1] + 1 : 0));
            res.push(idx)
            getIndices(arr, sym, res)
        }
        return res;
    }

    return (
        <>
        <Background>
            <p className="centered">
            {message.split('').map((el, idx) => {
                return <Neonletter id={`${idx}`} key={idx} visible={visibility[idx]}>{el}</Neonletter>
            })}
            </p>
        </Background>
        <input type="text" value={text} onChange={handleTextChange}></input>
            <input type="number" value={number} onChange={handlePaymentChange}></input>
            <button onClick={(text, number) => handleClick(text, number)}>New Message</button>
            <button onClick={hideLetters}>Start Hiding</button>
            <p>Price: <span>{lastPrice}</span></p>
        </>
    )
}

export default View;
