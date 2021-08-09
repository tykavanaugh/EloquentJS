for (var i = 1 ; i < 101 ; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
    	console.log("FizzBuzz")
    }
  	else if (i % 3 == 0){
		console.log("Fizz")
    } else if (i % 5 == 0) {
    	console.log("Buzz")
    } else {
    	console.log(i)
    }
}

var height = 10
var width = 20

for (var h = 0 ; h < height ; h++) {
  var out = ""
  for (var w = 0 ; w < width ; w++) {
  if (w % 2 == 0) {
    out += " "
  	} else {
      out += "#"
    }
  } 
	if (h % 2 == 0) {
    console.log(out)
  	} else {
      out = out.substring(0, out.length - 1);
      out = " " + out
      console.log(out)
    }
}
