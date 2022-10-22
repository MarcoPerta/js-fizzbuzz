let divBox = document.getElementById('box')
console.log(divBox)

let divContainer = document.getElementById('container-fluid');

// Creo ciclo for
for (let i=1; i <= 100; i++){
    if((i%3 === 0) && (i%5 === 0)){
        let FizzBuzz = '<span>il numero è FizzBuzz</span>'
        divContainer.innerHTML += FizzBuzz;
        divBox.append(FizzBuzz);
        console.log('FizzBuzz')
    } 
    else if (i%5 === 0) {
        let Fizz = '<span>il numero è Fizz</span>'
        divContainer.innerHTML += Fizz;
        divBox.append(Fizz);
        console.log('Fizz')
    } 
    else if (i%3 === 0){
        let Buzz = '<span>il numero è Buzz</span>'
        divContainer.innerHTML += Buzz;
        divBox.append(Buzz);
        console.log('Buzz')
    }
    else {
        let stringa = `<span>il numero è ${i}</span>`
        divContainer.innerHTML += stringa;
        divBox.append(stringa);
        console.log(i)
    }

    // let stringa = `<span>il numero è ${i}</span>`
    // divContainer.innerHTML += stringa;
    
} 