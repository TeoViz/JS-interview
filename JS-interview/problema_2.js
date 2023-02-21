const evenString = (arrayOfStrings) => (arrayOfStrings.filter(verifyEven).filter((currentString) => currentString != undefined)); /* ne folosim de primul filter pentru a filtra fiecare string din array, 

 verificand daca string-ul e even cu functia verifyEven si apoi de al doilea filter pentru a filtra elementele undefined care sunt returnate de functia verifyEven in caz ca string-ul nu este even */


function verifyEven(currentString) {

    sumOfCurrentString = 0; // initializare suma codurilor ASCII cu 0
    for (let i = 0; i < currentString.length; ++i) { // parcurgere string element cu element ( avem nevoie de indice)

        sumOfCurrentString = sumOfCurrentString + currentString[i].charCodeAt(0); // realizarea sumei

    }

    if ((sumOfCurrentString & 1) == 0) { /* Verificare paritate, facand AND logic cu 1 (verificam ultima cifra din reprezentarea binara). 
        
        Daca rezultatul este 0, inseamna ca e par. In caz contrar, e impar. */

        return currentString; 
        
    }
}

// verifyEven returneaza string-ul propriu-zis (daca este even) sau undefined (daca nu este even)

Exemplu = evenString(['b','ac', 'a'])
console.log(...Exemplu)
