import unittest
from main import *

class TestMembership(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(membership_test())
        self.assertEqual(membership_test(), True)
        self.assertTrue(membership_test())
        self.assertIn(word, sentence)
