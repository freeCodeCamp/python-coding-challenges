import unittest
import lesson_code
from lesson_code import membership_test

class TestMembership(unittest.TestCase):
    def test_main(self):
        word = lesson_code.word
        sentence = lesson_code.sentence
        self.assertIsNotNone(membership_test())
        self.assertEqual(membership_test(), True)
        self.assertTrue(membership_test())
        self.assertIn(word, sentence)
