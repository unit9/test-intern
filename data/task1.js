class LinkedList {
  constructor() {
    this.next = null;
    this.value = null;
  }
}

function createLinkedListOfLength(len) {
  let result = new LinkedList();
  let l = result;
  for (let i = 1; i < len; ++i) {
    l.next = new LinkedList();
    l = l.next;
  }
  return result;
}

const task1Results = [4, 20, 190, 3, 1];
const task1Inputs = task1Results.map(len => createLinkedListOfLength(len));

export default {
  inputs: task1Inputs,
  expectedResults: task1Results,
  defaultIterations: 10000,
};
