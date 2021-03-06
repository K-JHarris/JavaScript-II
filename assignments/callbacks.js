// Create a callback function and invoke the function to test your work.
// You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'Gum', 'Yo-yo'];


  //Given this problem: 
  
  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });


function getLength(arr, cb) {
  return cb(arr.length);
  // getLength passes the length of the array into the callback.
}

function last(arr, cb) {
  return cb(arr.length -1)
  // last passes the last item of the array into the callback.
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y + y + y - (2 * y));  
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let boolo = false;
  for(i=0; i < list.length; i++){
    if(list[i] === item){
      boolo = true;
      break; // this was all dustin, thank you dustin
    }
  }
  return cb(boolo);
}
contains('Gum', items, function(test) {
  console.log(test);
}); 
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let hasItem = false;
  let newArray = [];

  //loop through array
  for(let i = 0; i < array.length; i++) {

    //for each item check to see if newArray has it
    for(let j = 0; j < newArray.length; j++) {

      //if newArray has item flip hasItem
      if(array[i] === newArray[j]) hasItem = true;
    }

    //if hasItem is false, push item into newArray
    if(!hasItem) newArray.push(array[i]);

    //reset hasItem
    hasItem = false;
  }
  return cb(newArray);
}