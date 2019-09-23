var carInfo = {make:"Toyota", year: 1990, model: "Camry"}
carInfo["make"] //"Toyota"

var myNewO = {a: "hello", b: [1,2,3], c:{inside:['a','b']}}
myNewO['a'] // "hello"
myNewO['b'][2] //3
myNewO['c']["inside"][1] //"b"

console.dir(carInfo)

for(key in carInfo) console.log(key+": "+carInfo[key])

var myObj = {
    prop: 37,
    reportProp: function(){
        return this.prop;
    }
}
console.log(myObj.reportProp()); //37

var simple = {
    prop: "Hello",
    myMethod: function(){
        console.log("The myMethod was called");
    }
}

simple.myMethod() //The myMethod was called