	//  arr.filter(callback[, thisArg])

	let arr = [ 
		1, 2, 3, 
		'a', 'b', 'c', 
		{"id":1, "name":"x", "category":'m'}, 
		{"id":2, "name":"y", "category":'m'},
		{"id":3, "name":"z", "category":'nk'},
		{"id":4, "name":"a", "category":'m'},
    {"id":5, "name":"b", "category":'nk'}
	];

	var callback = function(item){ return item.category === 'm';}

	console.log(arr.filter(callback));
	console.log(arr.filter(function(item){ return item.category === 'm';}));
	console.log(arr.filter(item => {return item.category === 'm';}));
	console.log(arr.filter(item => item.category === 'm'));
  
  /*
    {"id":1, "name":"x", "category":'m'}, 
		{"id":2, "name":"y", "category":'m'},
		{"id":4, "name":"a", "category":'m'}
  
  */
