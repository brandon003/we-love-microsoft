
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

    
    console.log(cascadeList);
    console.log(cascadeList.length)
    // return cascadeList;
}

function cascadeArray(x, i, v, n) {
    let array;
    console.log(`For Each x=${x}, i=${i}, v=${v}, n=${n}`);
    if((n > 0) && ((i+n)<=v.length)){
        for (let j = 0; j+i < i+n; j++) {
            array.push(v[i+j]);
            console.log(`For Loop n=${n}, j=${j}, i=${i}, j+i=${j+i} < i+n=${i+n} , x=${x} , v[i + j]=${v[i + j]}`)
            console.log('loop array ',array);
        }
        console.log[array];    
        
    } else array=x;

    // console.log[array];
    return array;
}


// eachCons(arr,0);
// console.log(eachCons(arr,3));

function check(arr, x) {
    // your code here
    let containsValue = false;
    arr.forEach(element => { if (x == element) { containsValue = true } });
    return containsValue
    //alternative
}

const check1 = (arr, x) => arr.includes(x)

// console.log(check(arr,1))
console.log(check1(arr,1))



