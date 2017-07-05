import unittest
from main import *

class KeywordArgumentsTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(about_me)
        self.assertTrue(about_me)
        self.assertNotEqual(about_me, "Replace this string with the correct function call.")

    def test_about_me_variable_has_correct_types(self):
        self.assertIsInstance(about_me, tuple)
        self.assertIsInstance(about_me[0], int)
        self.assertIsInstance(about_me[1], dict)

    def test_correct_keyword_arguments(self):
        self.assertIn("first", about_me[1].keys())
        self.assertIn("last", about_me[1].keys())
