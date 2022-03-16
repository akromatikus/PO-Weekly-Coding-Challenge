
interface LLNode{
    value: any
    next: LLNode | null
}

interface LLMethods{
    NodeAdd(value: any): void
    NodesPrint(): void
}

class LLConstructor implements LLMethods{ 
    private head: LLNode | null
    private nodeCurrent: LLNode | null
    private length: number

    constructor(){
        this.head = this.nodeCurrent = null
        this.length = 0
    }

    NodeAdd(value: any){
        const node = {value:value,next:null}
        
        //if the head is empty (no LL yet). !Only applies to first insert iteration!
        if (!this.head){
            this.head = node 
            console.log("head initialized to: ", this.head)
        }
        
        //else the head already has values so...
        else{ 

            //make the current node the head node. !Applies to all but first iteration!
            this.nodeCurrent = this.head
            console.log("nodeCurrent assigned to head, head is: ", this.head)
            
            //while the current node has an object for its next property.
            // !Applies to all iterations except first and second!
            while (this.nodeCurrent.next){
                console.log("while loop started")
                //assign it to that object
                this.nodeCurrent = this.nodeCurrent.next
            }

            //make next another node object with both the value and next property
            console.log("The nodeCurrent is now:", this.nodeCurrent, "its next property will be changed to: ", node, '\n')
            this.nodeCurrent.next = node
        }

        this.length++

    }

    NodesPrint(): void {
        let nodeCurrent = this.head
        while (nodeCurrent){
            console.log(nodeCurrent.value)
            nodeCurrent = nodeCurrent.next
        }
    }
}



let LLone: LLMethods = new LLConstructor
LLone.NodeAdd(1)
LLone.NodeAdd(2)
LLone.NodeAdd(3)
LLone.NodeAdd(4)
LLone.NodesPrint()









//generate linked lists
// for (let iter = 0; iter < listSize; iter++ ){

// }