let correct= 0;
let incorrect= 0;

//Pantalla de bienvenida, nombre
const name = prompt("¿Cuál es tu nombre?");
document.write("HOLA " +  name.toUpperCase() + "<br>");
//Opcion de trivia
let option = prompt("Elige una trivia \n a)Habilidad verbal \n b)Habilidad matemática" );


if (option == "a" || option == "A") {
  alert("Habilidad verbal");
  let question1 = prompt("¿Qué letra completa la palabra deci_ión? \n 's' o 'c'");

  if (question1== "s" || option == "S"){
    alert("Es correcto");
    correct++;
  } else {
    alert("Es incorrecto");
    incorrect++;
  }
  let question2 = prompt("¿Cuántos días tiene una semana?");
  if (question2=="7") {
    alert("Es correcto");
    correct++;
  } else {
    alert("Es incorrecto");
    incorrect++;
  }
  let question3 = prompt("¿Qué letra completa la palabra ad_erbio? \n 'v' o 'b' ");
  if (question3== "v" || question3 == "V") {
    alert("Es correcto");
    correct++;
  } else {
    alert("Es incorrecto");
    incorrect++;
  }
} else if (option == "b" || option == "B"){
  alert("Habilidad matemática");
  let question4 = prompt("¿Qué numero sigue a la serie 1,3,5..?");
  if (question4=="7") {
    alert("Es correcto");
    correct++;
  } else {
    alert("Es incorrecto");
    incorrect++;
  }

  let question5 = prompt("¿Cuánto es 2+2?");
  if (question5=="4") {
    alert("Es correcto");
    correct++;
  } else {
    alert("Es incorrecto");
    incorrect++;
  }
  let question6 = prompt("¿Cuá es la √9 ?");
  if (question6=="3") {
    alert("Es correcto");
    correct++;
  } else {
    alert("Es incorrecto");
    incorrect++;
  }

}

document.write("<br/>Tus respuestas correctas son "  + correct + "<br/>Tus respuestas incorrectas son " + incorrect);
