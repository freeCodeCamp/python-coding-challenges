import unittest
from main import *

class IdentityOperatorTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(identity_test(42))
        self.assertIsInstance(identity_test(42), str)
        self.assertEqual(identity_test(42), "Same object")
        self.assertEqual(identity_test(1), "Different object")
        self.assertNotEqual(identity_test(42), "Different object")
