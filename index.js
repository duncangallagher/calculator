addInput = (num1, num2) => {
    return Number(num1) + Number(num2);
}

subtractInput = (num1, num2) => {
    return Number(num1) - Number(num2);
}

multiplyInput = (num1, num2) => {
    return Number(num1) * Number(num2);
}

divideInput = (num1, num2) => {
    if (num2 !== 0) {
        return Number(num1) / Number(num2);
    }
    // if user tries to divide by 0, show a snarky message
    else {
        console.log('nice try buddy');
    }
}

operate = (input1, operator, input2) => {
    let result;
    if (operator == '+') {
        result = addInput(input1, input2);
    } else if (operator == '-') {
        result = subtractInput(input1, input2);
    } else if (operator == '*') {
        result = multiplyInput(input1, input2);
    } else if (operator == '/') {
        result = divideInput(input1, input2);
    } else {
        console.log('invalid operator');
    }
    return result;
}

firstNumHandler = (e) => {
    document.getElementById('firstNum').innerHTML = e.currentTarget.value;
    setTimeout(() => {
        getOperator();
    }, 300);
}
getFirstNum = () => {
    const buttons = document.querySelectorAll('#calcContainer button.num');
    buttons.forEach(function (button) {
        button.addEventListener("click", firstNumHandler);
    });
}

operatorHandler = (e) => {
    document.getElementById('op').innerHTML = e.currentTarget.value;
    setTimeout(() => {
        getSecondNum();
    }, 300);
}
getOperator = () => {
    const num_buttons = document.querySelectorAll('#calcContainer button.num');
    num_buttons.forEach(function (num_button) {
        num_button.removeEventListener("click", firstNumHandler);
    });
    const buttons = document.querySelectorAll('#calcContainer button.operator');
    buttons.forEach(function (button) {
        button.addEventListener("click", operatorHandler);
    });
}

secondNumHandler = (e) => {
    document.getElementById('secondNum').innerHTML = e.currentTarget.value;
    setTimeout(() => {
        getOperator();
    }, 300);

    const num_buttons = document.querySelectorAll('#calcContainer button.num');
    num_buttons.forEach(function (num_button) {
        num_button.removeEventListener("click", secondNumHandler);
    });
}
getSecondNum = () => {
    const buttons = document.querySelectorAll('#calcContainer button.num');
    buttons.forEach(function (button) {
        button.addEventListener("click", secondNumHandler);
    });
}


clearCalc = () => {
    const spans = document.querySelectorAll('#displayContainer p span');
    spans.forEach(function (span) {
        span.innerHTML = '';
    });

    getFirstNum();
}

sendForCalc = () => {
    let result = '';
    let firstNum = document.getElementById('firstNum').innerHTML;
    let op = document.getElementById('op').innerHTML;
    let secondNum = document.getElementById('secondNum').innerHTML;
    if (firstNum != '' && op != '' && secondNum != '') {
        result = operate(firstNum, op, secondNum);
        document.getElementById('result').innerHTML = '= ' + result;
    }
}

window.addEventListener('load', function () {
    getFirstNum();
})