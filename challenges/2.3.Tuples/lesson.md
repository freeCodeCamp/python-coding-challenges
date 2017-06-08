## Python Tuples

A tuple is an immutable (cannot be changed) sequence of data.

Tuples can be constructed in multiple ways:
- Using a pair of parentheses to denote an empty tuple: `()`
- Using a trailing comma for a singleton tuple (one value): `a,` or `(a,)`
- Separating items with commas: `a, b, c` or `(a, b, c)`
- Using the built-in `tuple()`: `tuple('abc') # = ('a', 'b', 'c')`

When referencing tuples, you say the 'n-tuple' where 'n' is the number of elements.
For example: `myTuple = a, b, c, d, e` myTuple is a 5-tuple.

**Note** the comma `,` is actually what makes a tuple, not the parentheses `()`.
The parentheses are optional except when they are needed such as for an empty tuple or to avoid ambiguity.
Example: `f(a, b, c)` is a function call with three arguments. `f((a, b, c))` is a function call with one 3-tuple argument.

**_Instructions_**
- Assign the appropriate length tuples to the given variables
  For example: `twoTuple = a, b` and `threeTuple = a, b, c`
