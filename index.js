import { employees } from "./module.js";

let input = document.getElementById("input");
let search = document.getElementById("search");
let display = document.getElementById("display");

search.addEventListener('click', () => {
    display.innerHTML = "";
    let inputValue = input.value.toLowerCase(); // Convert input to lowercase for case-insensitive search

    let matchingEmployees = employees.filter(employee => {
        // Check if any attribute of the employee object contains the input value
        for (let key in employee) {
            if (employee.fullName[key].toString().toLowerCase().includes(inputValue)) {
                return true;
            }
        }
        return false;
    });

    if (matchingEmployees.length > 0) {
        
        let table = document.createElement('table');
        table.classList.add('employee-table');

        // Create table headers
        let headers = Object.keys(matchingEmployees[0]);
        let headerRow = table.insertRow();
        headers.forEach(headerText => {
            let headerCell = document.createElement('th');
            headerCell.textContent = headerText;
            headerRow.appendChild(headerCell);
        });

        // Populate table with employee data
        matchingEmployees.forEach(employee => {
            let row = table.insertRow();
            headers.forEach(header => {
                let cell = row.insertCell();
                cell.textContent = employee[header];
            });
        });

        // Append the table to the display div
        display.appendChild(table);
    } else {
        display.textContent = "No matching employees found.";
    }
});
