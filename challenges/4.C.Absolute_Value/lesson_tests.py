import unittest
import lesson_code

class AbsoluteValueTests(unittest.TestCase):
    def test_main(self):
        absolute_value = lesson_code.absolute_value 
        self.assertIsInstance(absolute_value, int)
        self.assertEqual(absolute_value, 42)
