var a, b;
document.getElementById('formulario').addEventListener('submit',function(e){
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	e.preventDefault();
});

suma(){
	alert(a);
	document.getElementById('resp').value = a + b;
	alert('suma');
}