import unittest
from main import *

class ArgumentsVsParametersTests(unittest.TestCase):
    def test_output(self):
        self.assertIsNotNone(result)
        self.assertIsInstance(result, str)
        self.assertEqual(result, 'argument')

    def test_names_for_function_parameter_and_argument(self):
        f = open('main.py')
        lines = str(f.readlines())
        f.close()
        # The following tests only ensure that the named strings exist somewhere in the file, not that they are where they should be or have the correct values assigned.
        self.assertRegex(lines, 'my_function()', msg="The name of the function is incorrect.")
        self.assertRegex(lines, 'parameter', msg="The parameter must have the correct name.")
        self.assertRegex(lines, 'argument', msg="The argument must have the correct name.")
