'use strict';

var notes = new Array();
loadList();

function addItem() {
	let textbox = document.getElementById('item');
	var itemText = textbox.value;
	textbox.value = '';
	textbox.focus();
	for(let i = 0; i<notes.length; i++) {
		let note = notes[i];
		if (note.title == itemText){
			note.quantity++;
			saveList();
			displayList();
			return;
		}
	}
	var newItem = {title: itemText, quantity: 1};

	notes.push(newItem);

	saveList();
	displayList();

}

function displayList() {
	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i = 0; i<notes.length; i++) {
		var node = undefined;
		var note = notes[i];
		var node = document.createElement('tr');
		var html = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
	    node.innerHTML = html;
		table.appendChild(node);
	}
}

function deleteIndex(i) {
	notes.splice(i, 1);
	saveList();
	displayList();
}

function saveList() {
	localStorage.notes = JSON.stringify(notes);
}

function loadList() {
	console.log('loadList');
	if (localStorage.notes) {
		notes = JSON.parse(localStorage.notes);
		displayList();
	}
}

let button = document.getElementById('add');
button.onclick = addItem;
