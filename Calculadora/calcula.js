

function suma(a, b){
	var c = Number(a)+Number(b);
	document.getElementById('resp').value = c;
}

function resta(a, b){
	var c = Number(a)-Number(b);
	document.getElementById('resp').value = c;
}

function division(a, b){
	if(Number(b) == 0)
	{
		alert('No se puede dividir entre cero');
	}
	else{
		var c = Number(a)/Number(b);
	document.getElementById('resp').value = c;
	}
	
}

function producto(a, b){
	var c = Number(a)*Number(b);
	document.getElementById('resp').value = c;
}