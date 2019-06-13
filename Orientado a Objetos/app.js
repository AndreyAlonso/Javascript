class Product
{
	constructor(name, price, year)
	{
		this.name = name;
		this.price = price;
		this.year = year;
	}

}

/* Clase User Interface */
class UI
{
	addProduct(product)
	{
		//Se accede al div con id 'product-list'
		const productList = document.getElementById('product-list');
		//Se crea un elemento HTML
		const element = document.createElement('div');
		element.innerHTML = `
		<div class="card text-center mb-4"> 
		<div class="card-body text-primary">
		<strong>Product name</strong>: ${product.name}
		<strong>Product price</strong>: ${product.price}
		<strong>Product year</strong>: ${product.year}
		<button class="btn btn-danger text-white" name="delete">Delete product</button>
		</div>

		</div>

		`;
		//Se agrega el elemento creado al documento HTML
		productList.appendChild(element);
		// Se accede a la función para limpiar el formulario
		this.resetForm(); 

	}

	resetForm()
	{
		document.getElementById('product-form').reset(); //Limpia el formulario
	}

	deleteProduct(elemento)
	{
		if(elemento.name === 'delete')
		{
			//Se accede al primer div del cuadro 
			elemento.parentElement.parentElement.parentElement.remove();
			this.showMessage('Product deleted successfully', 'warning');
		}
	}

	showMessage(message, cssClass)
	{
		const div = document.createElement('div');
		div.className = 'alert alert-' + cssClass + " mt-2";
		div.appendChild(document.createTextNode(message));
		// Mostrando en DOM
		const container = document.querySelector('.container'); //Seleccion de clase container
		const app = document.querySelector('#App'); //Seleccion de id App
		container.insertBefore(div,app); 

		setTimeout(function()
		{
			document.querySelector('.alert').remove();

		}, 1000);
	}	


}

//DOM Events (Document Object Model)

document.getElementById('product-form')
.addEventListener('submit',function(e){
	const name = document.getElementById('name').value;
	const price = document.getElementById('price').value;
	const year = document.getElementById('year').value;

	console.log(name, price, year);

	const product = new Product(name, price, year); //Creación de un nuevo objeto
	const ui = new UI();
	if(name === '' || price === '' || year === '')
	{
		ui.showMessage("Complete fields please", "primary");
	}
	else{
		ui.addProduct(product);
		ui.showMessage("Product added successfully", "success");
	}
	
	e.preventDefault(); //Se cancela los eventos default (Actualizar pagina al pulsar el boton)
});



/*Detecta si se da click en todo lo que este en 'product-list' */
document.getElementById('product-list').addEventListener('click', function(e){
	const ui = new UI();
	ui.deleteProduct(e.target);

});