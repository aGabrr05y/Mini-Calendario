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
año_nombre.innerText = fecha_actual.getFullYear();

//OPTIMIZAMOS EL CODIGO PARA LA OBTENCION DE LA FECHA DEL DIA Y EL MES COMO STRING Y SE PIDIO QUE FUESE EN MAYUSCULA
mes_nombre.innerText = fecha_actual.toLocaleDateString ("es",{
    month: "long"
}).toUpperCase();


dia_nombre.innerText = fecha_actual.toLocaleDateString ("es",{
    weekday: "long"
}).toUpperCase();

