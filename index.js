//CREAMOS CONSTANTES INDICANDO LOS DIAS Y MESES EXISTENTES POR NOMBRE
const meses_del_año = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
const dias_de_la_semana =["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

//CONECTAMOS CON HTML PARA PODER MANIPULAR LOS ELEMENTOS
const fecha = document.getElementById("day-number");
const mes_nombre = document.getElementById("month-name");
const año_nombre = document.getElementById("year");
const dia_nombre = document.getElementById("day-name");

//CREAMOS UNA CONSTANTE QUE ALMACENE LOS VALORES DE LA CLASE NEW DATE PARA PODER USARLA Y MODIFICARLA 
const fecha_actual = new Date ();

/*CONECTAMOS CON HTML Y CONSEGUIMOS LOS VALORES DE LAS FECHAS ACTUALES, AÑADIENDO EL NOMBRE DEL MES Y DEL DIA 
PARA PODER REFLEJARLO EN PANTALLA SEGUN LA POSICION*/
fecha.innerText = fecha_actual.getDate();
mes_nombre.innerText = meses_del_año[fecha_actual.getMonth()];
año_nombre.innerText = fecha_actual.getFullYear();
dia_nombre.innerText = dias_de_la_semana[fecha_actual.getDay() - 1];