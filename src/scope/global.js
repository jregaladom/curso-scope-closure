var a; //declarando
var b = 'b'; //declarando e inicializando
b = 'bb'; //reasignacion
var a = 'a'; //redeclaracion e inicializacion


//global scope
var fruit = 'apple'; //global
function bestFruit() {
    console.log(fruit);
}

bestFruit(); //apple


function countries() {
    //local scope
    country = 'Colombia';
    console.log(country);
}

countries(); //Colombia
console.log(country); //Colombia