## Python is Operator

Python's is operator tests for object identity, or whether two different variables are pointing to the same object.  
In other words, the statement 'x is y' is true if and only if x and y are the same object.
Object identity is determined using the id() function.  
This is different from the equality operator (==), which tests only if two objects are equivalent.  
- https://docs.python.org/3.6/reference/expressions.html#is-not
- https://docs.python.org/3.6/library/functions.html#id
- https://docs.python.org/3.6/library/stdtypes.html#comparisons
- https://docs.python.org/3/reference/expressions.html#operator-precedence
```
>>> a = 1
>>> b = 1
>>> c = 1.0
>>> id(a)
4472656448
>>> id(b)
4472656448
>>> id(c)
4474138816
>>> a is b
True
>>> a is c
False
>>> a == c
True
```

**_Instructions:_**  
**In the console, there is a function named identity_test that contains an if-else statement.**  
**Fill in the missing code in the 'if' clause that will make the function run properly.**
