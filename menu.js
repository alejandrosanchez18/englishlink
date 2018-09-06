$(document).ready(main);

var contador = 1;

function myFunction(x) {
  x.classList.toggle("change");
  if(contador == 1){
    $('nav').animate({
      left: '-100%'
    });
    contador = 0;
  } else {

    $('nav').animate({
      left: '0'
    });
    contador = 1;
  }


};
