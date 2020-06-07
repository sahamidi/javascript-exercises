function add(a, b) {
	return a + b;

	  }

function subtract(a, b) {
	return a-b
}



function sum () {
return (acc, curval) => acc + curval;

}



function multiply (array) {
    return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
}



function power(a,b) {
	return Math.pow(a,b);
	
}

function factorial(a) {
	
	if (a==0 || a==1) {	
		value = 1
		return value
	}
	let array= [a]
	while (a>=2) {
		a=a-1
		array.push(a)
	}
	
	return array.reduce((accumulator,current) => accumulator * current);
}


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}