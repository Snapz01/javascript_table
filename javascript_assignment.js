// company info
const tableElement = document.createElement('table'); // create table
const companies = [ // company array
    ["Saab AB", "Stockholm", 1937],
    ["Volvo Group", "Göteborg", 1927],
    ["Sandvik AB", "Stockholm", 1862],
    ["Atlas Copco Group", "Nacka", 1873],
    ["Electrolux AB", "Stockholm", 1919],
    ["Skanska AB", "Stockholm", 1887],
];


// table structure
companies.forEach(company => { // forEach 
    const trElement = document.createElement('tr'); //add tr element
    company.forEach(data => {
         const tdElement = document.createElement('td'); // add td element
        tdElement.textContent = data; 
            trElement.appendChild(tdElement); 
    });
    tableElement.appendChild(trElement); 
});


// button
const btnElement = document.createElement('button'); // create button
btnElement.textContent = 'Click Me' // add text to button

btnElement.onclick = function() { // add on click function that add table element
const companyButton = document.getElementById('section1'); 
    companyButton.appendChild(tableElement); 
};

const companyButton = document.getElementById('section1'); // add button to section1
    companyButton.appendChild(btnElement);
