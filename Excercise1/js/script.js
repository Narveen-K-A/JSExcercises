let array1 = ['apple','banana','mango'];
for(i in array1){
    console.log(array1[i])
}

let array2 = [{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}];
array2.forEach(function(index){
    for (i in index) {
        console.log(`${index[i]}`);
    }
});

let object = { fruit1:'apple',fruit2:'banana',fruit3:'mango'};
for(const property in object){
    console.log(`${object[property]}`);
}
  