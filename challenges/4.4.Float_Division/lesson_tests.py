import unittest
import lesson_code

class FloatDivisionTests(unittest.TestCase):
    def test_main(self):
        quotient = lesson_code.quotient
        self.assertIsInstance(quotient, float)
        self.assertEqual(quotient, 2.5)
