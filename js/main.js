// import person from json file
import { default as employee } from "./employee.js";
console.log(employee);

// get input and display in empty string

let searchResult = '';

document.getElementById('search').addEventListener('input', function(e) {

    searchResult = e.target.value;

    
    displayResult(searchResult);

});

const displayResult = (result) => {
    document.getElementById('display').textContent = result;
}





// Search through list
/*

let names = '';

for (let i = 0; i < person.length; i++) {


    let personString = `Name: ${person[i].name}, Age: ${person[i].age}`

     names += personString;

     console.log(person[i]);

}
document.getElementById('personName').textContent = names;


*/