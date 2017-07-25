import unittest
import sys
from io import StringIO
from main import *

class UserDefinedFunctionsTests(unittest.TestCase):
    def test_main(self):
        # Make sure there is no return statement.
        self.assertIsNone(say_hello())

    def test_function_name(self):
        # Make sure that the function has the correct name.
        f = open('main.py')
        lines = str(f.readlines())
        f.close()
        self.assertRegex(lines, 'say_hello()', msg="The name of the function is incorrect.")

    def test_output(self):
        # Make sure that calling say_hello() outputs the correct string.
        saved_stdout = sys.stdout
        try:
            out = StringIO()
            sys.stdout = out
            say_hello()
            output = out.getvalue().strip()
            assert output == "Hello World!"
        finally:
            sys.stdout = saved_stdout
