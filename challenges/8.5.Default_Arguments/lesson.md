## Default Arguments  

When a function is defined in Python, you can specify formal parameters inside of the trailing parentheses.  
If any of those parameters are declared using the "argument=value" format, then you don't necessarily have to specify a value for those arguments when the function is called.  
If a value is not specified, then that parameter uses the default argument value when the function executes.  
A default value can be specified for any or all of the arguments, which creates a function that can be called with fewer arguments than it is defined to allow.
- https://docs.python.org/3.6/tutorial/controlflow.html#default-argument-values  
```
>>> def greeting(number=1, message='Hello'):
...     print(number, message)
...
>>> greeting()
1 Hello
>>> greeting(2, message='Ahoy There!')
2 Ahoy There!
>>> greeting(number='Three')
Three Hello
```
**_Instructions:_**  
**In the console there is a function named favorite_python() with a single parameter named member that has a default argument of None.**  
**Call the function and change the default argument to a string containing the name of your favorite Monty Python member.**  
**Assign that function call to the variable named my_choice.**
