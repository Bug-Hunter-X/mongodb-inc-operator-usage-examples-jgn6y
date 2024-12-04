# MongoDB $inc Operator Bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB to increment or decrement counter values. The primary issue is the potential for the counter to become negative, which can disrupt the application's logic. This example illustrates the problem and shows how to fix it to ensure non-negative counter values.

## Bug Description
The original code uses `$inc` to decrement a counter. If the counter starts at zero or a small positive number, it is decremented below zero which is generally undesirable.

## Solution
The solution includes a check to prevent decrementing the counter if it is already zero or negative. Alternatively, using another approach, like atomic operations or a separate mechanism, may avoid this issue altogether. 
