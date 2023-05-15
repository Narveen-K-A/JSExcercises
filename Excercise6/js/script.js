function validateform() {
    const date2 = new Date();
    console.log(date2);
    const date3 = document.getElementById("date1").value;
    console.log(date3);
    if (date3 < date2) {
        alert("The day is after today!");
    }
    else {
        alert("The day is before today!");
    }
}