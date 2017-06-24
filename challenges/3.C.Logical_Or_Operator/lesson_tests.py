import unittest
from main import *

class BooleanOrOperatorTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(boolean_or(75))
        self.assertEqual(boolean_or(1), "Try Again")
        self.assertEqual(boolean_or(49), "Try Again")
        self.assertEqual(boolean_or(50), "Pass")
        self.assertEqual(boolean_or(75), "Pass")
        self.assertEqual(boolean_or(100), "Pass")
        self.assertEqual(boolean_or(101), "Try Again")
