//exercici lletres repetides

// FASE 4
// Crea una altra llista amb el teu cognom on cada posició correspongui a una lletra.
//
// Fusiona les dues llistes en una sola. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de la llista name i surname i al acabar l’execució només tindrem una que es dirà fullName.

function arrSurname(){
    var arrName = ['A','L','E','J','A','N','D','R','O'];
    var arrSurname = ['K','A','L','E','S'];

    //use map object to convert the two arrays in one.
    var fullName = arrName.concat(" ", arrSurname);
      console.log(fullName);
      
// console.log(arr_letters);
}// end of function
