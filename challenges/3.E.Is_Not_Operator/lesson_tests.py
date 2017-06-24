import unittest
from main import *

class NegativeIdentityOperatorTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(negative_identity_test(84))
        self.assertIsInstance(negative_identity_test(84), str)
        self.assertEqual(negative_identity_test(84), "Same object")
        self.assertEqual(negative_identity_test("Anything other than 84"), "Different object")
        self.assertEqual(negative_identity_test(1), "Different object")
