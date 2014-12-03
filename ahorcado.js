var palabra = "Tamarindo";

//Declaracion de la clase ahorcado
// se usa el argumento "con" para atraer una variable que fuera
//que se encuentra fuera de la funcion
var Ahorcado = function (con)
{
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;
	this.dibujar();
}
// se puede constriur un nuevo "Ahorcado" desde fuera del constructor,
// incluso dentro de otra funcion si se declara la variable primero
// dentro de la funcion, si la variable no es global, deberá declararse
// siempre que se necesite.
function iniciar () 
{
	var canvas = document.getElementById('c')
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");
	var hombre = new Ahorcado(contexto);
	//insertar aqui condicional simple para eventos y ejecutar el switch
	for (var i = 0; i <= palabra.length; i++)
	{
		if (palabra.charAt(i) == inputUsuario) 
			{

			}
		else {hombre.iterar()}
		
	}
	
}
Ahorcado.prototype.dibujar = function() 
{
	// dibujo del poste
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
Ahorcado.prototype.iterar = function ()
{
	var fallos = this.intentos;
	fallos++;
	switch (fallos)
	{
		case 1:
		this.cabeza();
		break;
		case 2:
		this.cabeza();
		this.torso();
		break;
		case 3: 
		this.cabeza();
		this.torso();
		this.brazos();
		break;
		case 4:
		this.cabeza();
		this.torso();
		this.brazos();
		this.ojos();
	}
}

Ahorcado.prototype.cabeza = function ()
{
	var dibujo = this.contexto;
	dibujo.beginPath();
	dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
	dibujo.strokeStyle = "red"
	dibujo.lineWidth = 5;
	dibujo.stroke();
	dibujo.closePath();
}
Ahorcado.prototype.torso = function() 
{
	var dibujo = this.contexto;
	dibujo.beginPath();
	dibujo.moveTo(150, 180);
	dibujo.lineTo(150, 290);
	dibujo.stroke();

};
Ahorcado.prototype.brazos = function()
{
	var dibujo = this.contexto;
	dibujo.beginPath();
	dibujo.moveTo(176, 230);
	dibujo.lineTo(150, 180);
	dibujo.lineTo(125, 230);
	dibujo.stroke();
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