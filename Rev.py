str1="Mangesh"

set1={1,2,3,4,1,2}

def add(no1,no2):
    return no1+no2

#print(add('man',2))

class Base:
    def __init__(self,no1):
        self.no1=no1
class Derived(Base):
    def __init__(self, no1):
        super().__init__(no1)
        
def diffrence(no1,no2):
    return no1-no2

def decorator(fptr):
    def swap(no1,no2):
        if(no1<no2):
            no2,no1=no1,no2
        return fptr(no1,no2)
    return swap

fptr=decorator(diffrence)
print(fptr(1,2))
         
        
    