import unittest
from main import *

class BooleanTrueKeywordTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(boolean_true())
        self.assertIsInstance(boolean_true(), bool)
        self.assertTrue(boolean_true())
        self.assertEqual(boolean_true(), True)
