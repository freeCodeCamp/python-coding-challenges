import unittest
import lesson_code

class MinValueTests(unittest.TestCase):
    def test_main(self):
        lowest = lesson_code.lowest
        self.assertIsInstance(lowest, int)
        self.assertEqual(lowest, 1)
