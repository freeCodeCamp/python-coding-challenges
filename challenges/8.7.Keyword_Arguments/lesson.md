## Keyword and Variable Keyword Arguments  

A keyword argument can be an argument preceded by an identifier in a function call using the form `kwarg=value`.  
Variable keyword arguments can be passed as values in a dictionary preceded by `**`, like this:    
`def example(default_arguments, *args, **kwargs):`  
In a function call, keyword arguments must follow positional arguments, and all keyword arguments passed must match one of the arguments accepted by the function.  
[Here is a detailed explanation](https://docs.python.org/3/reference/expressions.html#calls) of how keyword arguments are dealt with when the function is called.  
- https://docs.python.org/3.6/tutorial/controlflow.html#keyword-arguments
- https://docs.python.org/3.6/glossary.html#term-argument
- https://docs.python.org/3/reference/expressions.html#grammar-token-keywords_arguments
- https://docs.python.org/3/glossary.html#term-parameter  
- https://www.python.org/dev/peps/pep-0362/
- https://www.python.org/dev/peps/pep-0448/
- https://docs.python.org/3/reference/expressions.html#calls
- https://docs.python.org/3/reference/compound_stmts.html#function-definitions
```
>>> # 3 and 5 are both keyword arguments in the following calls to complex()
...
>>> complex(real=3, imag=5)
(3+5j)
>>> complex(**{'real': 3, 'imag': 5})
(3+5j)
```
```
>>> # arg1 and arg2 are keyword arguments, **kwargs is for variable keyword arguments
...
>>> >>> def some_dr_seuss(arg1='arg1', arg2='arg2', **kwargs):
...     return arg1, arg2, kwargs
...
>>> print(some_dr_seuss(**{'arg3': 'arg_red', 'arg4': 'arg_blue'}))
('arg1', 'arg2', {'arg3': 'arg_red', 'arg4': 'arg_blue'})
```
**_Instructions:_**  
**In the console there is a function named keyword_argument_example() that takes a default argument an an unspecified number of keyword arguments.**  
**When you call the function:**  
- **Enter an integer, your age, as the value for the default argument named your_age.**
- **Create two keyword arguments named first and last.**
- **Assign a string with your first name to first, and your last name to last.**  

**Assign your function call to the variable named about_me.**
