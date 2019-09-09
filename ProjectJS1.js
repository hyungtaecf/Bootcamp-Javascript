var firstName = prompt("What is your first name?")
var lastName = prompt("What is your last name?")
var age = prompt("What is your age?")
var height = prompt("What is your height in centimeters?")
var pet = prompt("What is your pet name?")
alert("Thank you so much for the information!")

if(firstName[0]==lastName[0] &&
    age>20&&age<30 &&
    height>=170 &&
    pet[pet.length-1]=="y"){
        console.log("Fala amigo!! Finalmente te encontrei!");
}else{
    console.log("Nada para ver aqui!");
}