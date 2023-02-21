const sum_pairs = (array, requestedSum) => {

    if (array.length <= 1){ // verificare daca exista destule elemente pentru a forma o pereche

        return "Not enough elements in the array to create a pair!"
    
    }

    auxiliarySet = new Set() // ma folosesc de un set pentru a stoca elementele deja parcurse o singura data pana cand se gaseste perechea potrivita ( si pentru a folosi .has())
    for (let i = 0; i <= array.length; ++i) { // accesare element cu element => O(n) (worst case scenario)

        wantedElement = requestedSum - array[i];
        if (auxiliarySet.has(wantedElement)) { // .has() => complexitate O(1)

            return [wantedElement, array[i]]; // O(1), doar un simplu return

        }
        
            auxiliarySet.add(array[i]); // .add() are complexitatea O(1) 

    }

    return "No pairs possible for the requested sum!" // daca nu se returneaza nimic pana in acest punct, inseamna ca nu exista perechi 
}

pairs = sum_pairs([10,5,2,3,7,5], 10)
console.log(pairs)

// Complexitatea aproximativa ar trebui sa fie O(n) (cel mai rau caz posibil) si sa putem compila pana la 10,000,000 elemente

