'use strict';

var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

let selectedtitle = document.createElement("h1");
document.body.appendChild(selectedtitle);
let booktable = document.createElement('table');

//Column headers
let headerrow = document.createElement("tr");
let headernames = Object.keys(books[0]);
booktable.appendChild(headerrow);

for (let i = 0; i < 4; i++) {
	let header = document.createElement("th");
	header.innerHTML = headernames[i];
	headerrow.appendChild(header);
}

//Books
for (let x = 0; x < books.length; x++) {
	let row = document.createElement("tr");

	//Event listener for displaying selected title
	row.addEventListener("click", function(){
		selectedtitle.innerHTML = row.firstChild.innerHTML;
	})

	let td = document.createElement("td");
	td.innerHTML = books[x].title;
	row.appendChild(td);

	let td2 = document.createElement("td");
	td2.innerHTML = books[x].year;
	row.appendChild(td2);

	let td3 = document.createElement("td");
	td3.innerHTML = books[x].isbn;
	row.appendChild(td3);

	let td4 = document.createElement("td");
	td4.innerHTML = books[x].authors;
	row.appendChild(td4);

	booktable.appendChild(row);
}

document.body.appendChild(booktable);
