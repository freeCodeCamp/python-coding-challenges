import unittest
import lesson_code
from lesson_code import boolean_true

class BooleanTrueKeywordTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(boolean_true())
        self.assertIsInstance(boolean_true(), bool)
        self.assertTrue(boolean_true())
        self.assertEqual(boolean_true(), True)
