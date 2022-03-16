interface Stacker{
    stackPop(): void
    stackPush(value: any): void
    getStack(): any[]
    getMaxValue(): number | void
}

class StackerConstruction implements Stacker{

    private stack: any[]

    constructor(){
        this.stack = []
    }
    
    stackPop(){        
        let newStack = this.stack.pop()
        if (newStack === undefined){
            console.log(Error("The stack is empty!"))
        }
    }

    stackPush(value: any){
        this.stack.push(value)
    }

    getStack(): any[] {
        return this.stack
    }

    getMaxValue(): number | void {
        if (this.stack.length === 0){
            console.log(Error("The stack is empty!"))
        }
        else{
            return Math.max(...this.stack)
        } 
    }

}

let stackTest: Stacker = new StackerConstruction

//view an empty stack
console.log("view an empty stack: ", stackTest.getStack())

//populate the stack
for (let iter = 0; iter < 100; iter++){
    stackTest.stackPush(Math.random() * 1000)
}
console.log("Stack populated, length is now: ", stackTest.getStack().length)

//view the max value
console.log("Max value is: ", stackTest.getMaxValue())

//depopulate the stack
for (let iter = 0; iter < 100; iter++){
    stackTest.stackPop()
}
console.log("Stack depopulated, length is now: ", stackTest.getStack().length)

//view the max value (should return error)
console.log("Max value is, should return error...")
stackTest.getMaxValue()

//pop the stack (should return error)
console.log("Popping stack, should return error...")
stackTest.stackPop()