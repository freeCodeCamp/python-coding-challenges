import unittest


class PrintTests(unittest.TestCase):
    def test_main(self):
        f = open('main.py')
        lines = str(f.readlines())
        f.close()
        self.assertRegex(lines, "sep='_'", msg="_ mising")
        self.assertRegex(lines, "end='!'", msg="! mising")