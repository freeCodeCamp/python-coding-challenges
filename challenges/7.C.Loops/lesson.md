## For

For loops iterate over a given sequence

```
lst = [2, 3, 5]
for i in lst:
    print(i)
```

The function range() return an iterable object with behaves as if it is a list. The object is not a list, it returns the successive items of the desired sequence. 

```
for i in range(9):
    print(i)
```

It is possible to let the range start at another number, or to specify a different increment.

```
for i in range(0, 9, 3):
    print(i)
```

**_Instructions_**
**Generate the sequence of numbers between 2 and 10 and specify an increment 3.**
**Calculate the sum of numbers of this sequence.**
