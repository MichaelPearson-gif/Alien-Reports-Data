// from data.js
var tableData = data;

// YOUR CODE HERE!

// Reference the table body and button tags
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// Create a function to build a table
function buildTable(data) {
    tbody.html("");
    data.forEach(function(UFO) {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Create a function that will filter the data at the press of a button
function buttonClick() {
    var inputDate = d3.select("#datetime").property("value");
    var searchResults = tableData;

    if(inputDate){
        searchResults = searchResults.filter(row => row.datetime === inputDate);
    }

    buildTable(searchResults);
}

// Call back to the buildTable function and buttonClick function to implement them.
buildTable(data);
d3.selectAll("#filter-btn").on("click",buttonClick);