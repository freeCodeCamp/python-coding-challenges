## Python Sets

Python is filled with list-like data structures. **Sets** are unordered collections with no duplicate entries. Useful for membership management (no duplication usernames/emails) or discrete mathematics, sets support many mathematical operations such as union, intersection, difference, and symmetric difference.

You can use the set() function or a pair of `{}` curly braces to create a set. Empty sets must be created using the set() function only as an empty set of curly braces results in an empty dictionary (up next).

`mySet = { 1, 4, 6, 9 }`

By passing a string to the `set()` function, it will generate a set and remove all duplicate letters in the string.

`x = set('mississippi') # { 'm', 'i', 's', 'p' }`

Here are some of the mathematical operations mentioned earlier:
```
a = { 1, 2, 3, 4, 5 }
b = { 4, 5, 6 }

a - b # {1, 2, 3} letters in a not in b
a | b # { 1, 2, 3, 4, 5, 6 } letters in a or b or both
a & b # { 4, 5 } letters in both a and b
a ^ b # { 1, 2, 3, 6 } letters in a or b but not both
```

**_Instructions_**
- Remove all duplicates from the string 'FreeCodeCamp Rulez' using the `set()` function. Assign it to the `fccSet` variable.
