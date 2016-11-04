var arr = [1,3,2];

function selectionSort(arr) {
  var i, j, minIx, minVal;

  for(i = 0; i < arr.length; i++) {

    minVal = arr[minIx = i];

    for(j = i + 1; j < arr.length; j++) {

      if(arr[j] < minVal && (minVal = arr[minIx = j])) {

        temp = arr[i];//[1(3)2]


        arr[i] = arr[minIx]; //[1 (2) 2]
        arr[minIx] = temp; //[1 2(3)]
      }
    }
  }
  return arr;
};
console.log(selectionSort(arr));

// VARIABLE LOOP VALUE
// (i)      0 | 1  (+1)
// (j)      1 | 2
// (minIx)  0 | 1 (2)
// (minVal) 1 | 3(2)
//temp      - | 2
