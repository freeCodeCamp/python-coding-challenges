import unittest
import lesson_code

class NumbersTests(unittest.TestCase):
    def test_main(self):
        myInteger = lesson_code.myInteger
        myFloat = lesson_code.myFloat
        myComplex = lesson_code.myComplex
        self.assertIsInstance(myInteger, int)
        self.assertIsInstance(myFloat, float)
        self.assertIsInstance(myComplex, complex)
