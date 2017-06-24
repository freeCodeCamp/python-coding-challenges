import unittest
from main import *

class TestNonMembership(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(non_membership_test())
        self.assertEqual(non_membership_test(), True)
        self.assertTrue(non_membership_test())
        self.assertNotIn(letter, alphabet)
