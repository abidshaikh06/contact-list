var contacts = [
    { name: "Anna", phone: "8754292982" },
    { name: "Maxi", phone: "8754292982" },
    { name: "Chole", phone: "8754292982" },
    { name: "Lee", phone: "8754292982" },
    { name: "Camila", phone: "8754292982" },
    { name: "Light", phone: "8754292982" },
    { name: "David", phone: "8754292982" },
    { name: "Berlin", phone: "8754292982" },
    { name: "Axle", phone: "8754292982" },
];
window.addEventListener("load", function () {
    grouping();
});
function addContacts() {
    if (!validation())
        return false;
    var contact = {
        name: document.getElementById("name").value,
        phone: document.getElementById("contact").value,
    };
    contacts.push(contact);
    grouping();
    console.log(contacts);
}
document.getElementById("btn").addEventListener("click", addContacts);
function validation() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("contact").value;
    if (name == "" || phone == "") {
        alert("please enter the input");
        return false;
    }
    return true;
}
function grouping() {
    var data = contacts.reduce(function (r, e) {
        var alphabet = e.name[0];
        if (!r[alphabet])
            r[alphabet] = { alphabet: alphabet, record: [e] };
        else
            r[alphabet].record.push(e);
        return r;
    }, {});
    //convert object into array by function named as Object.values;
    var result = Object.values(data);
    sortContact(result, "alphabet");
    console.log(result, "RESULT ARRAY");
    // var record = result[0].record[0].name;
    // console.log(record);
    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
        var rc = result_1[_i];
        sortContact(rc.record, "name");
    }
    insertIntoTable(result);
    console.log(result);
}
function sortContact(result, sortBy) {
    result.sort(function (a, b) {
        if (a[sortBy] < b[sortBy]) {
            return -1;
        }
        if (a[sortBy] > b[sortBy]) {
            return 1;
        }
        return 0;
    });
}
function insertIntoTable(result) {
    var table = document.getElementById("table");
    table.innerHTML = "";
    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < result[i].record.length; j++) {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = result[i].record[j].name;
            cell2.innerHTML = result[i].record[j].phone;
            cell3.innerHTML = "<button class = 'btn btn-danger ' type = 'button' id = 'delete'>Delete</button>";
            // console.log(result[i].record[j].name);
        }
    }
}
document.querySelector("table").addEventListener("click", function (e) {
    if (e.target.id == "delete") {
        var tr = e.target.closest("tr");
        var cd = tr.cells[0].innerHTML;
        var ind = contacts.map(function (item) { return item.name; }).indexOf(cd);
        if (ind > -1) {
            contacts.splice(ind, 1);
        }
        tr.remove();
    }
});
