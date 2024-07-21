(function () {
	const displayExpression = document.getElementById("calc-display__output");
	const calculatorButtons = document.querySelectorAll(".calc-buttons__button");

	let currentExpression = "0";
	updateDisplay(currentExpression);

	calculatorButtons.forEach(button => {
		button.addEventListener("click", function(e) {
			validateInput(e.target.innerText);
		});
	});	

	function validateInput(buttonText) {
		if (buttonText === "RESET") {
			currentExpression = "0";
		} else if (buttonText === "DEL") {
			if (currentExpression.length > 1) {
				currentExpression = currentExpression.slice(0, -1);
			} else {
				currentExpression = "0";
			}
		} else if (buttonText === "=") {
			try {
				currentExpression = evaluateResult(currentExpression);
			} catch {
				currentExpression = "Error";
				setTimeout(() => {
					updateDisplay("0");
				}, 500);
			}
		} else {
			const buttonIsOperator = buttonText === "+" || buttonText === "*" || buttonText === "/" || buttonText === "-";
			const previousButtonIsOperator = currentExpression[currentExpression.length - 1] === "+" || currentExpression[currentExpression.length - 1] === "*" || currentExpression[currentExpression.length - 1] === "/" || currentExpression[currentExpression.length - 1] === "-";
			const buttonIsDot = buttonText == ".";
			const previousButtonIsDot = currentExpression[currentExpression.length - 1] === ".";

			if ((buttonIsOperator && previousButtonIsOperator) || (buttonIsDot && previousButtonIsDot)) {
				// do nothing
			} else {
				if (displayExpression.innerText === "0") {
					currentExpression = buttonText;
					updateDisplay(buttonText)
				} else {
					displayExpression.innerText += buttonText;
					currentExpression += buttonText;
				}
			}
		}
		
		updateDisplay(currentExpression);
	}
	
	function updateDisplay(value) {
		displayExpression.innerText = value; 
	}

	function evaluateResult(input) {
		return eval(input.replace(/x/g, '*').replace(/÷/g, '/')).toString()
	}
})();
