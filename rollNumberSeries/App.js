// How to set a roll serially...

const rollNumbers = [3, 5, 1, 6, 2, 15];

console.log(rollNumbers.sort(function(a, b){
    return a - b;
}));