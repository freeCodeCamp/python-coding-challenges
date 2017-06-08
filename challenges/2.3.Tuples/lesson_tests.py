import unittest
import lesson_code

class StringsTests(unittest.TestCase):
    def test_main(self):
        twoTuple = lesson_code.twoTuple
        threeTuple = lesson_code.threeTuple
        fiveTuple = lesson_code.fiveTuple
        tenTuple = lesson_code.tenTuple
        self.assertIsInstance(twoTuple, tuple)
        self.assertIsInstance(threeTuple, tuple)
        self.assertIsInstance(fiveTuple, tuple)
        self.assertIsInstance(tenTuple, tuple)
        self.assertEqual(len(twoTuple), 2)
        self.assertEqual(len(threeTuple), 3)
        self.assertEqual(len(fiveTuple), 5)
        self.assertEqual(len(tenTuple), 10)
        
