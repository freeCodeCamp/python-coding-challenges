import unittest
from main import *

class SquareRootTests(unittest.TestCase):
    def test_main(self): 
        self.assertIsInstance(square_root, float)
        self.assertEqual(square_root, 9.0)
