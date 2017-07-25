import unittest
from main import *

class CallingFunctionsTests(unittest.TestCase):
    def test_output(self):
        self.assertIsNotNone(result)
        self.assertIsInstance(result, str)
        self.assertNotEqual(result, "Replace this string with the correct function call.")
