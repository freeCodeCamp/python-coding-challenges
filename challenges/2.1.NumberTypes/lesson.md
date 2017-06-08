## Python Numbers

There are 3 distinct numeric types in python.
- int
- float
- complex
- https://docs.python.org/3.6/library/stdtypes.html#numeric-types-int-float-complex  

**Integers** have _unlimited precision_; thus, they can be as large as you need them to be.

Example: `myInt = 789456123`

**Floats** are limited to the precision of a C _double_ value. You can check your systems _float precision_ by using the following commands:
```
import sys
sys.float_info
```

Example: `myFloat = 123.4567`

**Complex** numbers are broken into two parts, a real and imaginary part. Both are floating point numbers and can be accessed using the `.real` and `.imag` properties. You can create a complex number using the `complex(real, imag)` command. In Python, the _imaginary constant_ usually dictated with an `i` is replaced with a `j`.

Example: `myComplex = complex(2, 3.4) # myComplex = (2+3.4j)`

**_Instructions:_**  
- Assign an integer value to the `myInteger` variable
- Assign a float value to the `myFloat` variable
- Assign a complex value to the `myComplex` variable. Make sure it has both a real and imaginary part.
