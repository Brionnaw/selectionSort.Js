// SELECTION SORT
// The Selection sort is an
// algorithm divides a list
// into two parts: the sublist of items already sorted,
// which is built up from left to right at the front (left) of the list,
// and the sublist of items remaining to be sorted that occupy the rest of the list. Initially,
// the sorted sublist is empty and the unsorted sublist is the entire list.
// The algorithm proceeds by finding the smallest (or largest, depending on sorting order)
// element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order),
//  and moving the sublist boundaries one element to the right.

var arr = [1,3,2]; // spllits the entire collection of data
  function selectionSort(arr){
    var i, j, minIx minval      //minIx -minumum interations; minval- minimum value//
    for(i = 0; i <arr.length; i++) // for
    minvVal = arr[minIx =i]
    for(j=1; j<arr.length; j++){
      if(arr[j] < min &&(minval = arr[minIx=J])){ // assigning an array and variable
       // both sides of the statement has to be the value true // it works off the truthiness of the statement.
      // 2< 3 && 2
      temp = arr[i] //3=1 [132]
      arr[i] = arr[minIx] //3 = 2 [122]
      arr[minIx = arr[temp] //2 ==3 [123]
    }
  }
}

//i and j will be two values that are going to compare
// && means both sides of the statement has to be true.(and operator)
// minix is the same thing as i



// VARIABLE LOOP VALUE
// (i)      0 | 1
// (minIx)  0 | 1
// (minVal) 1 | 3
// (j)      1 | 2
// (arr[j]) 3 | 2
//temp      - | 3
