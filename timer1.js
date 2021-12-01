const arr1 = process.argv.slice(2);
console.log(arr1);

const timer = function(arr1) {

  for (i in arr1){
    if (arr1[i] >= 0 || typeof arr1[i] === 'number'){
    setTimeout (() => {
  process.stdout.write('\x07');
}, 1000 * arr1[i])}}};

timer(arr1);
