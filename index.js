

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").value = function(){
    radius = document.getElementById("myText");
    circumference = 2 * PI * radius;
    circumference = String(circumference);
    document.getElementById("myP").textContent = `Result = ${circumference}`;
}



// circumference = 2 * PI * radius;

