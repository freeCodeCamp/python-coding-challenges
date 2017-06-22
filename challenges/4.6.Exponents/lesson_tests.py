import unittest
from main import *

class ExponentsTests(unittest.TestCase):
    def test_main(self): 
        self.assertIsInstance(power, int)
        self.assertEqual(power, 81)
