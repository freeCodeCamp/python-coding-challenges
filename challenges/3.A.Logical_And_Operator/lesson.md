## Python Logical `and` Operator

The `and` operator is used in the context of boolean operations to determine whether a statement is true or false.  
If both arguments (or all if there are more than two) in a statement are true, then the entire statement is true.  
If any of the arguments in the statement are false, the operation short-circuits (stops) at the first false argument and returns that value.  
For example, the expression `x and y` first evaluates x and proceeds from left to right.  
If x is false, the operation stops (short-circuits), and its value (False) is returned.  
Otherwise, y is evaluated and the resulting value (True or False) is returned.  
Either way, the `and` operator returns the boolean value of the last evaluated argument.  
- https://docs.python.org/3/reference/expressions.html#boolean-operations
- https://docs.python.org/3.6/library/stdtypes.html#boolean-operations-and-or-not
- https://docs.python.org/3/library/stdtypes.html#boolean-values
- https://docs.python.org/3/library/functions.html#bool  
```
>>> False and True
False
>>> True and True
True
>>> True and True and False
False
```

**_Instructions:_**  
**In the console there is a function named boolean_and() which has a single parameter named value.**  
**Inside of boolean_and() there is an if-else statement with an incomplete if clause.**
**Fill in the if clause so that if value is greater than or equal to 25 AND less than or equal to 50, then the function will return "Pass".**
