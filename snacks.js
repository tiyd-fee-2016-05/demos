function howMuchSnacks(snack, snackAmt, currentAge, maxAge){

	var lifeSpan = maxAge - currentAge;
	var snacksNeeded = lifeSpan * 365 * snackAmt;

	console.log("You will need " + snacksNeeded + " " + snack + " to last you to the age of " + maxAge + ".");
}

howMuchSnacks("Cheetos", 1, 26, 27);
// => "You will need 365 Cheetos to last you to the age of 27."
