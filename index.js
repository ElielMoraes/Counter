
let initialValue = 0;
let currentValue;
let value = 0;
let first = true;

document.getElementById("increaseButton").onclick = function(){
    // if(first = true){
    //     value = initialValue++;
    //     currentValue=value;
    //     first = false;
    // }else{
    //     value = currentValue++;
    //     currentValue= value;
    // }
    value++;

    document.getElementById("countLabel").textContent = value;
}

document.getElementById("decreaseButton").onclick = function(){
    // if(first = true){
    //     value = initialValue--;
    //     currentValue=value;
    //     first = false;
    // }else{
    //     value = currentValue--;
    //     currentValue= value;
    // }


    value--;

    document.getElementById("countLabel").textContent = value;
}

document.getElementById("resetButton").onclick = function(){
    // initialValue = 0
    // currentValue = 0;
    value = 0;
    document.getElementById("countLabel").textContent = value;
}