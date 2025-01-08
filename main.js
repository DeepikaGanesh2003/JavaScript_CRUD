function adddata() {
    document.getElementById('formconatiner').style.display = 'block';
    document.getElementById('tableid').style.display = 'none';
}

let itemsArray = [];
const itemBody = document.getElementById('tabledata');
let crudForm = document.getElementById('crud-form');
let uid = document.getElementById('uid');
let uname = document.getElementById('name');
let email = document.getElementById('mail');
let username = document.getElementById('username');
let dob = document.getElementById('dob');
let mobile = document.getElementById('mno');

crudForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const uidVal = uid.value.trim();
    const nameVal = uname.value.trim();
    const mailVal = email.value.trim();
    const usernameVal = username.value.trim();
    const dobVal = dob.value.trim();
    const mobileVal = mobile.value.trim();
    if (uidVal && nameVal && mailVal && usernameVal && dobVal && mobileVal) {
        additem(uidVal, nameVal, mailVal, usernameVal, dobVal, mobileVal);
    } else {
        alert('Please fill out all the fields');
    }
});

function additem(uidVal, nameVal, mailVal, usernameVal, dobVal, mobileVal) {
    const data = {
        id: uidVal,
        name: nameVal,
        mail: mailVal,
        username: usernameVal,
        dob: dobVal,
        mobile: mobileVal,
    };
    itemsArray.push(data);
    console.log(itemsArray);
    renderItems();
    document.getElementById('formconatiner').style.display = 'none';
    document.getElementById('tableid').style.display = 'block';
}

function renderItems() {
    itemBody.innerHTML = '';
    itemsArray.forEach((items) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${items.id}</td>
        <td>${items.name}</td>
        <td>${items.mail}</td>
        <td>${items.username}</td>
        <td>${items.dob}</td>
        <td>${items.mobile}</td>
        <td>
         <button class="edit fw-bold" style="border: 1px solid black; border-radius: 7px; background-color: pink; color: black" onclick="editItem('${items.id}')">Edit</button>
         <button class="fw-bold" style="border: 1px solid black; border-radius: 7px; background-color: pink; color: black" onclick="deleteItem('${items.id}')">Delete</button>
        </td>
        `;
        itemBody.appendChild(tr);
    });
}

function editItem(itemId) {
    const item = itemsArray.find((item) => item.id === itemId);
    if (!item) {
        alert('Item not found');
        return;
    }
    const editedId = prompt('Edit the ID', item.id);
    const editedName = prompt('Edit the Name', item.name);
    const editedMail = prompt('Edit the Mail ID', item.mail);
    const editedUsername = prompt('Edit the Username', item.username);
    const editedDob = prompt('Edit the DOB', item.dob);
    const editedMobile = prompt('Edit the Mobile Number', item.mobile);
    if (editedId && editedName && editedMail && editedUsername && editedDob && editedMobile) {
        item.id = editedId;
        item.name = editedName;
        item.mail = editedMail;
        item.username = editedUsername;
        item.dob = editedDob;
        item.mobile = editedMobile;
        renderItems();
    }
}

function deleteItem(itemId) {
    itemsArray = itemsArray.filter((item) => item.id !== itemId);
    renderItems();
}
