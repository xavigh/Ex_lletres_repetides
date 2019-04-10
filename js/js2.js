//exercici lletres repetides
//Fase 2

function nameLetters(){
    var name = ['A','L','E','J','3','A','N','D','R','O'];
    var nameStr = name.join('');
        console.log('Partim del nom '+ nameStr);
    var i = 0;


    //loop and findout if vocal, consonant or number.
    for(i=0; i < name.length; i++){

        // first we check if it is a digit or a letter
        if( isNaN(name[i]) ){
            //if yes it is a number then check if it is a vocal
              var str="aeiou_AEIOU";

              if(  str.match(name[i]) ){
                console.log("this is a vocal -->"+ name[i]);
              }
              else {// not a vocal, not a number then it is a consonant
                console.log("it is a consonant -->"+ name[i]);
              }
        }else {// if it is a number get the number
          console.log("it is a number -->"+ name[i]);
        }


        // if itś a digit then we input the digit.
    }


}// end of function
