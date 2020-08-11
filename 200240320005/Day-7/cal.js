

function n(num){
    document.getElementById("ans1").value+=num;
}

function calculate() 
{ 
    let x = document.getElementById("ans1").value; 
    
    document.getElementById("ans1").value = eval(x) ;
}
function reset() 
{ 
    document.getElementById("ans1").value = "" 
} 
