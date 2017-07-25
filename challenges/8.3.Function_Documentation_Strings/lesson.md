## Function Documentation Strings

Function documentation strings (docstrings) offer a way to provide additional information about a function and its properties.  
A docstring is a string literal that occurs as the first statement in a module, function, class, or method definition.  
Such a docstring becomes the \_\_doc\_\_ special attribute of that object.  
The docstring for a function or method should summarize its behavior and document its arguments, return value(s), side effects, exceptions raised, and restrictions on when it can be called (all if applicable).  
Optional arguments should be indicated.   
There are two forms of docstrings: one-liners and multi-line docstrings.    
For consistency, always use """triple double quotes""" around docstrings.

- https://docs.python.org/3/tutorial/controlflow.html#documentation-strings
- https://www.python.org/dev/peps/pep-0257/
```
>>> def some_function():
...     """
...     This function does nothing, but it's documented.
...     
...     Multiline docstrings are for more detailed descriptions.
...     """
...     pass
...
>>> print(some_function.__doc__)

	This function does nothing, but it's documented.

	Multiline docstrings are for more detailed descriptions.
```

**_Instructions:_**  
**In the console you will find a function named docstring\_function().**  
**In the space between the function definition and the `pass` keyword, write any string you like using the docstring triple-double quotes convention.**    
