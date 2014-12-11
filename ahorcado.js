var palabra = "TAMARINDO";

//Declaracion de la clase ahorcado
// se usa el argumento "con" para atraer una variable que fuera
//que se encuentra fuera de la funcion
var Ahorcado = function (con)
{
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;
}
// se puede constriur un nuevo "Ahorcado" desde fuera del constructor,
// incluso dentro de otra funcion si se declara la variable primero
// dentro de la funcion, si la variable no es global, deberá declararse
// siempre que se necesite.
function iniciar () 
{
	var canvas = document.getElementById('c')
	canvas.width = 600;
	canvas.height = 450;
	var contexto = canvas.getContext("2d");
	var hombre = new Ahorcado(contexto);

	hombre.fondo = new Image();
	hombre.fondo.onload = function()
	{
		hombre.CargarFondo(hombre.fondo, 0, 0);		
	}
	hombre.fondo.src = "Fondo.jpg";


	hombre.dibujar();
	hombre.cabeza = new Image();
	hombre.cabeza.src = "Cabeza.png";
	hombre.brazoDerecho = new Image();
	hombre.brazoDerecho.src = "Brazo derecho.png";
	hombre.brazoIzquierdo = new Image();
	hombre.brazoIzquierdo.src = "Brazo izquierdo.png";
	hombre.piernas = new Image();
	hombre.piernas.src = "Piernas.png";
	hombre.torso = new Image();
	hombre.torso.src = "torso.png";

	var boton = document.getElementById("boton");
	var encontrada = false;
	var a = new Array();
	for (var i = 0; i < palabra.length; i++)
		{
			a[i] = palabra.charAt(i)
		}
	var b = new Array();
	for (var i = 0; i < palabra.length; i++)
	{
		b[i] = "_ "
	}
	var blabla = b.join(" ");
	pista.innerText = blabla;
	function iterar (fallos)
	{
		switch (fallos)
		{
			case 1:
			hombre.render(hombre.cabeza, 0, 0);
			break;
			case 2:
			hombre.render(hombre.torso, 0, 0);
		}
	}
	boton.addEventListener("click", ciclo);
	function ciclo ()
	{
		var fallos;
		fallos = hombre.intentos;
		console.log("inicia funcion ciclo");
		var l = document.getElementById('letra');
		encontrada = false;
		console.log("Empiezas con " + fallos +" intentos");
		console.log("encontrada es false, por ahora")
		letra = l.value;
		letra = letra.toUpperCase();
		var pista = document.getElementById("pista");
	for (var i = 0; i < palabra.length; i++)
		{
		if (a[i] == letra) 
			{
				encontrada = true;
				b[i] = letra;
				this.blabla = b.join(" ");
				console.log("encontrada es true");
				console.log(b);
			}
		else {blabla = b.join(" ");};
		console.log(blabla);
		pista.innerText = blabla;
		}
	if (encontrada == true) 
		{
			console.log("encontrada, sin trazo");
		} 
		else
			{
			console.log("encontrada es false, por lo tanto se itera");
			hombre.intentos ++;
			console.log(hombre.intentos);
			hombre.iterar(hombre.intentos);
			console.log("ya llevas " + hombre.intentos + " intentos");
			if (hombre.intentos >= hombre.maximo) 
				{
					alert("Has perdido, buscate un dicionario!!");
				};
			};
	};
}
Ahorcado.prototype.dibujar = function() 
{
	console.log("dibujo del poste");
	this.CargarFondo(this.fondo, 0, 0);
	var dibujo = this.contexto;
	dibujo.beginPath();
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineWidth = 10;
	dibujo.strokeStyle = "#000000";
	dibujo.stroke();
	dibujo.closePath();
};
Ahorcado.prototype.render = function (dibujo, x, y)
{
	this.dibujo = dibujo;
	this.x = x;
	this.y = y;
	var contexto = this.contexto;
	contexto.drawImage(this.dibujo, this.x, this.y);
}

Ahorcado.prototype.ojos = function ()
{
	var dibujo = this.contexto;
	dibujo.beginPath();
	dibujo.lineWidth = 3;
	dibujo.moveTo(130, 130);
	dibujo.lineTo(140, 140);
	dibujo.stroke();
	dibujo.moveTo(130, 140);
	dibujo.lineTo(140, 130);
	dibujo.stroke();
	dibujo.moveTo(155, 130);
	dibujo.lineTo(165, 140);
	dibujo.moveTo(155, 140);
	dibujo.lineTo(165, 130);
	dibujo.stroke();
	dibujo.closePath();
}
Ahorcado.prototype.CargarFondo = function (dibujo, x, y)
{
	this.dibujo = dibujo;
	this.x = x;
	this.y = y;
	var contexto = this.contexto;
	contexto.drawImage(this.dibujo, x, y);
	console.log("fondo cargado");
}