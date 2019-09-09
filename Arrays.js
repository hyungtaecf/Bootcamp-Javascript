var countries = ["USA", "Germany", "China"]
countries[2]="Brazil"

var mixed = [true, 20, "string"]

var myArr = ['one', 'two', 'three']
var lastItem = myArr.pop()
lastItem
myArr // ["one", "two"]
myArr.push("new item")
myArr // ["one", "two", "new item"]

var matrix = [[1,2,3], [4,5,6], [7,8,9]]

arr = ["A","B","C"]
for(letter of arr) console.log(letter);

for(letter of arr) alert(letter)

arr.forEach(alert); //passing function as parameter

function addAwesome(name){
    console.log(name+" is awesome!");
}
var topics = ["python", "django","science"]

topics.forEach(addAwesome);