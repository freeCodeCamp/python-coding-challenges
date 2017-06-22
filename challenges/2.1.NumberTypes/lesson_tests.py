import unittest
from main import *

class NumbersTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(myInteger, int)
        self.assertIsInstance(myFloat, float)
        self.assertIsInstance(myComplex, complex)
