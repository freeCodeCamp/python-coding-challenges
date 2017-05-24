import unittest
import lesson_code

class ExponentsTests(unittest.TestCase):
    def test_main(self):
        power = lesson_code.power 
        self.assertIsInstance(power, int)
        self.assertEqual(power, 81)
