import unittest
import lesson_code

class SquareRootTests(unittest.TestCase):
    def test_main(self):
        square_root = lesson_code.square_root 
        self.assertIsInstance(square_root, float)
        self.assertEqual(square_root, 9.0)
