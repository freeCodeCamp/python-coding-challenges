import unittest
from main import *

class StringsTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(fccSet, set)
        self.assertEqual(len(fccSet), 14)
