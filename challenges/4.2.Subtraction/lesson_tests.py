import unittest
from main import *

class SubtractionTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(total, int)
        self.assertEqual(total, 10)

# To run the tests from the console:
# Make sure that you are in the '4.2.Subtraction' directory
# ⇒  python3 -m unittest lesson_tests
