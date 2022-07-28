from base import Vehicle

class Car(Vehicle):
    def turn_on(self):
        return "Se encendió el carro"

    def go_to_town(self):
        return "Salió rumbo al poblado"

class Truck(Vehicle):
    def turn_on(self):
        return "Se encendió el camión"

    def go_to_town(self):
        return "Salió rumbo al poblado"