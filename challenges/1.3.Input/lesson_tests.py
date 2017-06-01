import unittest
import lesson_code

class InputTests(unittest.TestCase):
    def test_main(self):
        name = lesson_code.Name
        age = lesson_code.Age

        self.assertIsInstance(name, str)
        self.assertIsInstance(age, str)
# To run the tests from the console:
# Make sure that you are in the '1.3.Addition' directory
# python3 -m unittest lesson_tests
