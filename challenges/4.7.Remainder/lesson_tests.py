import unittest
from main import *

class RemainderTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(remainder, int)
        self.assertEqual(remainder, 2)
