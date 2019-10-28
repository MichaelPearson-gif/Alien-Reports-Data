// from data.js
var tableData = data;

// YOUR CODE HERE!

// Reference the table body
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
    var filteredData = tableData.filter(sight => sight.datetime === inputValue);

    console.log(filteredData);
});


//--------------------------------------------------

// from data.js
var tableData = data;

// YOUR CODE HERE!

// Reference the table body
var tbody = d3.select("tbody");
var button = d3.select("#button");

function filteredData(datetime) {

    return tableData.filter(function(alien) {
        return alien === datetime;
    });
};

function filtered(event) {

    var inputValue = d3.event.target.value;
    var searchResults = filteredData(inputValue);

    searchResults.forEach(function(UFO) {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};