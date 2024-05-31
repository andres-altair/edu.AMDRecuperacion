var palabra= document.getElementById("palabra");
let tiempo = document.getElementById("tiempo");
let listaHistorial = document.getElementById("historial");
let palabraArray=[];
let arrayAsterisco=[];
let intentos= document.getElementById("intentos");
let intento=0;
let tiempoPasado;


function pedirPalabra(){
	let palabraPedida  ="";
	palabraPedida= prompt("escribe la palabra a adivinar separado por ");
    palabraArray=palabraPedida.split("");
	let cantidadLetra = palabraArray.length;
	
	
	for(let i =0;i<cantidadLetra;i++){
		let asterisco="*";
		arrayAsterisco.push(asterisco) ;
	}
	console.log(arrayAsterisco.length)

	
	arrayAsterisco.forEach((asterisco)=>{
		palabra.innerHTML+=asterisco
	})
}
function aniadirLetra(){
	
	let inicio= new Date();
	let letra = prompt("escribe la letra");
	let acertado=false;
	for(i=0;i<palabraArray.length ; i++){
		if(letra==palabraArray[i]){
			arrayAsterisco[i]=letra
			acertado=true;
		}
	}
	if(acertado){
		arrayAsterisco.forEach((asterisco)=>{
		palabra.innerHTML+=asterisco
	})
	}else{
		intento++

	}
	
	if(intento==5){
		alert("has perdido");
	}else if(intento<3){
		alert("bien")
	}else if(intento<5){
		alert("por poco")
	}else if(intento>5){
		alert("has perdido")
	}else{
		alert("magnifico")
	}
	intentos.innerHTML=intento;
	let fin =new Date();
	let duracion= fin.getTime()- inicio.getTime();
	tiempoPasado+=duracion;
	tiempo.innerHTML=tiempoPasado;
	
}






