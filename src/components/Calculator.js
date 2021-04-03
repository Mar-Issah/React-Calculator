import Buttons from "./Buttons";
import React, { useState } from "react";

//we are going to use hooks to solve this, for the equation you write it in an onClick method which returns the numbers clicked  adding it to the prev numbers to make a string. pass the method to the numbers and operation sign and the fxn to the <small> element to show the equation

//all clear btn set both the result and equation to nothing
//clear remove the last digits. slice is an array/string fxn do convert to string to aply the method

//pass the evaluate method to the equals sign

//nowwe want to be able to add the equal sign to the small display equation and in the equation fxn check if the last value is = if so calculate and show the result. when yo press the equal sign to calculate it also adds the - to the equation in the small element and appends the result

//more logic to the display number fxn to add = and also show result: lets check to see if the last enter is = if true lets see if the value entered is b/n 1-9 and also contains . if true then set the equation to the value ie since it only 1-9 and . you can add more value but if any othe value (ie not 1-9/.) is added then show the results plus the new value you might want to add

//more insteresting stuff, use the replace to replace the "*" to "x" to multiply.. use regex to prevent the expression from starting with 0

function Calculator() {
	let [expression, setExpression] = useState(" ");
	const [result, setResult] = useState(0);

	const displayNumber = (value) => {
		if (expression.length < 23) {
			setExpression((prev) => prev + value);
		} else {
			alert("limit reached");
		}

		if (expression.endsWith("=")) {
			if (/[1-9.]/.test(value)) {
				setExpression(value);
			} else {
				setExpression(result + value);
			}
		}
	};

	const evaluate = () => {
		expression = expression.replace(/x/g, "*");
		setResult(eval(expression).toFixed(2));
		setExpression((prev) => prev + "=");
	};

	const allClear = () => {
		setResult(0);
		setExpression("");
	};
	const clear = () => {
		setExpression((prev) => prev.slice(0, -1));
		setResult(0);
	};
	return (
		<div className="calculator">
			<small id="display">{expression}</small>
			<input
				value={result}
				className="display"
				type="text"
				placeholder="0"
				disabled
			/>

			<Buttons
				click={displayNumber}
				allClear={allClear}
				clear={clear}
				evaluate={evaluate}
			/>

			<footer className="footer">
				<p className="text-center">
					~~ made by
					<a className="text-dark" href="https://codepen.io/marsiya-issah">
						<strong> Marsiya Issah</strong>
					</a>
				</p>
			</footer>
		</div>
	);
}

export default Calculator;
