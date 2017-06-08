## Python is not Operator

Python's is not operator tests for _negative_ object identity, or whether two different variables are pointing to different objects.  
In other words, the statement 'x is not y' is true if and only if x and y are _not_ the same object.
Object identity is determined using the id() function.  
This is different from the inequality operator (!=), which compares two values and returns False if they're equivalent or True if they are not.
- https://docs.python.org/3.6/reference/expressions.html#is-not
- https://docs.python.org/3.6/library/functions.html#id
- https://docs.python.org/3.6/library/stdtypes.html#comparisons
- https://docs.python.org/3/reference/expressions.html#operator-precedence  
```
>>> a = 1
>>> b = 1
>>> c = 1.0
>>> id(a)
4363379264
>>> id(b)
4363379264
>>> id(c)
4364861632
>>> a is not b
False
>>> a is not c
True
>>> b is not c
True
```

**_Instructions:_**  
**In the console, there is a function named negative_identity_test that contains an if-else statement.**  
**Fill in the missing code in the 'if' clause that will make the function run properly.**    
