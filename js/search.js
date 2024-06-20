// import employee data from employee.js
import {
    default as employee
} from "../module/employee.js";
console.log(employee);

// Function to display results
const displayResult = (result) => {
    const displayElement = document.getElementById('display');
    displayElement.innerHTML = '';

    result.forEach(employee => {
        const employeeDetails = `
        <div class = "tops">
            <p><strong>First Name:</strong> ${employee.first_name}</p>
            <p><strong>Last Name:</strong> ${employee.last_name}</p>
            <p><strong>Age:</strong> ${employee.age}</p>
        </div>
    `;
        displayElement.innerHTML += employeeDetails;
    })
}
// Display all employees by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayResult(employee);
});
// Filter and display results based on search input
document.getElementById('search').addEventListener('input', function (e) {

    const query = e.target.value.toLowerCase();
    const searchResult = employee.filter(element => 
        element.first_name.toLowerCase().includes(query)
    );
    displayResult(searchResult);

});
