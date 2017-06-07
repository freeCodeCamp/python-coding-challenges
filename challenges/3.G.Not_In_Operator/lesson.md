## Python not in Operator  

Python's not in operator is a type of comparison operator that tests for membership, or, in this case, non-membership.  
The operator not in is defined to have the inverse true value of in.  
The not in operator evaluates to False if it finds a variable in the specified sequence and True otherwise.  
In other words, the statement 'x in y' is true if and only if the object x is NOT found in the object y.  
- https://docs.python.org/3/reference/expressions.html#not-in
- https://docs.python.org/3/reference/expressions.html#comparisons
- https://docs.python.org/3/reference/expressions.html#membership-test-operations
- https://docs.python.org/3/library/operator.html#mapping-operators-to-functions
```
>>> x = 3
>>> y = [0, 1, 2, 3, 4]
>>> z = [5, 6, 7, 8, 9]
>>> x not in y
False
>>> x not in z
True
```

**_Instructions:_**  
**In the console, there are two variables defined for you, as well as a function named non_membership_test().**  
**Change the variable named letter from the wrong answer to one of the correct answers that will make non_membership_test() return True.**  
