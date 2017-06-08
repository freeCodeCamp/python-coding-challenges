## Python Logical `or` Operator  

The `or` operator is used in the context of boolean operations to determine whether a statement is true or false.  
The `or` operator is [inclusive](https://en.wiktionary.org/wiki/inclusive_or), meaning that the statement is true if any or all of the arguments are true, and the statement is false if and only if all of the arguments are false.  
For example, the expression `x or y` first evaluates x and proceeds from left to right.  
If x is true, the operation stops (short-circuits), and its value (True) is returned.  
If x is false, then y is evaluated and the resulting value (True or False) is returned.    
- https://docs.python.org/3/reference/expressions.html#boolean-operations  
- https://docs.python.org/3.6/library/stdtypes.html#boolean-operations-and-or-not
- https://docs.python.org/3/library/stdtypes.html#boolean-values
- https://docs.python.org/3/library/functions.html#bool
```
>>> True or True
True
>>> True or False
True
>>> True or True or False
True
>>> True or False or False
True
>>> False or False or False
False
```

**_Instructions:_**  
**In the console there is a function named boolean_or() which has a single parameter named value.**  
**Inside of boolean_or() there is an if-else statement with an incomplete if clause.**  
**Fill in the if clause so that if value is between 50 and 100 (inclusive, meaning both 50 and 100 are valid answers), then the function will return "Pass".**  
