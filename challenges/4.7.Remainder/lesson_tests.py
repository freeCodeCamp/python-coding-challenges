import unittest
import lesson_code

class RemainderTests(unittest.TestCase):
    def test_main(self):
        remainder = lesson_code.remainder
        self.assertIsInstance(remainder, int)
        self.assertEqual(remainder, 2)
