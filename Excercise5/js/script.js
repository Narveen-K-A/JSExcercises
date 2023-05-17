function capital(){  
    const textbyuser = document.getElementById("text1").value;
    const result = textbyuser.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase());
    console.log(result);
}