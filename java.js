// let totalspending = document.getElementById("total");
// let numofexpenses = document.getElementById("number");
// let remainingbudget = document.getElementById("remaining");
// let monthlyspending = document.getElementById("dollers");

let box1 = document.getElementById("exname");
let box2 = document.getElementById("exno");
let box3 = document.getElementById("excate");
let addexp = document.getElementById("submit");

let box1value = box1.value
let box2value = box2.value
let box3value = box3.value

let total = box1value+box2value+box3value;
function update(){
    var name=document.getElementById("exname").value;
    var amount=document.getElementById("examount").value;
    var category=document.getElementById("excate").value;
    var table=document.getElementById("expenselist");
    var row=table.insertRow();
   
    row.insertCell(0).innerHTML=name;
    row.insertCell(1).innerHTML=amount;
    row.insertCell(2).innerHTML=category;
    table.appendChild(row);
}


