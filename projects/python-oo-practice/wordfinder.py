"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    """Machine for finding random words in a dictionary"""
    def __init__(self, path):
        """Reads dictionary and reports the amount of items read"""
        dict_file= open(path)
        
        self.words = self.parse(dict_file)

        print(f"{len(self.words)} words read")

        def parse(self, dict_file):
            """ Parse dict_file into a list of words"""
            return [w.strip() for w in dict_file]
        
        def random(self):
            """Return a random word"""
            return random.choice(self.words)
        

class SpecialWordFinder(WordFinder):
    """ Specialized word finer that excludes blank lines/ comments"""
    def parse(self, dict_file):

        return [w.strip() for w in dict_file
                if w.strip() and not w.startswith('#')]

    
