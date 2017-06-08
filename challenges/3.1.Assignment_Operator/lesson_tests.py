import unittest
import lesson_code

class AssignmentOperatorTests(unittest.TestCase):
    def test_main(self):
        my_name = lesson_code.my_name
        self.assertIsNotNone(my_name)
        self.assertIsInstance(my_name, str)
