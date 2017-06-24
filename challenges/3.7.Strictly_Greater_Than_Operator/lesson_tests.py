import unittest
from main import *

class StrictlyGreaterThanOperatorTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(strictly_greater_than(1))
        self.assertIsInstance(strictly_greater_than(1), str)
        self.assertEqual(strictly_greater_than(1), "10 or less")
        self.assertEqual(strictly_greater_than(10), "10 or less")
        self.assertEqual(strictly_greater_than(11), "Greater than 10")
        self.assertEqual(strictly_greater_than(99), "Greater than 10")
        self.assertEqual(strictly_greater_than(100), "Greater than 10")
        self.assertEqual(strictly_greater_than(101), "Greater than 100")
        self.assertEqual(strictly_greater_than(111), "Greater than 100")

    def test_operator_presence(self):
        f = open('main.py')
        lines = str(f.readlines())
        f.close()
        self.assertRegex(lines, '>', msg="The > operator is not in the function definition")
