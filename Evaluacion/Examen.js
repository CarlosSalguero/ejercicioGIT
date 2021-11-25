/// 1.- Colocar las condiciones necesarias para que se cumpla la salida en consola. (10 pts)

var numero1 = 5;
var numero2 = 8;
if(numero1<numero2) {
console.log("numero1 no es mayor que numero2");
}
if(numero2 >= 0) {
console.log("numero2 es positivo");
}
if(numero1 < 0) {
console.log("numero1 es negativo o distinto de cero");
}
if((numero1+1)<numero2) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

// 2 

function calcularFactorial (numero) {
	let factorial = 1; 
	for (i=1; i<=numero; i++) {
		factorial = factorial * i; 
	}
	return factorial; 
}

//3

function validarNumero(numero){
    if (numero%2 == 0)
        return "Es par";
    else
        return "Es Impar";
}

// 4

function validarPalindromo(valor) {
    const tmp = valor.split("").reverse().join("")
  
    return tmp === valor ? "La parabra ingresada es palindromo" : "La parabra ingresada no es palindromo"
  }

  // 5

  class Persona {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    obtDetalles() { 
            console.log("Nombre: " + this.nombre + " edad: " + this.edad);
    }
}

class Estudiante extends Persona {
    calidifacion;

    constructor(nombre, edad, calidifacion) {
        super(nombre, edad);
        this.calidifacion = calidifacion;
    }

    obtDetalles() { 
            console.log("Nombre: " + this.nombre + " edad: " + this.edad +  " Calidifacion: " + this.calidifacion);
    }
}

class Profesor extends Persona {
    asignatura;
    nivel;

    constructor(nombre, edad, asignatura = "JS", nivel = "JS") {
        super(nombre, edad);
            this.asignatura = asignatura;
            this.nivel = nivel;
    }

    obtDetalles() { 
            console.log("Nombre: " + this.nombre + " edad: " + this.edad +  " asignatura: " + this.asignatura +  " nivel: " + this.nivel);
    }
}

class  Grupo {
    profesor;
    promedio;
    Estudiantes=[];

    constructor(profesor, promedio, Estudiantes = []) {
        this.profesor = profesor;
        this.promedio = promedio;

        for (let j = 0; j < Estudiantes.length; j++) {
            this.Estudiantes.push(Estudiantes[j])
        }
    }

    calificar(){

        for (let j = 0; j < Estudiantes.length; j++) {
            this.Estudiantes[j].calidifacion = (Math.random() * 10);    
         }
    }

    promedio(){

        let totalEstudiantes = this.Estudiantes.length; 
        let sumatoria = 0;
   
        for (let j = 0; j < Estudiantes.length; j++) {
           sumatoria += this.Estudiantes[j].calidifacion;   
         } 

         return sumatoria/totalEstudiantes; 
    }

    obtdetalles(){
        this.profesor.obtDetalles();
        for (let j = 0; j < Estudiantes.length; j++) {
            sumatoria += this.Estudiantes[j].obtDetalles();   
          } 
    }
}

const ab = new Persona("carlos","23");
ab.obtDetalles()
const ab1 = new Estudiante("carlos","23","12");
ab1.obtDetalles()
const ab3 = new Profesor("carlos2","231");
ab3.obtDetalles()



//Bonus

function permutar(str) {

    for (let i = 0; i < str.length; i++) {
        
        for (let  j= 0; j < str.length; j++) {
            console.log()
          } 
      } 

}