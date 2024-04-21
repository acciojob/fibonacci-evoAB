function fibonacci(num) {
// your code here
	if(num===0 || num===1)
		return num;
	return fibonacci(n-1)+fibonacci(n-2);
}

module.exports = fibonacci;
