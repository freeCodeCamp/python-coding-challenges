import unittest
from main import *

class AdditionTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(total, int)
        self.assertEqual(total, 20)

# To run the tests from the console:
# Make sure that you are in the '4.1.Addition' directory
# ⇒  python3 -m unittest lesson_tests
