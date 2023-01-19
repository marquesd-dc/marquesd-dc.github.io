import contacts from './contacts.json' assert {type: 'json'};

let totalContacts = contacts.length;
document.getElementById("totalContacts").innerHTML = "Total: " + totalContacts;

let contactList = document.getElementById("contactList");

let contact = "";

defaultDisplay();

let pages = Math.ceil(contacts.length  / 10);
let buttons = '';
for (var j = 1; j <= pages;j++) {
    buttons += '<li class="pagination">' + `<a id="page${j}">` + j + '</a>'+'</li>';
}

document.getElementById("pages").innerHTML = buttons;

document.getElementById("page1").addEventListener("click", function(){
    contact = "";
    for (let i = 0; i < 10; i++) {
        let contactObj = contacts[i];

        contact += '<li class="contact-item cf">'+ '<div class="contact-details">';
        contact += `<img class="avatar" src="${contactObj.image}">`;
        contact += '<h3>' + contactObj.name + '</h3>';
        contact += '<span class="email">' + contactObj.email + '</span>' + '</div>';
        contact += '<div class="joined-details">' + '<span class="date">' + contactObj.joined + '</span>' + '</div>' +'</li>';
    }
    contactList.innerHTML = contact;
});

document.getElementById("page2").addEventListener("click", function(){
    contact = "";
    for (let i = 0; i < 10; i++) {
        let contactObj = contacts[i+10];

        contact += '<li class="contact-item cf">'+ '<div class="contact-details">';
        contact += `<img class="avatar" src="${contactObj.image}">`;
        contact += '<h3>' + contactObj.name + '</h3>';
        contact += '<span class="email">' + contactObj.email + '</span>' + '</div>';
        contact += '<div class="joined-details">' + '<span class="date">' + contactObj.joined + '</span>' + '</div>' +'</li>';
    }
    contactList.innerHTML = contact;
});

document.getElementById("page3").addEventListener("click", function(){
    console.log("page 3");
    contact = "";
    for (let i = 0; i < 5; i++) {
        let contactObj = contacts[i+20];

        contact += '<li class="contact-item cf">'+ '<div class="contact-details">';
        contact += `<img class="avatar" src="${contactObj.image}">`;
        contact += '<h3>' + contactObj.name + '</h3>';
        contact += '<span class="email">' + contactObj.email + '</span>' + '</div>';
        contact += '<div class="joined-details">' + '<span class="date">' + contactObj.joined + '</span>' + '</div>' +'</li>';
    }
    contactList.innerHTML = contact;
});

function defaultDisplay() {      
    for (let i = 0; i < 10; i++) {
        let contactObj = contacts[i];    
        contact += '<li class="contact-item cf">'+ '<div class="contact-details">';
        contact += `<img class="avatar" src="${contactObj.image}">`;
        contact += '<h3>' + contactObj.name + '</h3>';
        contact += '<span class="email">' + contactObj.email + '</span>' + '</div>';
        contact += '<div class="joined-details">' + '<span class="date">' + contactObj.joined + '</span>' + '</div>' +'</li>';
    }
    contactList.innerHTML = contact;
}