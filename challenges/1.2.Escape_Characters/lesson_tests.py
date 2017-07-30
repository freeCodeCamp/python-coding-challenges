import unittest
from main import *


class EscapeTests(unittest.TestCase):
    def test_main(self):
        self.assertRegex(repr(string_escape), r'\\n', msg='the string must contain "new line"')