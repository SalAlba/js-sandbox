	//  arr.find(callback[, thisArg])

	let arr = [ 1, 2, 3, 'a', 'b', 'c', {"id":1, "name":"x"}, {"id":2, "name":"y"}];

	function callback(ele){ return ele.id > 0 ; }

	console.log(arr.find(function(ele){ return ele.id >0;}));
	console.log(arr.find( ele => ele.id > 0));
	console.log(arr.find( callback));
