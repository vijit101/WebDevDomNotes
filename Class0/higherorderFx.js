function area(r){
return 3.14 * r * r;
}
function circumference(r){
return 2 * 3.14 * r;
}
function diameter(r){
return 2 * r;
}

function calculate(radius, logic){
    return logic(radius);
}

console.log(calculate(10,area));