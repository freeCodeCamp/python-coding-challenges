import unittest
from main import *

class StrictlyLessThanOperatorTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(strictly_less_than(1))
        self.assertIsInstance(strictly_less_than(1), str)
        self.assertEqual(strictly_less_than(1), "Less than 10")
        self.assertEqual(strictly_less_than(9), "Less than 10")
        self.assertEqual(strictly_less_than(10), "Less than 100")
        self.assertEqual(strictly_less_than(99), "Less than 100")
        self.assertEqual(strictly_less_than(100), "100 or more")
        self.assertEqual(strictly_less_than(110), "100 or more")

    def test_operator_presence(self):
        f = open('main.py')
        lines = str(f.readlines())
        f.close()
        self.assertRegex(lines, '<', msg="The < operator is not in the function definition")
