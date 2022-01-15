// let contacts = [
//   { name: "Abigail", phone: "8754292982" },
//   { name: "Axle", phone: "8754292982" },
//   { name: "Brianna", phone: "8754292982" },
//   { name: "Brooklyn", phone: "8754292982" },
//   { name: "Camila", phone: "8754292982" },
//   { name: "Charlotte", phone: "8754292982" },
//   { name: "David", phone: "8754292982" },
// ];
// // window.addEventListener("load", function () {
// //   displayContacts();
// // });

// function addContact() {
//   if (!validate()) return false;
//   let contact = {
//     name: document.getElementById("name").value,
//     phone: document.getElementById("contact").value,
//   };

//   // displayContacts();
//   contacts.push(contact);
//   grouping();
// }

// function validate() {
//   let name = document.getElementById("name").value;
//   let phone = document.getElementById("contact").value;
//   if (name == "" || phone == "") {
//     alert("Please Fill All Required Field");
//     return false;
//   } else {
//     return true;
//   }
// }
// // for delete button
// document.querySelector("table").addEventListener("click", function (e) {
//   if (e.target.id == "delete") {
//     const tr = e.target.closest("tr");
//     const cd = tr.cells[0].innerHTML;
//     const ind = contacts.map((item) => item.name).indexOf(cd);
//     if (ind > -1) {
//       contacts.splice(ind, 1);
//     }
//     tr.remove();
//   }
// });

// function grouping() {
//   let data = contacts.reduce((r, e) => {
//     let alphabet = e.name[0];
//     if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] };
//     else r[alphabet].record.push(e);
//     return r;
//   }, {});
//   //to craete array to the given objects
//   var result = Object.values(data);
//   sortContact(result, "alphabet");
//   // for loop for searching and sortung data
//   for (let i = 0; i < result.length; i++) {
//     sortContact(result[i].record, "name");
//   }
//   displayContacts(result);
//   console.log(result);
// }

// function sortContact(result, sortBy) {
//   result.sort(function (a, b) {
//     if (a[sortBy] < b[sortBy]) {
//       return -1;
//     }
//     if (a[sortBy] > b[sortBy]) {
//       return 1;
//     }
//     return 0;
//   });
// }

// function displayContacts() {
//   // sortContact();
//   // contactGrouping();
//   table = document.getElementById("table");
//   table.innerHTML = "";
//   for (var i = 0; i < result.length; i++) {
//     for (var j = 0; j < result[i].record.length; j++) {
//       var row = table.insertRow();
//       let cell1 = row.insertCell(0);
//       let cell2 = row.insertCell(1);
//       var cell3 = row.insertCell(2);
//       cell1.innerHTML = result[i].record[j].name;
//       cell2.innerHTML = result[i].record[j].phone;
//       cell3.innerHTML = `<button class = 'btn btn-danger ' type = 'button' id = 'delete'>Delete</button>`;
//     }
//   }
// }

// document.getElementById("btn").addEventListener("click", addContact);

let contacts = [
  { name: "Abigail", phone: "8754292982" },
  { name: "Axle", phone: "8754292982" },
  { name: "Brianna", phone: "8754292982" },
  { name: "Brooklyn", phone: "8754292982" },
  { name: "Camila", phone: "8754292982" },
  { name: "Charlotte", phone: "8754292982" },
  { name: "David", phone: "8754292982" },
];
// window.addEventListener("load", function () {

// });
document.getElementById("btn").addEventListener("click", addContact);

function addContact() {
  let contact = {
    name: document.getElementById("name").value,
    phone: document.getElementById("contact").value,
  };
  contacts.push(contact);
  grouping();
}
function grouping() {
  let data = contacts.reduce((r, e) => {
    let alphabet = e.name[0];
    if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] };
    else r[alphabet].record.push(e);
    return r;
  }, {});
  //convert object into array by function named as Object.values;
  let result = Object.values(data);
  sortContact(result, "alphabet");
  console.log(result, "RESULT ARRAY");
  // var record = result[0].record[0].name;
  // console.log(record);
  for (let i = 0; i < result.length; i++) {
    sortContact(result[i].record, "name");
  }
  insertIntoTable(result);
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
  table = document.getElementById("table");
  table.innerHTML = "";
  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < result[i].record.length; j++) {
      var row = table.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = result[i].record[j].name;
      cell2.innerHTML = result[i].record[j].phone;
      cell3.innerHTML = `<button class = 'btn btn-danger ' type = 'button' id = 'delete'>Delete</button>`;
      // console.log(result[i].record[j].name);
    }
  }
}

// for delete button
document.querySelector("table").addEventListener("click", function (e) {
  if (e.target.id == "delete") {
    const tr = e.target.closest("tr");
    const cd = tr.cells[0].innerHTML;
    const ind = contacts.map((item) => item.name).indexOf(cd);
    if (ind > -1) {
      contacts.splice(ind, 1);
    }
    tr.remove();
  }
});
