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

data.forEach(function (o) {
    Object.keys(o).forEach(function (key) {
        o[key] = typeof o[key] === 'string' ? o[key].trim() : o[key];
    });
});

console.log(data);

/* for (let i = 0; i < data.length; i++) {
    let object1 = data[i].trim();
    console.log(object1);
    console.log(data[i]);
} */