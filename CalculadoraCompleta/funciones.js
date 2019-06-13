var dato = ""; //Dato en display
var total = 0;
var bandSuma = false;
var bandResta = false;
var bandMulti = false;

function display_numeros(numero)
{
	document.getElementById('display').value = dato + numero;
	dato = document.getElementById('display').value;
}


function suma()
{	
	igual();
	dato  = ""; //Se vuelve a inicializar el dato	
	bandSuma = true;
	bandResta = false;
	bandMulti = false;

}

function igual()
{
	if(bandSuma)
		document.getElementById('display').value = Number(total) + Number(dato);
	else if(bandResta)
		document.getElementById('display').value = Number(total) - Number(dato);
	else if(bandMulti)
		document.getElementById('display').value = Number(total) * Number(dato);
	total = Number(document.getElementById('display').value);
	dato = 0;

}

function resta()
{
	igual();
	
	dato = "";
	bandResta = true;
	bandSuma = false;
	bandMulti = false;

}
function multiplica()
{
	//sigual();
	if(bandMulti)
	{
		document.getElementById('display').value = Number(total) * Number(dato);
		bandMulti = false;

	}
	else{
		dato = 0;
	total = document.getElementById('display').value;
	bandMulti = true;
	bandResta = false;
	bandSuma = false;
	}
	

}

document.getElementById('display').value = 0;