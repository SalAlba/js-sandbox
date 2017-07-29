
	let arr = [ 1, 2, 3, 'a', 'b', 'c', {"id":1, "name":"x"}, {"id":2, "name":"y"}];


	console.log(arr);
	console.log(arr.slice());
	console.log(arr.slice(0));
	console.log(arr.slice(-1));
	console.log(arr.slice(-3));
	console.log(arr.slice(3,6));
	console.log(arr.slice(-5, -2));

	/* Output
		(8) [1, 2, 3, "a", "b", "c", Object, Object]
		(8) [1, 2, 3, "a", "b", "c", Object, Object]
		(8) [1, 2, 3, "a", "b", "c", Object, Object]
			[Object]
		(3) ["c", Object, Object]
		(3) ["a", "b", "c"]
		(3) ["a", "b", "c"]

	 */
