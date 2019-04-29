var tableData = data;
var filter_btn = d3.select("#filter-btn");
var tbody = d3.select("tbody");

filter_btn.on("click", function() {

    d3.event.preventDefault();
    tbody.selectAll("td").remove();
    
    var datetime = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");

    if(datetime) { new_tableData = tableData.filter(sighting => sighting.datetime === datetime); }
    if(city) { new_tableData = tableData.filter(sighting => sighting.city === city); }
    if(state) { new_tableData = tableData.filter(sighting => sighting.state === state); }
    if(country) { new_tableData = tableData.filter(sighting => sighting.country === country); }
    if(shape) { new_tableData = tableData.filter(sighting => sighting.shape === shape); }

    new_tableData.forEach(function(object_) {
        var row = tbody.append("tr");
        Object.entries(object_).forEach(function([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

tableData.forEach(function(object_) {
    var row = tbody.append("tr");
    Object.entries(object_).forEach(function([key, value]) {
        var cell = tbody.append("td");
        cell.text(value);        
    });
});



