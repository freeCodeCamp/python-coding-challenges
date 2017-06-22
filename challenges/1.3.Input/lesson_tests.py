import unittest
from main import *

class InputTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(name, str)
        self.assertIsInstance(age, str)
# To run the tests from the console:
# Make sure that you are in the '1.3.Addition' directory
# python3 -m unittest lesson_tests
