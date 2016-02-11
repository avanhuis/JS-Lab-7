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

//Function for Adding Grocery List to index.html
var total=0; //sets initial total counter equal to zero

groceryList.forEach(function(item) {
	var unorderedList = document.getElementById('shoppinglist'); //creates a variable for the unordered list with the ID 'shoppinglist' in the HTML
	var myList = document.createElement('li'); //creates list items for each grocery item & price, creates a variable of it to call later
	var displayTotal = document.getElementById('totalDisplay'); //creates a variable for the grocery item total from the <p> tag in the HTML

	myList.innerHTML=item.groceryItem + "- \$" + item.price; //adds the grocery items and prices into the html in 'li' format
	unorderedList.appendChild(myList); //adds the li to the unordered list
	
	total += item.price; //calculates the total price, will run through each loop
});

	document.getElementById('totalDisplay').innerHTML = "Total: $" + total; //displays the total in the paragraph after the unordered list


//BONUS: Where It All Goes Wrong

 	function submitNewStuff() {
 	var itemAdd = document.getElementById("itemInput").value; //naming an added item to a variable
 	var priceAdd = document.getElementById("priceInput").value; //naming an added price to a variable


	var unorderedList = document.getElementById('shoppinglist'); //creates a variable for the unordered list with the ID 'shoppinglist' in the HTML
	var myList = document.createElement('li'); //creates list items for each grocery item & price, creates a variable of it to call later
	var displayTotal = document.getElementById('totalDisplay'); //creates a variable for the grocery item total from the <p> tag in the HTML

 	priceAdd = parseInt(priceAdd); //making sure the price is a number

	myList.innerHTML=itemAdd + "- \$" + priceAdd; //adds the grocery items and prices into the html in 'li' format
	unorderedList.appendChild(myList); //adds the li to the unordered list


 	total += priceAdd;
 }

 	// var adding=document.getElementById('submitNewStuff');
 	// adding.addEventListener("click", submitNewStuff, false);

