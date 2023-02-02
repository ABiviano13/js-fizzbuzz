//CREARE UN CICLO FOR

//1. Scrivere formula del ciclo for, con variabile contatore, condizione e incremento
for (let i = 0; i < 100; i++) {
    //- stampare con console.log numeri da 1 a 100
    console.log (i + 1);

    //- far si che i multipli di 15 vengono chiamati FizzBuzz
    let multiples15 = (i + 1) % 15;
    //- far si che i multipli di 5 vengono chiamati Buzz
    let multiples5 = (i + 1) % 5;
    //-far si che i multipli di 3 vengono chiamati Fizz
    let multiples3 = (i + 1) % 3;

    // Stampare con console.log i multipli con le denominazioni distintive
    if (multiples15 === 0) {
        console.log ('FizzBuzz');
	} else if (multiples5 === 0){
        console.log ('Buzz');
    } else if (multiples3 === 0) {
        console.log ( 'Fizz');
	};
};
  