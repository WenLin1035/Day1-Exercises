/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function prompts(){
    alert("Hello User!");
    let fname = prompt("Please enter your name");
    let soccer = confirm("Do you like soccer?");
    var setdemo =  document.getElementById("demo");
    if(soccer === true){
        setdemo.innerHTML = "Hello " + fname + ", you like soccer!";
    } else {
        setdemo.innerHTML = "Hello " + fname + ", you don't like soccer!";
    }
}

function printnums(){
    for(let i = 0; i < 16; i++){
        const num = document.createElement("p");
        const even = i%2;
        if(even === 0){
            num.innerHTML = i + " is even";
            document.body.appendChild(num);
        } else {
            num.innerHTML = i + " is odd";
            document.body.appendChild(num);
        }
    }
}

// takes in arguments and adds them together
function sum(){
    var arraylen = arguments.length;
    var i = 0;
    var total = 0;
    while (i < arraylen) {
        total += arguments[i];
        i++;
    }
    document.getElementById("summing").innerHTML = total;
}

// delete rollno prooperty from object
var student = {name:'David Rayy', sclass: 'VI', rollno: 12};

function deleterollno(){
    document.getElementById("before").innerHTML = "name: " + student.name + 
            ", sclass: " + student.sclass + ", rollno: " + student.rollno;
    delete student.rollno;
    document.getElementById("after").innerHTML = "name: " + student.name + 
            ", sclass: " + student.sclass + ", rollno: " + student.rollno;
}

// find length of object
const object1 = {a:'something', b: 222, c: "orange"};

function findlength(){
    var lengthtotal = 0;
    for(let properties in Object.keys(object1)){
        lengthtotal += 1;
    }
    document.getElementById("lengthofobject").innerHTML = "length of object = " + lengthtotal;
}

// sort objects
const library = [{title: 'The Road Ahead',author: 'Bill Gates',libraryID: 1254},{title:'Walter Isaacson',author:'Steve Jobs',libraryID: 4264}];

function sortobjects(){
    library.sort(function(a,b){
        return b.libraryID - a.libraryID;
    });
    console.log(library);
}