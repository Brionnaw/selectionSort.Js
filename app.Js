var arr = [1,3,2];

function selectionSort(arr) {
  var i, j, minIx, minVal;

  for(i = 0; i < arr.length; i++) {

    minVal = arr[minIx = i];

    for(j = i + 1; j < arr.length; j++) {

      if(arr[j] < minVal && (minVal = arr[minIx = j])) {

        temp = arr[i];


        arr[i] = arr[minIx];
        arr[minIx] = temp;
      }
    }
  }
  return arr;
};
console.log(selectionSort(arr));

// VARIABLE LOOP VALUE
// (i)      0 | 1  (+1)
// (minIx)  0 | 1 (+1 )
// (minVal) 1 | 3
// (j)      1 | 2
// (arr[j]) 3 | 2
//temp      0 | 2
