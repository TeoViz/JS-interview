const findFirstRecurringChar = (givenString) => {

    for (let i = 0 ; i < givenString.length - 1 ; ++i) { // parcurgere string caracter cu caracter

        if (givenString.indexOf(givenString[i], i + 1) != -1) // cautam daca caracterul curent apare in sirul incepand cu pozitia i + 1 (pozitia urmatoare)

            return givenString[i]; // daca este recurring, il returnam

    }  

    return 'No recurring characters!' // cazul contrar
}

character = findFirstRecurringChar('foo');
console.log(character)