# Task 1

## Description

A pointer is called a _linked list_ if:

> * it is an empty pointer (it is then called a _terminator_ or an _empty list_); or
> * it points to a structure (called a _node_ or the _head_) that contains a value and a linked list (called the _tail_).

The _length_ of a list is defined as the total number of nodes it contains. In particular, an empty list has length 0.

For example, consider the following linked list:

A -> B -> C -> D ->

This list contains four nodes: A, B, C and D. Node D is the last node and its tail is the terminator. The length of this list is 4.

Assume that the following declarations are given:

> <tt>// IntList obj is an Object with attributes // obj.value - type: int // obj.next - type: IntList</tt>

Write a function:

> <tt>function task1(L);</tt>

that, given a non-empty linked list L consisting of N nodes, returns its length.

For example, given list L shown in the example above, the function should return 4.

Assume that:

> * N is an integer within the range [1..5,000];
> * list L does not have a cycle (each non-empty pointer points to a different structure).

</div>
