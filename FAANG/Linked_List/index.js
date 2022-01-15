// A simple javascript program for traversal of a linked list
var head; // head of list

/* Linked list Node. This inner class is made so that
	main() can access it */
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

/* This function prints contents of linked list starting from head */
function printList() {
  var n = head;
  while (n != null) {
    document.write(n.data + " ");
    console.log(n.data + "");
    n = n.next;
  }
}

/* method to create a simple linked list with 3 nodes*/

/* Start with the empty list. */

var head = new Node(1);
var second = new Node(2);
var third = new Node(3);

head.next = second; // Link first node with the second node
second.next = third; // Link second node with the third node

printList();
