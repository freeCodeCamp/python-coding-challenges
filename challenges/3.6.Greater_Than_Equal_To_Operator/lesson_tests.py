import unittest
from main import *

class GreaterThanEqualToOperatorTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(greater_or_equal(1))
        self.assertIsInstance(greater_or_equal(1), str)
        self.assertEqual(greater_or_equal(1), "Less than 20")
        self.assertEqual(greater_or_equal(19), "Less than 20")
        self.assertEqual(greater_or_equal(20), "20 or more")
        self.assertEqual(greater_or_equal(49), "20 or more")
        self.assertEqual(greater_or_equal(50), "50 or more")
        self.assertEqual(greater_or_equal(51), "50 or more")

    def test_operator_presence(self):
        f = open('main.py')
        lines = str(f.readlines())
        f.close()
        self.assertRegex(lines, '>=', msg="The >= operator is not in the function definition")
