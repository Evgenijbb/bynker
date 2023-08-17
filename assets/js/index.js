import name from "./name.js";
import prof from "./prof.js";
let inputName=document.querySelector(".name");
let btnGenerate=document.querySelector(".header-button");
let title=document.querySelector(".main-title");
let persone=document.querySelector(".main-person");
let itm=document.querySelectorAll(".person-item");
console.log(itm);

function Random(min,max) {
    return Math.floor(Math.random()*(max-min)+min)
}

let personObj={
    name:null,
    age:null,
    exp:0,
    prof:null,
}

btnGenerate.onclick=()=>{
    title.style.transform="scale(0%)"
    setTimeout(() => {
        
        title.style.display="none"
        persone.style.display="flex"
        setTimeout(() => {
            persone.style.transform="scale(100%)"
        }, 100);
    }, 1000);
    personObj.age=Random(11,99)
    if (personObj.age>16) {
        personObj.exp=Random(11,personObj.age-20)
    }
    else personObj.exp=0
    itm[0].innerHTML=`Имя: ${name[Random(0,name.length)]}`
    itm[1].innerHTML=`Возраст: ${personObj.age}`
    itm[3].innerHTML=`Стаж: ${personObj.exp}`
    itm[2].innerHTML=`Профессия: ${prof[Random(0,prof.length)]}`
}

let btnAdd=document.getElementById("addName")

btnAdd.onclick=()=>{
    if (inputName.value=="") {
        alert("пустая строка, введите имя")
    }
    else{
        name.push(inputName.value)
        console.log(name);
    }
}
