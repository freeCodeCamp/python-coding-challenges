## Loops (While)

- https://docs.python.org/3/tutorial/controlflow.html

A loop statement allows to execute a block of code multiple times. Python supplies two type of loops: 
* while 
* for 

The syntax of a while loop is:

```
while condition:
   statement
```

While loops repeat a target statement as long as a given condition is true.

```
count = 0
while count < 9:
    print('Loop iteration: ', count)
    count = count + 1
```

Python supports to have an else statement associated with a loop statement. The else statement is executed when the condition becomes false.

```
count = 0
while count < 9:
   print('Loop iteration ', count)
   count = count + 1
else:
   print('loop end')
```

**_Instructions_**
**Modify the count, so that condition and switch_loop must become true.**
**Use else statement, to mark the end of a program and switch switch_end to value true.**
