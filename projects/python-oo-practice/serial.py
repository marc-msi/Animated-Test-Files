"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start = 0):
        """ This is where the generator is always going to rest to/ the start of the list"""
        self.start = self.next =start

    def __repr__(self):
        """ Shows what you're passing in and how its being represented/ expressed"""
        return f"<Serial Generator start={self.start} next={self.next}>"
    
    def generate(self):
        """ Return next serial"""
        self.next +=1
        return self.next -1
    
    def reset(self):
        """Reset number to original start"""
        self.next = self.start

