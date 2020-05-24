const resultPositive = document.querySelector('.resultPositive');
const resultNegative = document.querySelector('.resultNegative');
let rightChoise = document.querySelectorAll('.rightAnswer'); //vienen como un arreglo
let wrongChoise = document.querySelectorAll('.wrongAnswer');
let rightAnswers = 0;
let wrongAnswers = 0;


for (let i = 0; i < rightChoise.length; i++){
  rightChoise[i].addEventListener('click',positiveScore);
}

for (let i = 0; i < wrongChoise.length; i++){
  wrongChoise[i].addEventListener('click',negativeScore);
}

function showElements(event, elementsToShow, elementsToHide){  /*Función qué define elementos a mostrar y a ocultar*/
    // Valor del input
    event.preventDefault()
    const name = document.getElementById('userName').value
    document.getElementById('name').innerHTML = `Hola ${name}`

    for (let i = 0; i < elementsToShow.length; i++) { /*Al inicio i es igual a cero y cuando la longuitud de elementosAMostrar sea mayor que i, a éste se le adiciona 1*/
        document.getElementById(elementsToShow[i]).style.display='block'; /* Obtener los elementos by ID que cumplan la variable anterior y su estilo de display será block (En bloque, mostrar)*/
    }
    for (let i = 0; i < elementsToHide.length; i++) {
        document.getElementById(elementsToHide[i]).style.display='none'; /* Obtener los elementos by ID que cumplan la variable anterior y su estilo de display será none (No mostrar)*/
    }
}

function positiveScore(){
  rightAnswers++
  console.log(rightAnswers)
}


function negativeScore(){
  wrongAnswers++
  resultPositive.style.display = 'none';
  resultNegative.style.display = 'block';
  console.log(wrongAnswers);
  let wrongAnswersNumber = document.getElementById('totalWrongAnswer');
  wrongAnswersNumber.innerHTML = 'Respuestas incorrectas: ' + wrongAnswers + '. O sea, te mordió un zombie.'
}
