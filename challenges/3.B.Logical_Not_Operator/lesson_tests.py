import unittest
from main import *

class BooleanNotOperatorTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(boolean_not(True))
        self.assertIsInstance(boolean_not('any object'), bool)
        self.assertEqual(boolean_not(True), False)
        self.assertEqual(boolean_not('True'), False)
        self.assertFalse(boolean_not(True))
