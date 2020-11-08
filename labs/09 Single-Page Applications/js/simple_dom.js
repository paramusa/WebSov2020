
var data = document.querySelectorAll('#userForm input');

data[0].onkeyup = update;
document.querySelector('#userForm input[type="email"]').onkeyup = update;
data[2].onkeyup = update;

//kaikenkattava
function update() {
	var name = document.querySelector('#userForm input[type="text"]');
	document.querySelector('#summary h1').innerHTML = name.value;
	var paragraphs = document.querySelectorAll('#summary p');
	paragraphs[0].innerHTML = data[1].value;
	paragraphs[1].innerHTML = data[2].value;
}