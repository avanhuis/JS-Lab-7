var groceryList = [ 
	{	groceryItem: "milk",
		price: 4.50
	}, 
	{	groceryItem: "eggs",
		price: 3.25
	},
	{	groceryItem: "bread",
		price: 4.25
	} 
];

var total = 0;

groceryList.forEach(function(item) {
	console.log(item.groceryItem + "- \$" + item.price);
	total += item.price;
});

console.log("$" + total);

// var total = 0;

// for (var i = 0; i < groceryList.length; i++) {
// 	console.log(groceryList[i].groceryItem + "- \$" + groceryList[i].price);
// 	total += groceryList[i].price;
// }

// 	console.log("$" + total);