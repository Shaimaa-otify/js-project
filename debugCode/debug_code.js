function performOperation(){
    let input1= parseInt(document.getElementById("input1").value); 
    let input2= parseInt(document.getElementById("input2").value);
    
    if(!isNaN(input1) && !isNaN(input2)){
        let result = multiply(input1,input2)
        displayResult(result); 
        
        
    } else{
        displayResult("Please enter valid numbers");
    }
}

function multiply(a, b){
    debugger;
    return a*b
}

function displayResult(){
    const resultElement= document.getElementById("result")
    resultElement.innerText=  `The result is: ${result}`;
}