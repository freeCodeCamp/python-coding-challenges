import unittest
import lesson_code

class MultiplicationTests(unittest.TestCase):
    def test_main(self):
        product = lesson_code.product
        self.assertIsInstance(product, int)
        self.assertEqual(product, 80)
