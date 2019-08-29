# Task 3

## Description

A colour in computer science is usually represented as a hexadecimal number.
Like 0xff0000 for red.
It actually logically consists of three components - the red, green and blue value which can be found in the number as follows: 0xRRGGBB.
So again, a number 0x00ff00 would be a green colour.

Your task is to implement a function that, when passed such hexadecimal number, will return an object containing the three RGB components separately, like:
> <tt>{ r: 255, g: 0, b: 0 }</tt>

when it's given a 0xff0000 number.

Naturally, your function should return correct r, g and b components for any hexadecimal number.
