// TODO: this file! :)
//const number = document.querySelector("#number");
const numberBank = document.querySelector("#numberBank output");
const sortOne = document.querySelector("#sortOne");
const sortAll = document.querySelector("#sortAll");
const sortedNumbers = document.querySelector("#sortedNumber");
const odds = document.querySelector("#odds output");
const evens = document.querySelector("#evens output");
const placement = {
    //number: [],
    numberBank: [], 
    sortOne: [],
    sortAll: [],
    sortedNumbers: [],
    odds: [],
    evens: [],
}
const form = document.querySelector("form");
form.addEventListener("submit",addNum);
const sortButtonOne = document.querySelector("#sortOne");
const sortButtonAll = document.querySelector("#sortAll");
sortButtonOne.addEventListener("click", sortByOne);
sortButtonAll.addEventListener("click", sortByAll);
render();
function render(){
    const txtNum = placement.numberBank.map((number) => {
        const i = document.createElement("i"); 
        const txt = document.createTextNode(number);
        i.appendChild(txt);
        console.log(i);
        return i;
    });
    numberBank.replaceChildren(...txtNum);
    const txtOdd = placement.odds.map((number) => {
        const i = document.createElement("i"); 
        const txt = document.createTextNode(number);
        i.appendChild(txt);
        console.log(i);
        return i;
    });
    odds.replaceChildren(...txtOdd);
    const txtEven = placement.evens.map((number) => {
        const i = document.createElement("i"); 
        const txt = document.createTextNode(number);
        i.appendChild(txt);
        console.log(i);
        return i;
    });
    evens.replaceChildren(...txtEven);
    //const txtOdd = 
    //let i = document.getElementById('number'); 
    //return(txtNum);
}
function addNum(event){
    event.preventDefault();
    const num = event.target.number.value;
    placement.numberBank.push(num);
    render();
    //return;
}
function sortByOne(){
    const sortNum = placement.numberBank.pop();
    if(sortNum % 2 === 0){
        placement.evens.push(sortNum);
    }
    else if(sortNum % 2 === 1){
        placement.odds.push(sortNum);
    }
    else{
        Error();
    }
    render();
}
function sortByAll(){
    while(placement.numberBank.length > 0){
        const allNum = placement.numberBank.pop();
        if(allNum % 2 === 0){
            placement.evens.push(allNum);
        }
        else if(allNum % 2 === 1){
            placement.odds.push(allNum);
        }
        else{
            Error();
        }
    }
    render();
}