
const strToArr = (string) => {
    const msgArr = string.trim().split('');

    return (bool) => {
        return msgArr.map(el => {
            if (bool) {
                return (el.trim().length !== el.length ? true : false)
            }
            else return (el.trim().length !== el.length ? false : true)
        })
    }
}

const hideRandomLetter = (arr, filter=[]) => {
    //console.log('arr: ', arr);
    let indices = [...Array(arr.length).keys()];
    //console.log('initial indices: ', indices);
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i] || filter.includes(i)) {
            const indexOfIndex = indices.indexOf(i);
            indices.splice(indexOfIndex, 1);
        }
    }
    //console.log('cleaned up indices: ', indices);
    if (indices.length > 0) {
        const hideIdx = Math.floor(Math.random() * indices.length);
        //console.log("getting index from within indices: ", indices[hideIdx]);
        const newIndex = indices[hideIdx];
        arr[newIndex] = false;
    }
    return arr;
}

const toggleRndLetter = (arr, bool, filter=[]) => {
    //console.log('arr: ', arr);
    let indices = [...Array(arr.length).keys()];
    //console.log('initial indices: ', indices);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === bool || filter.includes(i)) {
            const indexOfIndex = indices.indexOf(i);
            indices.splice(indexOfIndex, 1);
        }
    }
    //console.log('cleaned up indices: ', indices);
    if (indices.length > 0) {
        const hideIdx = Math.floor(Math.random() * indices.length);
        //console.log("getting index from within indices: ", indices[hideIdx]);
        const newIndex = indices[hideIdx];
        arr[newIndex] = bool;
    }
    return arr;
}

const initializeNewMsg = (arr, filter=[]) => {
    console.log(arr);
    console.log(filter);
    if (filter.length > 0) return arr.map((el, idx) => filter.includes(idx) || el)
    return arr;
}

// const arr = strToArr("aha baha");
// const removedSpaces = arr(true);
// const filter = [0, 4];
// console.log('1:', removedSpaces);
// const initialized = initializeNewMsg(removedSpaces, filter);
// console.log(initialized);
// console.log(toggleRndLetter(initialized, true, filter));
// console.log(initializeNewMsg(removedSpaces, filter));
// console.log(toggleLetter(removedSpaces, true, filter));
// console.log(removedSpaces);
// console.log(hideRandomLetter(removedSpaces, filter));
// console.log(hideRandomLetter(removedSpaces, filter));

const overlapIdx = (oldStr, newStr) => {
    const oldArr = oldStr.split('');
    const newArr = newStr.split('');
    let intersections = [];
    for (let i = 0; i < Math.min(oldArr.length, newArr.length); i++) {
        if (oldArr[i] === newArr[i] && newArr[i] !== " ") intersections.push(i);
    }
    return intersections;
}

// let arr1 = "haha du bis too"
// let arr2 = "lapua uhb a sso"

// console.log(overlapIdx(arr1, arr2));

export {strToArr, hideRandomLetter, overlapIdx, initializeNewMsg, toggleRndLetter} ;