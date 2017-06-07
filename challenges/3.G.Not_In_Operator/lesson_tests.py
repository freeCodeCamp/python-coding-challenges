import unittest
import lesson_code
from lesson_code import non_membership_test

class TestNonMembership(unittest.TestCase):
    def test_main(self):
        letter = lesson_code.letter
        alphabet = lesson_code.alphabet
        self.assertIsNotNone(non_membership_test())
        self.assertEqual(non_membership_test(), True)
        self.assertTrue(non_membership_test())
        self.assertNotIn(letter, alphabet)
