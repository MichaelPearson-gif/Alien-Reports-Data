// from data.js
var tableData = data;

// YOUR CODE HERE!

// Reference he table body
var tbody = d3.select("tbody");

// // Loop through the data
// tableData.forEach(function(UFO) {
//     console.log(UFO);
// });

// // Append to one table row 'tr'
// tableData.forEach(function(UFO) {
//     console.log(UFO);
//     var row = tbody.append("tr");
// });

// // Use Object.entries to print the ufo sightings
// tableData.forEach(function(UFO) {
//     console.log(UFO);
//     var row = tbody.append("tr");

//     Object.entries(UFO).forEach(function([key, value]) {
//         console.log(key, value);
//     });
// });

// // Use d3 to append 1 cell per ufo sighting value (date/time, city, state, country, shape, and comment)
// tableData.forEach(function(UFO) {
//     console.log(UFO);
//     var row = tbody.append("tr");

//     Object.entries(UFO).forEach(function([key, value]) {
//         console.log(key, value);
//         var cell = row.append("td");
//     });
// });

// // Use d3 to update each cell's text
// tableData.forEach(function(UFO) {
//     console.log(UFO);
//     var row = tbody.append("tr");
//     Object.entries(UFO).forEach(function([key, value]) {
//         console.log(key, value);
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

tableData.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});