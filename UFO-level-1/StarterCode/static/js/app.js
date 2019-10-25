// from data.js
var tableData = data;

// YOUR CODE HERE!

// Reference he table body
var tbody = d3.select("tbody");

// Use d3 to create the table and append the data to it
tableData.forEach(function(UFO) {
    console.log(UFO);
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Search by date 

// Select the button
var button = d3.select("#button");

button.on("click", function() {

    // Select the input value
    var inputElement = d3.select("#datetime");

    // Get the value
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    // Filter the data
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);
});