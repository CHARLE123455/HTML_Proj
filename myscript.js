function runButton(){

    let name = prompt("what is your name");
    
    let name2 = document.getElementById("step1");
    name2.innerText = "Welcome " + name;
    
    name2 = document.getElementById("step2");
    name2.innerText = "You are Logged In";

    name2 = document.querySelector("button")
    name2.innerText = "Log Out";

    let tap = document.querySelector(".line3")
    if (tap.classList.contains("line3")){
        tap.removeAttribute('class','line3')
        tap.setAttribute('class','line4')
    }else{
        tap.removeAttribute('class','line4')
        tap.setAttribute('class','line3')
    }

}
 
 
function newButton(){
    let tap = document.querySelector("#butn1")
    if (tap.classList.contains("line3")){
        tap.removeAttribute('class','line3')
        tap.setAttribute('class','line4')
    }else{
        tap.removeAttribute('class','line4')
        tap.setAttribute('class','line3')
    }
 }

 let btn12 = document.querySelector('button')
 btn12.addEventListener('click', newButton)


 console.log("I am here")
 let form1 = document.querySelector("form")
 form1.addEventListener('submit', formSubmit)

function formSubmit(e){
    e.preventDefault()
    
    let firsty = document.querySelector('#putName')
    let lasty = document.querySelector('#putName2')
    let addressy = document.querySelector('#putName3')
    


    if(firsty.value.length < 1  && lasty.value.length < 1 && addressy.value.length < 1 ){
        alert("First Name, Last Name and Address required")
    }else if (firsty.value.length < 1) {
        alert("first Name is required")
    }
    else if (lasty.value.length < 1) 
    {
        alert("Last Name is required")
    }
    else if (addressy.value.length < 1)
     {
        alert("Adress is required")
    }else{
        alert(`Mr ${firsty.value} ${lasty.value} lives in ${addressy.value}`)
    }

}

 

 function studentList () {
    namer = prompt("Kindly enter student name")
    item = document.createElement('li')
    item.innerText = namer
    console.log(item)
    allList = document.querySelector('ol')
    allList.append(item)
 
 }

 let list1 = document.querySelector("#student")
 list1.addEventListener('click', studentList)