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

    udateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand
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
        calculator.udateDisplay()
    })
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.udateDisplay()
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.compute()
        calculator.chooseOperation(button.innerText)
        calculator.udateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.udateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.udateDisplay()
})