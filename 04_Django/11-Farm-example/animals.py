from base import Animal

class Hen(Animal):

    def __init__(self, name) -> None:
        self.name  = name

    def wake_up_animal(self):
        return f"La gallina {self.name} se ha despertado"

    def eat_animal(self):
        return f"La gallina {self.name} esta comiento"
    
    def sleep_animal(self):
        return f"La gallina {self.name} esta comiento"

class Cow(Animal):

    def __init__(self, name) -> None:
        self.name  = name

    def wake_up_animal(self):
        return f"La vaca {self.name} se ha despertado"

    def eat_animal(self):
        return f"La vaca {self.name} esta comiento"
    
    def sleep_animal(self):
        return f"La vaca {self.name} esta comiento"

class Horse(Animal):

    def __init__(self, name) -> None:
        self.name  = name

    def wake_up_animal(self):
        return f"El caballo {self.name} se ha despertado"

    def eat_animal(self):
        return f"El caballo {self.name} esta comiento"
    
    def sleep_animal(self):
        return f"El caballo {self.name} esta comiento"

class Pig(Animal):

    def __init__(self, name) -> None:
        self.name  = name

    def wake_up_animal(self):
        return f"El cerdo {self.name} se ha despertado"

    def eat_animal(self):
        return f"El cerdo {self.name} esta comiento"
    
    def sleep_animal(self):
        return f"El cerdo {self.name} esta comiento"