var myArray[ , , ]; // q1
var array['dog', 'cat', 'fox', 'monkey']
array[0]//'dog'
array[2]//'fox'
array[3]//'monkey'


var Ar=[1, 2, 3, 4, 5, 6, 7, 'The quick brown fox jumped over  the lazy dog', true, false, true ] //q3

function emptyArray(){
    var emptyArray=[];
     return emptyArray
 }




 function numbersArray() {
    var  numbersArray=[1, 2, 3, 4, 5];
     return numbersArray
    } // q5
    
  function booleansArray() {
   var boo=[true, true, true]
    return boo;
}  


function stringsArray() {
    var name=["benkhoud","wifek"] 
     return name
 }    //q7




 function arrayLength(array) {
    return array.length 
  }    //q8

  /// more practice

  function firstElement(array) {
    return array[0] 
  }  


  function lastElement(array) {
    return array[array.length-1]
 }  


 function getNthElement(array, number) {
    return array[number];
   }


   function push(array, element) {
    array[array.length]= element
        return array
    }  
  
    function pop(array) {
      var res=[]
       res= [array[0]]
       for (i=1; i<array.length-1;i++){
           res[i]=array[i];
       }
   return res;
       return res;
   }  


   function pop(array) {
    array.splice(array.length-1,1)
     return array
 }  



   function unshift(array, element) {
    var tab=[];
     tab[0]= element;
    for (i=1; i<array.length+1; i++){
        tab[i]= array[i-1]
    }
     return tab
 }  

 function unshift(array, element) {
  array[array.length]= element;
    return array
}  





 function shift(array){
  array.splice(0,1);
  return array
}


function reassignLast(array, element) {
  array[array.length-1]= element;
   return array
}  

function reassignNthElement(array, index, element) {
  array[index]= element;
   return array
}  










