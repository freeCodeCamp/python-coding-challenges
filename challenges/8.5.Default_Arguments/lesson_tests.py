import unittest
from main import *

class DefaultArgumentsTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(my_choice)
        self.assertTrue(my_choice)
        self.assertIsInstance(my_choice, str)
        self.assertNotEqual(my_choice, "Replace this string with the correct function call.")
