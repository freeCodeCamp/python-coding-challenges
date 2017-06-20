import unittest
import lesson_code

class StringsTests(unittest.TestCase):
    def test_main(self):
        fccSet = lesson_code.fccSet

        self.assertIsInstance(fccSet, set)
        self.assertEqual(len(fccSet), 14)
