import unittest
from main import *

class LoopInfiniteTests(unittest.TestCase):
    def test_main(self):
        self.assertFalse(end)