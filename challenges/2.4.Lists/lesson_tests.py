import unittest
from main import *

class StringsTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(mediumList, list)
        self.assertIsInstance(shortList, list)
        self.assertIsInstance(longList, list)
        self.assertEqual(len(mediumList), 5)
        self.assertEqual(len(shortList), 2)
        self.assertEqual(len(longList), 7)
