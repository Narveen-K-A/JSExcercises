function parsingcalculator(){
    let textbyuser = document.getElementById("text1").value;
    console.log(textbyuser);
    let add = textbyuser.replace("plus", "+");
    let subtract = add.replace("minus", "-");
    let multiply = subtract.replace("multipliedby", "*");
    let divide = multiply.replace("dividedby", "/");
    let result = eval(divide);
    console.log(result);
}