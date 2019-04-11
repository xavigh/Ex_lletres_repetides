//exercici lletres repetides

// sort the array then check for repetitions
// then count
//Fase 3
function arrMapCount(){
    var arrName = ['A','L','E','J','A','N','D','R','O'];
    //map function to count repetitions and get  each item of the array
        var arr_letters = new Map();
        for(i=0; i < arrName.length; i++){
            if(arr_letters.has(arrName[i])){
              arr_letters.set(arrName[i], arr_letters.get(arrName[i])+1);
            }
            else{
              arr_letters.set(arrName[i], 1);
          }
    } //for loop
console.log(arr_letters);
}// end of function
