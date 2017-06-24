import unittest
from main import *

class AssignmentOperatorTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(my_name)
        self.assertIsInstance(my_name, str)
