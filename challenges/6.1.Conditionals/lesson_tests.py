import unittest
from main import *

class ConditionalsTests(unittest.TestCase):
    def test_main(self):
        self.assertIsInstance(value, str)
        self.assertIs(value, 'y', "program must print 'yes'")