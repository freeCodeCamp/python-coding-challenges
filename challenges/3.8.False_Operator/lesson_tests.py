import unittest
import lesson_code
from lesson_code import boolean_false

class BooleanFalseKeywordTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(boolean_false())
        self.assertIsInstance(boolean_false(), bool)
        self.assertFalse(boolean_false())
        self.assertEqual(boolean_false(), False)
