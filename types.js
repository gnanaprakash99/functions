//primitive type

let x = 10;

let y = x;

x = 20;

console.log(x);
console.log(y);

//eg-2

let car =5;

function updateCar(car){
    car++;
    console.log(car);
}
updateCar(car)
console.log(car);


//reference type

let a = {
    value: 10
};

let b = a;

a.value =20;

console.log(a);
console.log(b);

//eg-2

let cars ={value:5};

function updateCar(cars){
    cars.value++;
    console.log(cars);
}
updateCar(cars)
console.log(cars);