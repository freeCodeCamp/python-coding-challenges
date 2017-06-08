## Python `False` Operator  

In Python, the `False` keyword is the False value of type `bool` and can be used to directly assign boolean values.  
Assignments to `False` are illegal and raise a `SyntaxError`.  
Any Python object can be tested for truth value, and the following values are considered false:
- None
- False
- zero of any numeric type, for example, 0, 0.0, 0j.
- any empty sequence, for example, '', (), [].
- any empty mapping, for example, {}.
- instances of user-defined classes, if the class defines a \_\_bool\_\_() or \_\_len\_\_() method, when that method returns the integer zero or bool value False.

All other values are considered true — so objects of many types are always true.  

- https://docs.python.org/3/library/constants.html
- https://docs.python.org/3/library/stdtypes.html#truth
- https://docs.python.org/3/library/operator.html?highlight=true#operator.truth  
- https://docs.python.org/3/library/functions.html#bool  
- https://docs.python.org/3/library/stdtypes.html#boolean-values
- https://docs.python.org/3/reference/expressions.html#boolean-operations
```
>>> False
False
>>> not True
False
>>> 1 > 2
False
>>> bool('')
False
```

**_Instructions:_**  
**In the console there is a function named boolean_false() that returns an undefined variable named value.**  
**Running the function as it is will result in a NameError.**  
**Change the variable named value so that the function returns the boolean value False.**  
