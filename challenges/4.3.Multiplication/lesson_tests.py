import unittest
from main import *

class MultiplicationTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(product, int)
        self.assertEqual(product, 80)
