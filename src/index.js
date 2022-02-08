function createTable() {
    // alert('creating table');
    var width = 3;
    var height = 3;
    var tableData = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    var table = document.createElement('table');
    var row = {};
    var cell = {};

    tableData.forEach(function(rowData) {
        row = table.insertRow(-1); // [-1] for last position in Safari
        rowData.forEach(function(cellData) {
            cell = row.insertCell();
            cell.textContent = cellData;
        });
    });
    document.body.appendChild(table);
}