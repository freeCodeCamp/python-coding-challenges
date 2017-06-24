import unittest
from main import *

class SumTests(unittest.TestCase):
    def test_main(self): 
        self.assertIsInstance(total, int)
        self.assertEqual(total, 55)
