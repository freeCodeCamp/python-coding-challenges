## Python Lists

Similar to JavaScript array notation, a python list is written as a list of comma-separated values between square brackets. They can contain items of different types, but usually don't.

`myList = [ 11, 4, 35, 96 ]`

Lists are very similar to strings, but have one very important difference. Lists are **mutable**, strings are immutable. This means the contents of a list can change.

`myList[3] = 64 # = [ 11, 4, 35, 64 ]`

Lists are similar to strings because they can be indexed, sequenced, and concatenated.
`myList[0] # = 11`

`myList[0:2] # = [11, 4]`

`myList + [ 342, 598 ] # = [ 11, 4, 35, 64, 342, 598 ]`

Finally, lists can even contain other lists! This is called "multidimensional":

`my2by2 = [ [ 5, 6 ], [ 4, 2 ] ]`

**_Instructions_**
- Assign a list of numbers, length 5 to the variable `mediumList`
- Assign a list of numbers, length 2 to the variable `shortList`
- Concatenate the two lists together and assign it to the variable `longList`
