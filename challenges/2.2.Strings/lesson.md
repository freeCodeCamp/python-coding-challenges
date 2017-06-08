## Python Strings

The simplest form of text sequences in Python is a `str` or _strings_.

To write a string in Python you have 4 options:
1. Using single quotes: `myStr = 'this allows "double" quotes inside'`
2. using double quotes: `myStr = "this allows 'single' quotes inside"`
3. Using triple single quotes:
```
myStr = '''Three quotes allows
for multiline strings.
Cool right?'''
```
4. Using triple double quotes:
```
myStr = """Three quotes allows
for multiline strings.
Isn't that even cooler?"""
```

Strings are considered 'immutable' meaning they can not be changed; however, two strings can be concatenated together using the `+` operator.

Example:
```
firstName = 'Jane'
lastName = 'Doe'
fullName = "My full name is: " + firstName + " " + lastName + "."
```

**_Instructions:_**  
Mini-Mad-Lib:
- Assign strings to each variable.
- Then concatenate everything together in the `mySentence` variable
