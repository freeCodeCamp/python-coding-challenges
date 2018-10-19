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
## Loops (For)
- https://docs.python.org/3/tutorial/controlflow.html


The syntax of a for loop is:
suppose you want to print 5 numbers from  0 to 5 then code is here
```
for i in range(6):
   print(i)
```
range can have 3 arguments range(starting value,ending value,increment)
if we specify range(0,5,1)
then it will go from 0 to 5-1
it will print 0 1 2 3 4
if there is increment of 2
then 0 2 4
```
for i in range(i,r,e):
   print(i)
```

**_Instructions_**
**Modify the values of i,r,e so that it print first 5 multiples of 5**

