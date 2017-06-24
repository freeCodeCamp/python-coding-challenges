import unittest
from main import *

class InEqualityOperatorTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(inequality(13))
        self.assertIsInstance(inequality(13), str)
        self.assertEqual(inequality(13), 'Equal to 13')
        self.assertNotEqual(inequality(13), 'Not Equal to 13')

    def test_operator_presence(self):
        f = open('main.py')
        lines = str(f.readlines())
        f.close()
        self.assertRegex(lines, '!=', msg="The != operator is not in the function definition")
