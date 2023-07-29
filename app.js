let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn")

function add(){
    count = count +1
    document.getElementById("value").innerHTML=count
}
function sub(){
    count = count -1
    document.getElementById("value").
    innerHTML=count
}
function reset(){
    
    count = 0
    console.log(count)
     document.getElementById("value").
    innerHTML=count
}