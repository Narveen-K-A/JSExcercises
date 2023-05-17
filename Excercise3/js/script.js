var data = [
    {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
    {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
    {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648"}
]

data.forEach(function(index){
    for (i in index) {
        console.log(`${index[i]}`);
    }
});

for(var i=0; i<data.length; i++){
    var arr = data[i];
    arr["Name"] = (arr["firstname"] + arr["lastname"]).trim();
    console.log("NAME:"+arr["Name"]);

    arr["PhoneNo"] = (arr["phone"]).slice(0,10);
    console.log("PHONE NUMBER:"+arr["PhoneNo"]);

    if((arr["phone"]).length < 10){
        console.log(arr["phone"].padStart(10, '0'))
    }
    if((arr["age"]>=150)){
        arr["age"] = arr["age"].toString().replace(arr["age"],"NA");
        console.log("Age:",arr["age"]);
    }
    else{
        console.log("Age:",arr["age"]);
    }

    arr["id"] = arr["id"].slice(3).padStart(arr["id"].length,'*').trim();
    console.log("Id:",arr["id"]);
}

