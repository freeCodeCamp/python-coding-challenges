import unittest
from lesson_code import equality

class EqualityOperatorTests(unittest.TestCase):
    def test_main(self):
        self.assertIsNotNone(equality(12))
        self.assertIsInstance(equality(12), str)
        self.assertEqual(equality(12), 'Equal to 12')
        self.assertNotEqual(equality(12), 'Not Equal to 12')

    def test_operator_presence(self):
        f = open('lesson_code.py')
        lines = str(f.readlines())
        f.close()
        self.assertRegex(lines, '==', msg="The == operator is not in the function definition")
