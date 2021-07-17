let stackArr = [];

function pushData(data) {
  stackArr.push(data);
}
function popData() {
  if (stackArr.length === 0) {
    return null
  } else {
    return stackArr.pop();
  }
}
function printStack() {
  console.log(stackArr);
}

// pushData(1)
// pushData(2)
// printStack();
// pushData(3)
// pushData(4)
// printStack();
// console.log(popData());
// printStack();
// console.log(popData());
// printStack();
// console.log(popData());
// printStack();
// console.log(popData());
// printStack();
// console.log(popData());


let queueArray = [];
function pushDataInQueue(data) {
  queueArray.push(data);
}

function popDataFromQueue() {
  return queueArray.splice(0, 1).join('')
}

function printQueue() {
  console.log(queueArray);
}

printQueue()
pushDataInQueue(1);
pushDataInQueue(2);
pushDataInQueue(3);
printQueue();
console.log(popDataFromQueue());
printQueue();
console.log(popDataFromQueue());