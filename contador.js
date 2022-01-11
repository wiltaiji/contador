var currentNumberWapper = document.getElementById("corrente");
var currentNumber=0;
function decrement(){
    currentNumber=currentNumber-1;
    currentNumberWapper.innerHTML= currentNumber;

}
function increment(){
    currentNumber=currentNumber+1;
    currentNumberWapper.innerHTML= currentNumber;

}
