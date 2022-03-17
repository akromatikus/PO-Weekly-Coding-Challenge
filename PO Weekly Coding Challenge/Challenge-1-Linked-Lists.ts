// 1) Given two singly linked lists that intersect at some point, find the intersecting node. Assume the lists are non-cyclical.

// For example, given A = 3 ➔ 7 ➔ 8 ➔ 10 and B = 99 ➔ 1 ➔ 8 ➔ 10, return the node with value 8. In this example, assume nodes with the same value are the exact same node objects.

// Do this in 0( m + n) time (where m and n are the lengths of the lists) and constant space.


interface LLNode{
    value: any 
    next: LLNode | null
}

interface linkedList{
    NodeAdd(value: any): void
    NodesPrint(): void
    getLength(): number
    head: LLNode | null
}

class LLConstructor implements linkedList{ 
    head: LLNode | null
    private nodeCurrent: LLNode | null
    private length: number

    constructor(){
        this.head = this.nodeCurrent = null
        this.length = 0
    }

    NodeAdd(value: any){
        const node = {value:value, next:null}
        
        //if the head is empty (no LL yet). !Only applies to first insert iteration!
        if (!this.head){
            this.head = node 
            
            //console.log("head initialized to: ", this.head)
        }
        
        //else the head already has values so...
        else{ 

            //make the current node the head node. !Applies to all but first iteration!
            this.nodeCurrent = this.head

            //console.log("nodeCurrent assigned to head, head is: ", this.head)
            
            //while the current node has an object for its next property.
            // !Applies to all iterations except first!
            while (this.nodeCurrent.next){
                
                //console.log("while loop started")
                //assign it to that object
                this.nodeCurrent = this.nodeCurrent.next
            }

            //make next another node object with both the value and next property
            //console.log("The nodeCurrent is now:", this.nodeCurrent, "its next property will be changed to: ", node, '\n')
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

        console.log("")
    }

    getLength(): number {
        return this.length
    }
}

function LLfindIntersect(LLone: linkedList, LLtwo: linkedList){
    let LLOneCurrent = LLone.head
    let LLTwoCurrent = LLtwo.head
    
    for (let iter = 0; iter < Math.min(LLone.getLength(), LLtwo.getLength()); iter++){
        if (LLOneCurrent!.value === LLTwoCurrent!.value) {
            
            let result = `The first LL node is ${JSON.stringify(LLOneCurrent)}. The second LL node is ${JSON.stringify(LLTwoCurrent)}. The value they share is ${LLOneCurrent!.value}`
            return result
        }
        else {
            LLOneCurrent = LLOneCurrent!.next
            LLTwoCurrent = LLTwoCurrent!.next
        }
    }

    //only returns if no intersection was found
    return "No intersection found."
}



let LLone: linkedList = new LLConstructor
LLone.NodeAdd(1)
LLone.NodeAdd(2)
LLone.NodeAdd(3)
LLone.NodeAdd(4)

let LLtwo: linkedList = new LLConstructor
LLtwo.NodeAdd(28)
LLtwo.NodeAdd(13)
LLtwo.NodeAdd(3)
LLtwo.NodeAdd(8)
LLtwo.NodeAdd(6)
LLtwo.NodeAdd(15)

// LLone.NodesPrint()
// LLtwo.NodesPrint()

let intersectNodes = LLfindIntersect(LLone, LLtwo)
console.log(intersectNodes)
