function iterativeLog(array) {
 array.forEach((element, index) => {
  console.log(`${index}: ${element}`)
 } //console.log
 ) //forEach
} //func

function iterate(callback) {
 var arr = ['dogs', 'cats'];
 arr.forEach(callback)
 return arr
}

function doToArray(array, callback) {
 array.forEach(callback);
}