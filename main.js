
let divBox = document.getElementById('box');
console.log(divBox);
// Creo ciclo for
for (let i=1; i <= 100; i++){
    if((i%3 === 0) && (i%5 === 0)){
        console.log('FizzBuzz')
    } 
    else if (i%5 === 0) {
        console.log('Fizz')
    } 
    else if (i%3 === 0){
        console.log('Buzz')
    }
    else {
        console.log(i)
    }

    let stringa = `<p>il numero è ${i}</p>`
    divBox.innerHTML += stringa;
    
} 