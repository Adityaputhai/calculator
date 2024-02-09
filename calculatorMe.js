let runningTotal = 0
let buffer = 0
let previousOperator
const screen = document.querySelector(".screen")

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
    rerender()
}

function handleSymbol(value) {
    switch (value) {
        case "C":
            buffer = 0
            previousOperator = ""
            break
        case "←":
            if (buffer.length == 1) {
                buffer = 0
            } else {
                buffer = buffer.substring(0, buffer.length - 1)
            }
            break
        case "=":
            if (buffer == 0) {
                
            } else {
                handleSubmit()
                buffer = +runningTotal
            }
            break
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(value)
            break
        
    }
}

function handleMath(value) {
    if (buffer == 0) {
        return
    } else {
        previousOperator = value
        handleBuffer()
    }
}

function handleSubmit() {
    const intBuffer = parseInt(buffer)
    if (previousOperator == "+") {
        runningTotal = parseInt(runningTotal) + parseInt(buffer)
    } else if (previousOperator == "-") {
        runningTotal = parseInt(runningTotal) - parseInt(buffer)
    } else if (previousOperator == "×") {
        runningTotal = parseInt(runningTotal) * parseInt(buffer)
    } else if (previousOperator == "÷") {
        runningTotal = parseInt(runningTotal) / parseInt(buffer)
    }
    previousOperator = "="
}

function handleNumber(value) {
    if (buffer == 0) {
        buffer = value
    } else {
        buffer = buffer + value
    }
}

function handleBuffer() {
    runningTotal = parseInt(buffer)
    buffer = 0
}

function handleOperation(value) {
    if (value != "=") {
        previousOperator = value
    } else {
        handleBuffer()
    }
}

function rerender() {
    screen.innerText = buffer;
}

function init() {
    document
        .querySelector(".calc-buttons")
        .addEventListener("click", function (event) {
            buttonClick(event.target.innerText)
        })
}



init()