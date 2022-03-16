
interface LLNode{
    value: any
    next: LLNode | null
}

interface LLMethods{
    insert(value: LLNode): void
    traverse(): void
    getValue(): LLNode
}

class LLConstructor implements LLMethods{
    //private LL: LLNode[] 
    private head: LLNode
    private currentNode: LLNode 

    constructor(){
        //this.LL = []
        this.head = this.currentNode = null
    }

    insert(value){
        
        //if the head is empty (no LL yet)
        if (!this.head){
            this.head.value = value
            this.head.next = this.currentNode
        }
        //else the head already has values so...
        else{
            //this.currentNode.next = {value:value, next:null} 
            this.currentNode = {value:value, next:null}
        }

    }

    traverse(): void {
        
    }
}



let Node1: LLNode = {value:1, next: null}









//generate linked lists
// for (let iter = 0; iter < listSize; iter++ ){

// }