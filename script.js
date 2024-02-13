const para = document.querySelector('.para');
const buttonOne = document.getElementById('button-1');
const buttonTwo = document.getElementById('button-2');
const buttonThree = document.getElementById('button-3');
const buttonFour = document.getElementById('button-4');
const buttonFive = document.getElementById('button-5');
const buttonSix = document.getElementById('button-6');
const buttonSeven = document.getElementById('button-7');
const buttonEigth = document.getElementById('button-8');
const buttonNine = document.getElementById('button-9');
const buttonZero = document.getElementById('button-0');
const buttonPoint = document.getElementById('button-point');
const buttonEqual = document.getElementById('button-equal');
const buttonAdd = document.getElementById('button-add');
const buttonSubtract = document.getElementById('button-subtract');
const buttonMultiply = document.getElementById('button-multiply');
const buttonDivide = document.getElementById('button-divide');
const buttonPower = document.getElementById('button-power');
const buttonSquareRoot = document.getElementById('button-square-root');
const buttonFactorial = document.getElementById('button-factorial');
const buttonErase = document.getElementById('button-erase');
const buttonClear = document.getElementById('button-clear');

let result = '';
let stack = '';
let myArray = [];

let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
let six = 6;
let seven = 7;
let eigth = 8;
let nine = 9;
let zero = 0;
let point = '.';
let add = '+';
let subtract = '-';
let multiply = 'x';
let divide = '÷';
let power = '^';
let squareRoot = '√';
let factorial = '!';

/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// numbers //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

buttonOne.addEventListener('click', () => {
	result += one;
	para.innerHTML = result;
	stack += one
});


buttonTwo.addEventListener('click', () => {
	result += two;
	para.innerHTML = result;
	stack += two;
});

buttonThree.addEventListener('click', () => {
	result += three;
	para.innerHTML = result;
	stack += three;
});

buttonFour.addEventListener('click', () => {
	result += four;
	para.innerHTML = result;
	stack += four;
});

buttonFive.addEventListener('click', () => {
	result += five;
	para.innerHTML = result;
	stack += five;
});

buttonSix.addEventListener('click', () => {
	result += six;
	para.innerHTML = result;
	stack += six;
});

buttonSeven.addEventListener('click', () => {
	result += seven;
	para.innerHTML = result;
	stack += seven;
});

buttonEigth.addEventListener('click', () => {
	result += eigth;
	para.innerHTML = result;
	stack += eigth;
});

buttonNine.addEventListener('click', () => {
	result += nine;
	para.innerHTML = result;
	stack += nine;
});

buttonZero.addEventListener('click', () => {
	result += zero;
	para.innerHTML = result;
	stack += zero;
});

buttonPoint.addEventListener('click', () => {
	if (result.includes(point) || stack.includes(point)) {
		false;
	} else {
		result += point;
		para.innerHTML = result;
		stack += point;
	}
});

/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// operators ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

buttonAdd.addEventListener('click', () => {
	if (result === '' || result.slice(-1) === add || result.slice(-1) == subtract ||
	    result.slice(-1) === multiply || result.slice(-1) === divide || 
	    result.slice(-1) === power || result.slice(-1) === squareRoot || 
	    result.slice(-1) === factorial){
		false;
	} else {
		result += add;
		para.innerHTML = result;
		stack += add;
	}
});

buttonSubtract.addEventListener('click', () => {
	if (result === '' || result.slice(-1) === add || result.slice(-1) == subtract ||
	    result.slice(-1) === multiply || result.slice(-1) === divide || 
	    result.slice(-1) === power || result.slice(-1) === squareRoot || 
	    result.slice(-1) === factorial){
		false;
	} else {
		result += subtract;
		para.innerHTML = result;
		stack += subtract;
	}
});

buttonMultiply.addEventListener('click', () => {
	if (result === '' || result.slice(-1) === add || result.slice(-1) == subtract ||
	    result.slice(-1) === multiply || result.slice(-1) === divide || 
	    result.slice(-1) === power || result.slice(-1) === squareRoot || 
	    result.slice(-1) === factorial){
		false;
	} else {
		result += multiply;
		para.innerHTML = result;
		stack += multiply;
	}
});

buttonDivide.addEventListener('click', () => {
	if (result === '' || result.slice(-1) === add || result.slice(-1) == subtract ||
	    result.slice(-1) === multiply || result.slice(-1) === divide || 
	    result.slice(-1) === power || result.slice(-1) === squareRoot || 
	    result.slice(-1) === factorial){
		false;
	} else {
		result += divide;
		para.innerHTML = result;
		stack += divide;
	}
});

