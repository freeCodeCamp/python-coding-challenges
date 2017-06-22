import unittest
from main import *

class DivmodTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(result, tuple)
        self.assertEqual(result, (3, 2))
