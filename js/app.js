//CREARE UN CICLO FOR

//1. Scrivere formula del ciclo for, con variabile contatore, condizione e incremento
for (let i = 0; i < 100; i++) {
    //- stampare con console.log numeri da 1 a 100
    let indice = i + 1
    // console.log (indice);

    //- far si che i multipli di 15
    const multiples15 = indice % 15;
    //- far si che i multipli di 5
    const multiples5 = indice % 5;
    //-far si che i multipli di 3
    const multiples3 = indice % 3;


    // Stampare con console.log i multipli con le denominazioni distintive
    if (multiples15 === 0) {
        //vengono chiamati FizzBuzz
        console.log ('FizzBuzz');
	} else if (multiples5 === 0){
        //vengono chiamati Buzz
        console.log ('Buzz');
    } else if (multiples3 === 0) {
        //vengono chiamati Fizz
        console.log ( 'Fizz');
	} else{
        console.log (indice);
    }
};


// let container = document.createElement('p')
// console.log(container.outerHTML)
// container.innerHTML += container.outerHTML