let arr = [1, 2, 3, 4, 5];
let sqrd = [];

for(let i=0;i<arr.length;i++){
    let sqr = arr[i]*arr[i];
    sqrd.push(sqr);
}

console.log(sqrd);


let ans = arr.map(function square(num){
    return num*num;
})

let evenArray = arr.filter(function(num){
    return num % 2 == 0;
})
console.log(evenArray)

let sum = 0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum);

let newSum = arr.reduce(function addUp(acc,num){
    acc+=num;
},0);