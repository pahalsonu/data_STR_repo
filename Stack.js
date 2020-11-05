class Stack {
    constructor(){
        // initialzing empty stack
        this.items = [];


    }
    //push method , mew element into stack
    push(value){
        this.items.push(value);
    }
    //pop method, pop from stack and return the popped value
    pop(){
        return (this.items.length===0 )? "stack underflow" :this.items.pop();
    };
    peek(){
        return this.items[this.items.length-1]
    }
    length(){
        return this.items.length;
    }
    // traverse the stack and print all the values
    traverse(){
        return this.items.forEach(element =>{
            console.log(element)
        })
    }

}
// Create a stack object (Instantiation)
const stack = new Stack()
console.log(stack)
stack.push(22)
console.log(stack)
stack.push(23)
console.log(stack)
stack.push(2)
console.log(stack)
stack.push(62)
console.log(stack);
stack.pop()
console.log(stack.peek());
console.log(stack.traverse());
