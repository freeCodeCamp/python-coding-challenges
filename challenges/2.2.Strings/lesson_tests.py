import unittest
import lesson_code

class StringsTests(unittest.TestCase):
    def test_main(self):
        myName = lesson_code.myName
        myAge = lesson_code.myAge
        favoriteActivity = lesson_code.favoriteActivity
        mySentence = lesson_code.mySentence
        self.assertIsInstance(myName, str)
        self.assertIsInstance(myAge, str)
        self.assertIsInstance(favoriteActivity, str)
        self.assertIsInstance(mySentence, str)
