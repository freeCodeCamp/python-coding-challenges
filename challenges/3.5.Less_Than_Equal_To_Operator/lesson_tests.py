import unittest
from main import *

class GreaterThanEqualToOperatorTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(less_or_equal(1))
        self.assertIsInstance(less_or_equal(1), str)
        self.assertEqual(less_or_equal(1), "25 or less")
        self.assertEqual(less_or_equal(25), "25 or less")
        self.assertEqual(less_or_equal(26), "75 or less")
        self.assertEqual(less_or_equal(75), "75 or less")
        self.assertEqual(less_or_equal(76), "More than 75")
        self.assertEqual(less_or_equal(100), "More than 75")

    def test_operator_presence(self):
        f = open('main.py')
        lines = str(f.readlines())
        f.close()
        self.assertRegex(lines, '<=', msg="The <= operator is not in the function definition")
