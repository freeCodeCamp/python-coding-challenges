## Positional and Variable Positional Arguments  

A positional argument is, simply put, any argument that is not a keyword argument.  
Positional refers to the fact that the relative position, or order, of the arguments is significant when they are stored in their corresponding tuple.  
Positional arguments can be used to form [arbitrary argument lists](https://docs.python.org/3.6/tutorial/controlflow.html#arbitrary-argument-lists).  
Functions can accept a variable number of (optional) positional arguments by using the `*args` syntax in the def statement, like this:    
`def example(default_arguments, *args, **kwargs):`    
The `*` operator instructs Python to pass argument inputs to a tuple that receives any excess positional parameters, defaulting to the empty tuple.      
When a function is defined and the parameters are declared, variable positional arguments must follow normal/default arguments (if any) and precede any variable keyword arguments (if any).  
- https://docs.python.org/3.6/tutorial/controlflow.html#arbitrary-argument-lists
- https://docs.python.org/3/glossary.html#term-argument
- https://docs.python.org/3/reference/expressions.html#grammar-token-positional_arguments
- https://www.python.org/dev/peps/pep-0362/
- https://www.python.org/dev/peps/pep-0448/
- https://docs.python.org/3/reference/expressions.html#calls
- https://docs.python.org/3/reference/compound_stmts.html#function-definitions
```
>>> # 3 and 5 are both positional arguments in the following calls to complex()
...
>>> complex(3, 5)
(3+5j)
>>> complex(*(3, 5))
(3+5j)
```
```
>>> # arg1 and arg2 are positional arguments, *args is for variable positional arguments
...
>>> def some_dr_seuss(arg1, arg2, *args):
...     return arg1, arg2, args
...
>>> print(some_dr_seuss('arg1', 'arg2', 'arg_red', 'arg_blue'))
('arg1', 'arg2', ('arg_red', 'arg_blue'))
```
**_Instructions:_**  
**In the console there is a function named positional_argument_example() that takes a default argument and an unspecified number of positional arguments.**  
**When you call the function:**  
- **Enter an integer, your age, as the value for the default argument named your_age.**
- **Assign two strings, the first with your first name, the second with your last name, as the variable positional arguments**.  

**Assign your function call to the variable named about_me.*
