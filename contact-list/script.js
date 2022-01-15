var contacts = [];
function addContacts() {
    var contact = {
        name: document.getElementById("name").value,
        phone: document.getElementById("contact").value,
    };
    contacts.push(contact);
    console.log(contacts);
}
document.getElementById("btn").addEventListener("click", addContacts);