buttonPower.addEventListener('click', () => {
	if (result === '' || result.slice(-1) === add || result.slice(-1) == subtract ||
	    result.slice(-1) === multiply || result.slice(-1) === divide || 
	    result.slice(-1) === power || result.slice(-1) === squareRoot || 
	    result.slice(-1) === factorial){
		false;
	} else {
		result += power;
		para.innerHTML = result;
		stack += power;
	}
});

buttonSquareRoot.addEventListener('click', () => {
	if (result.slice(-1) === add || result.slice(-1) == subtract ||
	    result.slice(-1) === multiply || result.slice(-1) === divide || 
	    result.slice(-1) === power || result.slice(-1) === squareRoot || 
	    result.slice(-1) === factorial){
		false;
	} else {
		result += squareRoot;
		para.innerHTML = result;
		stack += squareRoot;
	}
});

buttonFactorial.addEventListener('click', () => {
	if (result === '' || result.slice(-1) === add || result.slice(-1) == subtract ||
	    result.slice(-1) === multiply || result.slice(-1) === divide || 
	    result.slice(-1) === power || result.slice(-1) === squareRoot || 
	    result.slice(-1) === factorial){
		false;
	} else {
		result += factorial;
		para.innerHTML = result;
		stack += factorial;
	}
});

buttonErase.addEventListener('click', () => {
	result = result.substring(0, result.length - 1);
	para.innerHTML = result;
	stack = stack.substring(0, stack.length - 1);

});

buttonClear.addEventListener('click', () => {
	result = '';
	para.innerHTML = result;
	stack = '';
	myArray = [];
	myResult = [];
});

/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// functiones ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

function getFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * getFactorial(n - 1);
  }
}

