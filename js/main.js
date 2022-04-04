
let arr = [1,2,3,4,5,6,7,8,9];

// function eachCons(array, n) {
//   let cascadeList = array.map(x=> cascadeArray(x,n))
// 	return [cascadeList];
// }

// function cascadeArray(x,n){
//   let array=[];
// //   console.log(x, n)
//   for(let i=0;i<n;i++){
//     array.push(x+i);
//     // console.log(i,x,n)
//   }
//   return array;
// }


function eachCons(array, n) {
    let cascadeList = array.map(function (x, i, v,) { cascadeArray(x, i, v, n) });
    return cascadeList;
}

function cascadeArray(x, i, v, n) {
    let array=[];
    // console.log(x,i,v,n);
    if (n > 0) {
        for(let j = 0; j < n; j++) {
            array[j]=v[i];
            console.log(j,i,x)
            console.log(array[j]);
        }
        return array;
    } else return x;
}


console.log(eachCons(arr,3));

function check(a, x) {
    // your code here
    let containsValue = false;
    return containsValue = a.foreach(element => { if (x == element) { return true });
}