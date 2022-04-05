
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
    let cascadeList = [];
    cascadeList = array.map(function (x, i, v,) { cascadeArray(x, i, v, n) });
    for(let w = 0;w<cascadeList.length; w++){
    console.log(cascadeList[w]);
    }
    return cascadeList;
}

function cascadeArray(x, i, v, n) {
    let array=[];
    console.log(x,i,v,n);
    if((n > 0) && ((i+n)<=v.length)){
        for (let j = 0; j+i < i+n; j++) {
            array.push(v[i+j]);
            // console.log(n, j, i, j+i,i+n, x, v[i + j])
            console.log(array);
        }
        console.log[array];    
        
    } else array = x;

    console.log[array];
    return array;
}


eachCons(arr,1);
// console.log(eachCons(arr,3));

function check(arr, x) {
    // your code here
    let containsValue = false;
    arr.forEach(element => { if (x == element) { containsValue = true } });
    return containsValue
}

// console.log(check(arr,1))