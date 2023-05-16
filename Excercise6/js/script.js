function validateform(){
    var date1 = new Date();
    var mm = date1.getMonth()+1;
    var dd = date1.getDate();
    var yyyy = date1.getFullYear();
    if(dd < 10){
        dd = '0' + dd;
    }
    if(mm < 10){
        mm = '0'+ mm;
    }
    var today = dd + "/" + mm + "/" + yyyy;
    console.log(today);
    var mydate = new Date(document.getElementById("date1").value);
    var mm1 = mydate.getMonth()+1;
    var dd1 = mydate.getDate();
    var yyyy1 = mydate.getFullYear();
    if(dd1 < 10){
        dd1 = '0' + dd1;
    }
    if(mm1 < 10){
        mm1 = '0'+ mm1;
    }
    var myday = dd1 + "/" + mm1 + "/" + yyyy1;
    console.log(myday);
    if(yyyy == yyyy1){
        if(mm == mm1){
            if(dd == dd1){
                alert("today")
            }
            else if(dd > dd1){
                alert("before");
            }
            else{
                alert("after");
            }
        }
        else if(mm > mm1){
            alert("before");
        }
        else{
            alert("after");
        }
    }
    else if(yyyy > yyyy1){
        alert("before");
    }
    else{
        alert("after");
    }
}