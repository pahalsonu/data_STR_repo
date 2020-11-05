var array = [];
//creating enqueue 
function enqueue(value) {
    array.push(value);
    return array
};
enqueue(12);
enqueue(15);
enqueue(17);
enqueue(19);
enqueue(21);

console.log(array);
// function to reverse all values of array and creating new array for queue
var array_for_queue = []
function creatQueueStack() {
    const arrayLength = array.length
    if (array.length === 0) {
        return array_for_queue
    }
    for (i = 0; i < arrayLength; i++) {
        let element_for_queue = array.pop();
        array_for_queue.push(element_for_queue)
    }
};

//crating final fifo as per queue rule
function dequeue() {
    creatQueueStack();
    const array_for_queueLength = array_for_queue.length - 1

    array_for_queue.pop();

    if (array_for_queue.length === 0) {
        return array
    };
    for (i = 0; i < array_for_queueLength; i++) {
        let element_for_original_stack = array_for_queue.pop();
        array.push(element_for_original_stack);
    }

}
dequeue();


console.log(array)