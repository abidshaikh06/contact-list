interface myObject {
  name: string;
  phone: string;
}

interface resultObj {
  alphabet: string;
  record:myObject[]
}

var contacts: myObject[] = [
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
  if (!validation()) return false;
  let contact = {
    name: (<HTMLInputElement>document.getElementById("name")).value,
    phone: (<HTMLInputElement>document.getElementById("contact")).value,
  };
  contacts.push(contact);
  grouping();
  console.log(contacts);
}

document.getElementById("btn").addEventListener("click", addContacts);



function validation() {
  let name = (<HTMLInputElement>document.getElementById("name")).value;
  let phone = (<HTMLInputElement>document.getElementById("contact")).value;

  if (name == "" || phone == "") {
    alert("please enter the input");
    return false;
  }
  return true;
}

function grouping() {
  let data = contacts.reduce((r, e) => {
    let alphabet: any = e.name[0];
    if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] };
    else r[alphabet].record.push(e);
    return r;
  }, {});
  //convert object into array by function named as Object.values;
  let result: resultObj[] = Object.values(data);
  sortContact(result, "alphabet");
  console.log(result, "RESULT ARRAY");
  // var record = result[0].record[0].name;
  // console.log(record);
  for (let rc of result) {
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
  let table : HTMLTableElement =<HTMLTableElement>document.getElementById("table");
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



document.querySelector("table").addEventListener("click", function (e) {
  if ((e.target as Element).id == "delete") {
    const tr = (e.target as Element).closest("tr");
    const cd = tr.cells[0].innerHTML;
    const ind = contacts.map((item) => item.name).indexOf(cd);
    if (ind > -1) {
      contacts.splice(ind, 1);
    }
    tr.remove();
  }
});