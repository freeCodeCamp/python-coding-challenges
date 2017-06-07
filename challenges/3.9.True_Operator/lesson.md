## Python `True` Operator  

In Python, the `True` keyword is the true value of type `bool` and can be used to directly assign boolean values.  
Assignments to `True` are illegal and raise a `SyntaxError`.  
Any Python object can be tested for truth value, so objects of many types can have a boolean context of true, including any nonzero number, nonempty strings and lists, and so on.  
- https://docs.python.org/3/library/constants.html
- https://docs.python.org/3/library/stdtypes.html#truth
- https://docs.python.org/3/library/operator.html?highlight=true#operator.truth  
- https://docs.python.org/3/library/functions.html#bool  
- https://docs.python.org/3/library/stdtypes.html#boolean-values
- https://docs.python.org/3/reference/expressions.html#boolean-operations
```
>>> True
True
>>> not False
True
>>> 1 < 2
True
>>> bool('any non-empty string')
True
```

**_Instructions:_**  
**In the console there is a function named boolean_true() that returns an undefined variable named value.**  
**Running the function as it is will result in a NameError.**  
**Change the variable named value so that the function returns the boolean value True.**  