buttonEqual.addEventListener('click', () => {
	console.log(stack);

	myResult = [0, 0, 0, 0, 0, 0, 0];
	console.log(myResult);
	console.log(myResult[0]);

	myArray.push(stack);
	let myString = myArray.map(String);
	let newString = myString[0].split(/\+|\-|\x|\÷|\^|\√|\!/); 
	console.log(newString);

	if (newString[0] === '' || newString[0] === NaN || newString[0] === undefined) {
		myResult[0] = 0;
		console.log(myResult[0]);
	} else if (stack.includes(multiply) || stack.includes(divide)) {
		myResult[0] = 1;
	} else {
		myResult.splice(0, 1, parseFloat(newString[0]));
		console.log(myResult[0]);
	}

	if (newString[1] === '' || newString[1] === NaN || newString[1] === undefined) {
		myResult[1] = 0;
		console.log(myResult[1]);
	} else {
		myResult.splice(1, 1, parseFloat(newString[1]));
		console.log(myResult[1]);
	}

	if (newString[2] === '' || newString[2] === NaN || newString[2] === undefined) {
		myResult[2] = 0;
		console.log(myResult[1]);
	} else {
		myResult.splice(2, 1, parseFloat(newString[2]));
		console.log(myResult[2]);
	}

	if (newString[3] === '' || newString[3] === NaN || newString[3] === undefined) {
		myResult[3] = 0;
		console.log(myResult[3]);
	} else {
		myResult.splice(3, 1, parseFloat(newString[3]));
		console.log(myResult[3]);
	}

	if (newString[4] === '' || newString[4] === NaN || newString[4] === undefined) {
		myResult[4] = 0;
		console.log(myResult[4]);
	} else {
		myResult.splice(4, 1, parseFloat(newString[4]));
		console.log(myResult[4]);
	}

	if (newString[5] === '' || newString[5] === NaN || newString[5] === undefined) {
		myResult[5] = 0;
		console.log(myResult[5]);
	} else {
		myResult.splice(5, 1, parseFloat(newString[5]));
		console.log(myResult[5]);
	}

	if (newString[6] === '' || newString[6] === NaN || newString[6] === undefined) {
		myResult[6] = 0;
		console.log(myResult[6]);
	} else {
		myResult.splice(6, 1, parseFloat(newString[6]));
		console.log(myResult[6]);
	}
    

	let finish = [];


	if (stack.includes(add)) {
		finish.push(parseInt(myResult[0]) + parseInt(myResult[1]) + 
					parseInt(myResult[2]) + parseInt(myResult[3]) + 
					parseInt(myResult[4]) + parseInt(myResult[5]) +
					parseInt(myResult[6]));
		result = finish;
		console.log(finish);
	}

	if (stack.includes(subtract)) {
		finish.push(parseInt(myResult[0]) - parseInt(myResult[1]) - 
					parseInt(myResult[2]) - parseInt(myResult[3]) - 
					parseInt(myResult[4]) - parseInt(myResult[5]) - 
					parseInt(myResult[6]));
		result = finish;
		console.log(finish);
	}

	if (stack.includes(multiply)) {

		if (newString[0] === '' || newString[0] === NaN || newString[0] === undefined) {
			myResult[0] = 1;
			console.log(myResult[0]);
		} else {
			myResult.splice(0, 1, parseFloat(newString[0]));
			console.log(myResult[0]);
		}

		if (newString[1] === '' || newString[1] === NaN || newString[1] === undefined) {
			myResult[1] = 1;
			console.log(myResult[1]);
		} else {
			myResult.splice(1, 1, parseFloat(newString[1]));
			console.log(myResult[1]);
		}

		if (newString[2] === '' || newString[2] === NaN || newString[2] === undefined) {
			myResult[2] = 1;
			console.log(myResult[1]);
		} else {
			myResult.splice(2, 1, parseFloat(newString[2]));
			console.log(myResult[2]);
		}

		if (newString[3] === '' || newString[3] === NaN || newString[3] === undefined) {
			myResult[3] = 1;
			console.log(myResult[3]);
		} else {
			myResult.splice(3, 1, parseFloat(newString[3]));
			console.log(myResult[3]);
		}

		if (newString[4] === '' || newString[4] === NaN || newString[4] === undefined) {
			myResult[4] = 1;
			console.log(myResult[4]);
		} else {
			myResult.splice(4, 1, parseFloat(newString[4]));
			console.log(myResult[4]);
		}

		if (newString[5] === '' || newString[5] === NaN || newString[5] === undefined) {
			myResult[5] = 1;
			console.log(myResult[5]);
		} else {
			myResult.splice(5, 1, parseFloat(newString[5]));
			console.log(myResult[5]);
		}

		if (newString[6] === '' || newString[6] === NaN || newString[6] === undefined) {
			myResult[6] = 1;
			console.log(myResult[6]);
		} else {
			myResult.splice(6, 1, parseFloat(newString[6]));
			console.log(myResult[6]);
		}

		finish.push(parseInt(myResult[0]) * parseInt(myResult[1]) *
					parseInt(myResult[2]) * parseInt(myResult[3]) *
					parseInt(myResult[4]) * parseInt(myResult[5]) *
					parseInt(myResult[6]));
		result = finish;
		console.log(finish);
	}

	if (stack.includes(divide)) {

		if (newString[0] === '' || newString[0] === NaN || newString[0] === undefined) {
			myResult[0] = 1;
			console.log(myResult[0]);
		} else {
			myResult.splice(0, 1, parseFloat(newString[0]));
			console.log(myResult[0]);
		}

		if (newString[1] === '' || newString[1] === NaN || newString[1] === undefined) {
			myResult[1] = 1;
			console.log(myResult[1]);
		} else {
			myResult.splice(1, 1, parseFloat(newString[1]));
			console.log(myResult[1]);
		}

		if (newString[2] === '' || newString[2] === NaN || newString[2] === undefined) {
			myResult[2] = 1;
			console.log(myResult[1]);
		} else {
			myResult.splice(2, 1, parseFloat(newString[2]));
			console.log(myResult[2]);
		}

		if (newString[3] === '' || newString[3] === NaN || newString[3] === undefined) {
			myResult[3] = 1;
			console.log(myResult[3]);
		} else {
			myResult.splice(3, 1, parseFloat(newString[3]));
			console.log(myResult[3]);
		}

		if (newString[4] === '' || newString[4] === NaN || newString[4] === undefined) {
			myResult[4] = 1;
			console.log(myResult[4]);
		} else {
			myResult.splice(4, 1, parseFloat(newString[4]));
			console.log(myResult[4]);
		}

		if (newString[5] === '' || newString[5] === NaN || newString[5] === undefined) {
			myResult[5] = 1;
			console.log(myResult[5]);
		} else {
			myResult.splice(5, 1, parseFloat(newString[5]));
			console.log(myResult[5]);
		}

		if (newString[6] === '' || newString[6] === NaN || newString[6] === undefined) {
			myResult[6] = 1;
			console.log(myResult[6]);
		} else {
			myResult.splice(6, 1, parseFloat(newString[6]));
			console.log(myResult[6]);
		}

		finish.push(parseInt(myResult[0]) / parseInt(myResult[1]) /
					parseInt(myResult[2]) / parseInt(myResult[3]) /
					parseInt(myResult[4]) / parseInt(myResult[5]) /
					parseInt(myResult[6]));
		result = finish;
		console.log(finish);
	}

	if (stack.includes(power)) {
		finish.push(Math.pow(myResult[0], myResult[1]));
		result = finish;
		console.log(finish);
	}

	if (stack.includes(squareRoot)) {
		finish.push(Math.sqrt(myResult[1]));
		result = finish;
		console.log(finish);
	}

	if (stack.includes(factorial)) {
		finish.push(getFactorial(myResult[0]));
		result = finish;
		console.log(finish);
	}


	result = finish;
	para.innerHTML = result;

});