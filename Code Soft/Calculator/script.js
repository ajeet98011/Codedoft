function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num === "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if (num === "-") {
        return "";
    }
    let value;
    try {
        value = Number(num).toLocaleString("en");
    } catch (e) {
        value = "Error"; // Display "Error" if something goes wrong
    }
    return value;
}

function reversenumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

function handleKeyboardInput(event) {
    const key = event.key;

    // Number keys
    if (key >= '0' && key <= '9') {
        document.getElementById(key).click();
    }

    // Decimal point
    if (key === '.') {
        document.getElementById('.').click();
    }

    // Operators
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        document.getElementById(key === '*' ? '*' : key).click();
    }

    // Equals
    if (key === 'Enter') {
        document.getElementById('=').click();
    }

    // Clear
    if (key === 'Escape') {
        document.getElementById('clear').click();
    }

    // Backspace
    if (key === 'Backspace') {
        document.getElementById('backspace').click();
    }
}

window.addEventListener('keydown', handleKeyboardInput);

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.id === "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id === "backspace") {
            var output = reversenumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output === "" && history !== "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output !== "" || history !== "") {
                output = output === "" ? output : reversenumberFormat(output);
                history = history + output;
                if (this.id === "=") {
                    try {
                        var result = eval(history);
                        if (!isFinite(result)) {
                            throw new Error("Invalid operation");
                        }
                        printOutput(result);
                        printHistory("");
                    } catch (e) {
                        printOutput("Error");
                        printHistory("");
                    }
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        var output = reversenumberFormat(getOutput());
        if (!isNaN(output)) {
            output = output + this.id;
            printOutput(output);
        }
    });
}