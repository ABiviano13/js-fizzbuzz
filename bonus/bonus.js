//CREARE UN CICLO FOR
let gridElement = document.getElementById('grid')
//1. Scrivere formula del ciclo for, con variabile contatore, condizione e incremento
for (let i = 0; i < 100; i++) {
    //- stampare con console.log numeri da 1 a 100
    let indice = i + 1
    // console.log (indice);

    //- far si che i multipli di 15
    let multiples15 = indice % 15;
    //- far si che i multipli di 5
    let multiples5 = indice % 5;
    //-far si che i multipli di 3
    let multiples3 = indice % 3;

    //creiamo una variabile d'appoggio
    let message = indice;


    // Stampare i multipli con le denominazioni distintive
    if (multiples15 === 0) {
        //vengono chiamati FizzBuzz
        message = 'FizzBuzz'
	} else if (multiples5 === 0){
        //vengono chiamati Buzz
        message = 'Buzz';
    } else if (multiples3 === 0) {
        //vengono chiamati Fizz
        message = 'Fizz';
	}

    let divString = '<div>' + message + '</div>'
    gridElement.innerHTML += divString 
};