// codewars masalalar.
//1. masala
{
    //Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

    function invert(array) {
        return array.map(num => -num)
    }
}

// 2. masal
{
    //Write a function to split a string and convert it into an array of words.
    
    function stringToArray(word){
        return word.split(' ')
      
      } 
}

// 3. masala
{
    //Satrni bo‘lish va uni so‘zlar massiviga aylantirish funksiyasini yozing.

    function removeExclamationMarks(s) {
        return s.toString(" ").split("").splice(0, 11).join("");
  }
}

// 4. masala
{
    //Given a random non-negative number, 
    //you have to return the digits of this number within an array in reverse order.

    function digitize(n) {
      return n.toString().split('').reverse().map(Number);
    }
  }

// 5. masala   
{
    //Given an array of integers, return a new array with each value doubled.
  
    function maps(x) {
      return x.map(n => n * 2)
    }
}
  
// 6. masala
{
    //This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
    
    function simpleMultiplication(number) {
      return number % 2 === 0 ? number * 8 : number * 9;
    }
}