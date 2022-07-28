from abc import ABC, abstractclassmethod

class Animal(ABC):
    
    @abstractclassmethod
    def __init__(self, name: str) -> None:
        return None
    
    @abstractclassmethod
    def wake_up_animal(self) -> str:
        return
    
    @abstractclassmethod
    def eat_animal(self) -> str:
        return

    @abstractclassmethod
    def sleep_animal(self) -> str:
        return

class Vehicle(ABC):

    @abstractclassmethod
    def turn_on(self):
        return

    @abstractclassmethod
    def go_to_town(self):
        return
