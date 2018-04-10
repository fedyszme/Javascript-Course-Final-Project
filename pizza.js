function placeOrder() {
	var text1 = "";
	var text2 = "";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByName("size");

		for (var i=0; i < sizeArray.length; i++) {
			if (sizeArray[i].checked){
				var checkedSize = sizeArray[i].value;
				text1 = text1+checkedSize+"<br>";
			}
		}
		
		if (checkedSize === "Personal") {
			sizeTotal = 6;
			//may need to add the text2 = text2 +sizeTotal +<br> here instead of at the bottom
		}
		else if (checkedSize === "Medium") {
			sizeTotal = 10;
		}
		else if (checkedSize === "Large") {
			sizeTotal = 14;
		}
		else if (checkedSize === "Extra Large") {
			sizeTotal = 16;
		}
		else {
			alert ("Please select a pizza size");
			return;
		}
	runningTotal = sizeTotal;
		
	
	text2 = text2 + sizeTotal + "<br>";
	
	pickCrust (text1, text2, runningTotal);

};


function pickCrust( text1, text2, runningTotal) {
	var crustTotal = 0;
	var crustArray = document.getElementsByName("crust");
	
		for (var i=0; i < crustArray.length; i++) {
			if (crustArray[i].checked){
				var checkedCrust = crustArray[i].value;
				text1 = text1+checkedCrust+"<br>";
			}
		}
		if (checkedCrust == null) {
			alert ("Please select a crust");
			return;
		}
		if (checkedCrust === "Cheese Stuffed Crust") {
				crustTotal = 3;
		}

	runningTotal = (runningTotal + crustTotal);
	text2 = text2 + crustTotal + "<br>";
	
	pickSauce(text1, text2, runningTotal);
};
	
function pickSauce(text1, text2, runningTotal) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByName("sauce");
	
		for (var i=0; i < sauceArray.length; i++) {
			if (sauceArray[i].checked){
				var checkedSauce = sauceArray[i].value;
				text1 = text1+checkedSauce+"<br>";
			}
		}
		if (checkedSauce == null){
			alert ("Please select a sauce");
			return;
		}
	runningTotal = (runningTotal + sauceTotal);
	text2 = text2 + sauceTotal + "<br>";
	
	pickCheese (text1, text2, runningTotal);

};	

function pickCheese (text1, text2, runningTotal) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByName("cheese");
	
		for (var i=0; i < cheeseArray.length; i++) {
			if (cheeseArray[i].checked){
				var checkedCheese = cheeseArray[i].value;
				text1 = text1+checkedCheese+"<br>";
			}
		}
		if (checkedCheese == null) {
			alert ("Please select a cheese");
			return;
		}		
		
			if (checkedCheese === "Extra Cheese") {
				cheeseTotal = 3;
			}
		
	runningTotal = (runningTotal + cheeseTotal);
	text2 = text2 + cheeseTotal + "<br>";
	
	pickMeats (text1, text2, runningTotal);
};

function pickMeats (text1, text2, runningTotal) {
	var meatTotal = 0;
	var meatArray = document.getElementsByName("meat");
	var checkedMeat = [];
	
		for (var i = 0; i < meatArray.length; i++) {
			if (meatArray[i].checked) {
				checkedMeat.push(meatArray[i].value);
				text1 = text1 + meatArray[i].value + ", " ;
			}
		}
		
	var meatCount = checkedMeat.length;
		if (meatCount > 1) {
			meatTotal = (meatCount - 1);
		}
		if (meatCount > 0) {
			text1 = text1.substring(0,text1.length-2) + "<br>";
			text2 = text2 + meatTotal + "<br>";
		} 
		
	runningTotal = (runningTotal + meatTotal);
	
	pickVeggies (text1, text2, runningTotal);
};

function pickVeggies (text1, text2, runningTotal) {
	var vegTotal = 0;
	var vegArray = document.getElementsByName("veggie");
	var checkedVeg = [];
	
		for (var i = 0; i < vegArray.length; i++) {
			if (vegArray[i].checked) {
				checkedVeg.push(vegArray[i].value);
				text1 = text1 + vegArray[i].value + ", ";
			}
		}
		text1 = text1.substring(0,text1.length-2) + "<br>";
	var vegCount = checkedVeg.length;
		if (vegCount > 1) {
			vegTotal = (vegCount - 1);
		}
		if (vegCount > 0) {
			text1 = text1.substring(0,text1.length-2) + "<br>";
			text2 = text2 + vegTotal + "<br>";	
		}
		
	runningTotal = (runningTotal + vegTotal);
		
	document.getElementById("receipt").style.opacity=1;
	document.getElementById("ordered").innerHTML=text1;
	document.getElementById("price").innerHTML=text2;
	document.getElementById("total").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};

function clearOrder() {
	document.getElementById("menu").reset();
	document.getElementById("receipt").style.opacity=0;
};
