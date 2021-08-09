// Your code here.
const min = function(x,y) {
  if (x < y) {
    return x
  } else {
    return y
}
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Your code here.
const isEven = function(x) {
  if (x < 0) {
    x = Math.abs(x)
  }
  if (x == 0){
    return true;
  } else if (x == 1) {
    return false;
  } else {
    return(isEven(x-2))
  }
}
  
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
console.log(isEven(-10))

const countChar = function(s,l) {
  var count = 0
  for (var i = 0 ; i < s.length ; i++){
    if (s[i] == l){
      count += 1
    }
  }
  return count
}
const countBs = function(s,l) {
  var l = "B"
  var count = 0
  for (var i = 0 ; i < s.length ; i++){
    if (s[i] == l){
      count += 1
    }
  }
  return count
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
