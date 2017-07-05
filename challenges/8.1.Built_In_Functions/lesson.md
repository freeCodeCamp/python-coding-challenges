## Built-in Functions  

The Python interpreter has a number of functions and types built into it that are always available.  
They are listed [here](https://docs.python.org/3/library/functions.html) in alphabetical order.  
Python 3's builtins module provides direct access to all of the built-in functions.  
You don't need to import any modules when using a built-in function, just call the function with the appropriate arguments.   
- https://docs.python.org/3/library/functions.html#built-in-functions
- https://docs.python.org/3/library/builtins.html#module-builtins
- https://github.com/python/cpython/blob/3.6/Python/bltinmodule.c
```
>>> print("print() is a built-in function in Python 3")
print() is a built-in function in Python 3
>>> type([1,2,3,4,5])
<class 'list'>
>>> sum([1,2,3,4,5])
15
>>> id(sum([1,2,3,4,5]))
4412662784
```
**_Instructions:_**  
**In the console you will find a list of numbers.**  
**There is a built-in function that will return a new sorted list from the items in numbers.**  
**Find this function, call it using the variable named numbers as the argument, and assign this function call to the variable named result.**
