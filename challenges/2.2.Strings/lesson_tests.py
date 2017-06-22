import unittest
from main import *

class StringsTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(myName, str)
        self.assertIsInstance(myAge, str)
        self.assertIsInstance(favoriteActivity, str)
        self.assertIsInstance(mySentence, str)
