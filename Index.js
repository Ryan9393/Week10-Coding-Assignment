// 1.	Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// a.	A Bootstrap styled table representing your choice of data.
// b.	A Bootstrap styled form that allows a user to add a new row to the table when submitted.

const myForm = document.getElementById('myForm');
const email =document.getElementById('email');
const name = document.getElementById('name');

const content = document.getElementById('content');

const emailInfo = [
    {email: 'joe@gmail.com', name: "Joe Smo"},
    {email: 'John@gmail.com', name: "John Smith"}
];

emailInfo.forEach(person => {
    const infoBox = document.createElement('div');
    infoBox.cLassList.add('info-box');

    infoBox.innerText = `${person.email} ${person.name}`;
    content.append(info);
})
