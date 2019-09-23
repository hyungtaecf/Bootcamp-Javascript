var studentNames = []
var option = prompt("Would you like to start the roster web app? y/n")
var run = false

function addNew(array = []) {
    var element = prompt("What name would you like to add?")
    array.push(element);
}

function remove(array = []) {
    var element = prompt("What name would you like to remove?")
    var index = array.indexOf(element);
    if (index > -1) {
        array.splice(index, 1);
    }
}

function display(array = []) {
    console.log(array)
}

if (option === 'y') {
    run = true
    while (run) {
        switch (option = prompt("Please select an action: add, remove, display, or quit.")) {
            case "add":
                addNew(studentNames)
                break
            case "remove":
                remove(studentNames)
                break
            case "display":
                display(studentNames)
                break
            case "quit":
                run = false
                break
            case null:
                run = false
        }
    }
}

alert("Thanks for using the Web App! Please refresh the page to start over.")
clear()
