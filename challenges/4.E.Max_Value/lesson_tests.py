import unittest
import lesson_code

class MaxValueTests(unittest.TestCase):
    def test_main(self):
        highest = lesson_code.highest 
        self.assertIsInstance(highest, int)
        self.assertEqual(highest, 9)
