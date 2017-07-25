## Arguments vs Parameters

When dealing with functions, the terms argument and parameter are sometimes used interchangeably, but they do NOT mean the same thing.  
The difference between arguments and parameters can cause some confusion, especially for novice programmers.  
Parameters are defined by the names that appear in a function definition and define what types of arguments a function can accept.  
Arguments are the values actually passed to a function when calling it.  
When you DEFINE a function after the `def` keyword, the parameters are named inside the parentheses that follow.
When you CALL a function, the arguments are assigned inside the parentheses that follow.  
- https://docs.python.org/3/faq/programming.html#what-is-the-difference-between-arguments-and-parameters
- https://docs.python.org/3/glossary.html#term-argument
- https://docs.python.org/3/glossary.html#term-parameter
```
# The parameters are inside the parentheses in the function definition.
>>> def some_function(foo, bar=None):
...     return foo, bar
...
# The arguments are inside the parentheses in the function call.
>>> some_function(42, bar='baz')
(42, 'baz')
```
**_Instructions:_**  
**In the console, above the variable named result, define a function named my_function that has a single parameter named parameter.**  
**In the function body, tell the function to return parameter.**  
**After the equal sign for the variable named result, call my_function() and set the argument as the string 'argument'.**  
**When finished, you will have assigned the result of the my_function() call to the variable named result.**
