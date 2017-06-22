import unittest
from main import *

class RoundingTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(shorter_pi, float)
        self.assertEqual(shorter_pi, 3.14)
