// const data = (ev) => {
//   ev.preventDefault();

//   let contact = {
//     name: document.getElementById("name").value,
//     contact: document.getElementById("contact").value,
//   };

//   contacts.push(contact);
//   console.log(contacts);
// };

// document.querySelector("table").addEventListener("click", function (e) {
//   if (e.target.id == "btn-d") {
//     const tr = e.target.closest("tr");
//     tr.remove();
//   }
// });

// const data = (ev) => {
//   ev.preventDefault();

//   let colData = document.getElementById("name").value;

//   let colData1 = document.getElementById("contact").value;

//   let table = document.getElementById("table");

//   if (colData == "" || colData1 == "") {
//     alert("Please Fill All Required Field");
//     return false;
//   } else {

//       var row = table.insertRow();
//       let cell1 = row.insertCell(0);
//       let cell2 = row.insertCell(1);
//       var cell3 = row.insertCell(2);

//       cell1.innerHTML = colData;
//       cell2.innerHTML = colData1;
//       cell3.innerHTML = `<button class = 'btn btn-danger ' type = 'button' id = 'delete'>Delete</button>`;

//     contacts.push()
//     console.log(contacts);
//   }
// };

// contacts.push(data);

// console.log(contacts);

// function del() {
//   console.log(document.getElementsByClassName("rows"));
// }

// document.getElementById("btn").addEventListener("click", data);

// document.getElementById("btn-d").addEventListener("click", del());

var contact = [
  {
    nam: "fam",
    phone: 874855487,
  },
  {
    nam: "pam",
    phone: 974855487,
  },
  {
    nam: "tam",
    phone: 254855487,
  },
];

var table = document.getElementById("table");

function pool() {
  for (i = 0; i < contact.length; i++) {
    table += "<tr>";
    table += `<td>${contact[i].nam}</td>`;
    table += `<td>${contact[i].phone}</td>`;
    table += `<td><button class='btn btn-danger' id='delete'>Delete</button></td>`;
    table = +"</tr>";
  }

  document.getElementById("table").innerHTML = table;
}


pool()