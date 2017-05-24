## Python Remainder

The % (modulo) operator yields the remainder from the division of the first argument by the second.  
The numeric arguments are first converted to a common type.  
- https://docs.python.org/3/library/operator.html#operator.mod
- https://docs.python.org/3.6/reference/expressions.html#index-59
- https://docs.python.org/3/library/operator.html#mapping-operators-to-functions
- https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex
```
>>> 3 % 2
1
>>> 3.0 % 2
1.0
>>> 3 % 2.0
1.0
```

A simple way to determine if a number is odd or even is to check the remainder when that number is divided by 2.  
For odd numbers, the remainder is 1.  
For even numbers, the remainder is 0.  
```
>>> 3 % 2
1
>>> 4 % 2
0
```

**_Instructions:_**  
**Delete the string assigned to the variable named remainder.**  
**Assign remainder a value equal to the remainder of 11 divided by 3 using the modulo (%) operator.**  
