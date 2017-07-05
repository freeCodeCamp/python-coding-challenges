import unittest
from main import *

class BuiltInFunctionsTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(result, list)
        self.assertNotIsInstance(result, str)
        self.assertEqual(result, [1, 2, 3, 4, 5, 6, 7, 8])
        self.assertNotEqual(result, [6, 3, 1, 8, 5, 2, 4, 7])
        self.assertNotEqual(result, numbers)
