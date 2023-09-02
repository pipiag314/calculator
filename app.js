class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = String(this.currentOperand).slice(0, -1)
    }

    appendNumber(number) {
        if(number === "." && this.currentOperand.includes(".")) return
        this.currentOperand += number
    }

    chooseOperation(operation) {
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        switch(this.operation) {
            case "+":
                this.currentOperand = Number(this.previousOperand) + Number(this.currentOperand)
                this.previousOperand = ''
                break
            case "-":
                this.currentOperand = Number(this.previousOperand) - Number(this.currentOperand)
                this.previousOperand = ''
                break
            case "*":
                this.currentOperand = Number(this.previousOperand) * Number(this.currentOperand)
                this.previousOperand = ''
                break
            case "/":
                this.currentOperand = Number(this.previousOperand) / Number(this.currentOperand)
                this.previousOperand = ''
                break
            default:
                break
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if(this.operation !== undefined) {
            this.previousOperandTextElement.innerText = this.previousOperand + this.operation
        } else {
            this.previousOperandTextElement.innerText = this.previousOperand
        } 
    }
}


const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const allClearButton = document.querySelector("[data-all-clear]")
const deleteButton = document.querySelector("[data-delete]")
const equalsButton = document.querySelector("[data-equals]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)



numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay()
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.compute()
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.operation = undefined
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case "0":
            calculator.appendNumber(event.key)
            calculator.updateDisplay()
            break
        case "1":
            calculator.appendNumber(event.key)
            calculator.updateDisplay()
            break
        case "2":
            calculator.appendNumber(event.key)
            calculator.updateDisplay()
            break
        case "3":
            calculator.appendNumber(event.key)
            calculator.updateDisplay()
            break
        case "4":
            calculator.appendNumber(event.key)
            calculator.updateDisplay()
            break
        case "5":
            calculator.appendNumber(event.key)
            calculator.updateDisplay()
            break
        case "6":
            calculator.appendNumber(event.key)
            calculator.updateDisplay()
            break
        case "7":
            calculator.appendNumber(event.key)
            calculator.updateDisplay()
            break
        case "8":
            calculator.appendNumber(event.key)
            calculator.updateDisplay()
            break
        case "9":
            calculator.appendNumber(event.key)
            calculator.updateDisplay()
            break
        case ".":
            calculator.appendNumber(event.key)
            calculator.updateDisplay()
            break
        case "+":
            calculator.compute()
            calculator.chooseOperation(event.key)
            calculator.updateDisplay()
            break
        case "-":
            calculator.compute()
            calculator.chooseOperation(event.key)
            calculator.updateDisplay()
            break
        case "*":
            calculator.compute()
            calculator.chooseOperation(event.key)
            calculator.updateDisplay()
            break
        case "/":
            calculator.compute()
            calculator.chooseOperation(event.key)
            calculator.updateDisplay()
            break
        case "Enter":
            calculator.compute()
            calculator.operation = undefined
            calculator.updateDisplay()
            break
        case "Backspace":
            calculator.delete()
            calculator.updateDisplay()
            break
        case " ":
            calculator.clear()
            calculator.updateDisplay()
        default:
            break
    }
})
