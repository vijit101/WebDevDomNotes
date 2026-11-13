let arr = [1,2,3,4,5];
let result = [];
for(let i=0;i< arr.length;i++){
result.push(arr[i]*arr[i]);
}

console.log(result);

let res = arr.map((num)=>{return num*num});
console.log(res);

let evens = [];
for(let i=0;i<arr.length;i++){
    if(res[i]%2==0){
        evens.push(res[i]);
    }
}
console.log(evens);

let evn = res.filter((num)=>{
    return num%2==0;
})

// sum of all the array  ? 
let acc = 0;
for(let i=0;i<arr.length;i++){
acc += arr[i];
}

let sm = arr.reduce(function sumofall(acc,num){acc+=num; return acc;},0);