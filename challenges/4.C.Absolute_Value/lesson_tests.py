import unittest
from main import *

class AbsoluteValueTests(unittest.TestCase):
    def test_main(self): 
        self.assertIsInstance(absolute_value, int)
        self.assertEqual(absolute_value, 42)
