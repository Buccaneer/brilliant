/*
* Find the least integer whose first digit is seven and which is reduced to 1/3th
* of its original value when its first digit is transferred to the end.
*/

(function(){
	'use strict';
	var number = BigInteger(7);
	
	for(var i = 0; i < 100; i++)
	{
		if (number.remainder(3).compare(0) === 0 && swapSeven(number).compare(number.divide(3)) === 0)
		{
			var answer = 'ANSWER:____________' + number.toString() +
			'<br/>DIVIDED_BY_THREE:___' + number.divide(3).toString();
			document.getElementById("text").innerHTML = answer;
			break;
		}
		number = addDigit(number, findDigit(number, i));
	}

	function swapSeven(number)
	{
		var str = number.toString();
		var substr = str.substr(1,str.length - 1);
		return BigInteger(substr + "7");
	}

	function addDigit(number, digit)
	{
		return BigInteger(number.toString() + digit.toString());
	}

	function findDigit(number, counter)
	{
		return BigInteger(number.divide(3).toString()[counter]);
	}
})();
