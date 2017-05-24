import unittest
import lesson_code

class IntegerDivisionTests(unittest.TestCase):
    def test_main(self):
        quotient = lesson_code.quotient
        self.assertIsInstance(quotient, int)
        self.assertEqual(quotient, 2)
