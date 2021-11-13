// How to get duplicate numbers from an array

const numbers = [1, 5, 6, 7, 5, 1, 6, 8, 7, 9, 4];

const duplicates = numbers.filter(function(value, index, array ){
    return array.indexOf(value) !== index 
});

console.log(duplicates);

// How to get unique numbers from an array

const numberss = [1, 5, 6, 7, 5, 1, 6, 8, 7, 9, 4];

const unique = numberss.filter(function(value, index, array ){
    return array.indexOf(value) === index 
});

console.log(unique);