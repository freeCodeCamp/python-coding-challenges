import unittest
from main import *

class BooleanAndOperatorTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(boolean_and(30))
        self.assertEqual(boolean_and(1), "Try Again")
        self.assertEqual(boolean_and(24), "Try Again")
        self.assertEqual(boolean_and(25), "Pass")
        self.assertEqual(boolean_and(45), "Pass")
        self.assertEqual(boolean_and(50), "Pass")
        self.assertEqual(boolean_and(51), "Try Again")
