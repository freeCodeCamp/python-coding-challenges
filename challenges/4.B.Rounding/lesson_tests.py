import unittest
import lesson_code

class RoundingTests(unittest.TestCase):
    def test_main(self):
        shorter_pi = lesson_code.shorter_pi
        self.assertIsInstance(shorter_pi, float)
        self.assertEqual(shorter_pi, 3.14)
