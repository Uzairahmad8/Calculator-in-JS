(function () {
	const outputDisplay = document.getElementById("calc-display__output");
	const calculatorButtons = document.querySelectorAll(".btn");

	let currentExpression = "0";
	outputDisplay.innerText = currentExpression;

	calculatorButtons.forEach(button => {
		button.addEventListener("click", function(e) {
				displayNumber(e.target.innerText);
		});
	});	

	function displayNumber(buttonValue) {
		if (buttonValue === "RESET") {
			currentExpression = "0";
		} else if (buttonValue === "DEL") {
			if (currentExpression.length > 1) {
				currentExpression = currentExpression.slice(0, -1);
			} else {
				currentExpression = "0";
			}
		} else if (buttonValue === "=") {
			try {
				currentExpression = eval(currentExpression.replace(/x/g, '*').replace(/÷/g, '/')).toString();
			} catch {
				currentExpression = "Error";
			}
		} else {
			// if last input is operator and user again enters any operator then do nothing
			const buttonIsOperator = buttonValue === "+" || buttonValue === "*" || buttonValue === "/" || buttonValue === "-";
			const previousButtonIsOperator = currentExpression[currentExpression.length - 1] === "+" || currentExpression[currentExpression.length - 1] === "*" || currentExpression[currentExpression.length - 1] === "/" || currentExpression[currentExpression.length - 1] === "-";

			if (buttonIsOperator && previousButtonIsOperator) {
				// do nothing
			} else {
				if (outputDisplay.innerText === "0") {
					outputDisplay.innerText = buttonValue;
					currentExpression = buttonValue;
				} else {
					outputDisplay.innerText += buttonValue;
					currentExpression += buttonValue;
				}
			}
		}
		
		outputDisplay.innerText = currentExpression; 
	}
})();