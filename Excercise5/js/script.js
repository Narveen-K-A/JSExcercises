function capital(){  
    const textbyuser = document.getElementById("text1").value;
    capitalize(textbyuser);
}

function capitalize(textbyuser){
    let result= textbyuser.toLowerCase().split(/[.!?] /).map(s => s.charAt(0).toUpperCase() + s.substring(1)).join('. ');
    console.log(result);
}