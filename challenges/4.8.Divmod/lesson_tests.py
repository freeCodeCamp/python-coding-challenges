import unittest
import lesson_code

class DivmodTests(unittest.TestCase):
    def test_main(self):
        result = lesson_code.result
        self.assertIsInstance(result, tuple)
        self.assertEqual(result, (3, 2))
