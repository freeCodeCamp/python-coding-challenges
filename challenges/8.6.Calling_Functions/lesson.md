## Calling Functions

Once a function has been defined, it must be called in order to be executed.  
A function is a callable object that can execute when its `__call__()` method is invoked.  
A function can be called by appending the arguments in parentheses to the function name.  
If a function has no parameters, or if the parameters have default arguments that you do not want to change, then you can invoke the call method by appending empty parentheses to the function name.  
- https://docs.python.org/3/reference/datamodel.html#object.\_\_call\_\_
- https://docs.python.org/3.6/tutorial/controlflow.html#defining-functions
- https://docs.python.org/3/library/functions.html#callable
```
# Define the function:
>>> def call_something(something=None):
...     return something
...
# Call the function with the parameter's default argument of None:
>>> call_something()  
# Nothing is returned.
# Now call the function with an argument that changes the default:
>>> call_something(something="Here's something")
"Here's something"
```
**_Instructions:_**  
**In the console, there is a function named say_hello() that returns a greeting.**  
**Call the function and put any string you want as the greeting argument inside of the parentheses.**  
**Assign the function call to the variable named result in the console.**
