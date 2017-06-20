import unittest
import lesson_code

class StringsTests(unittest.TestCase):
    def test_main(self):
        mediumList = lesson_code.mediumList
        shortList = lesson_code.shortList
        longList = lesson_code.longList
        
        self.assertIsInstance(mediumList, list)
        self.assertIsInstance(shortList, list)
        self.assertIsInstance(longList, list)

        self.assertEqual(len(mediumList), 5)
        self.assertEqual(len(shortList), 2)
        self.assertEqual(len(longList), 7)
