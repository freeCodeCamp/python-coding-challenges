import unittest
import lesson_code

class SumTests(unittest.TestCase):
    def test_main(self):
        total = lesson_code.total 
        self.assertIsInstance(total, int)
        self.assertEqual(total, 55)
