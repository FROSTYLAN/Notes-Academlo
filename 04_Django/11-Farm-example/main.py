from animals import Cow, Hen, Pig, Horse
from farm import Farm, Farmer
from vehicles import Truck, Car

animals = [
    Pig("Pepito"),
    Pig("Ranchero"),
    Cow("Lola"),

    Pig("pepa pig"),
    Hen("Claudio"),
    Pig("Josefina"),
    Pig("Marquitos"),
    Cow("Patricia"),

    Horse("Tiro al blanco")
]
farmers = {
    "senior": [Farmer("Roberto", "Senior")],
    "semi_senior": [Farmer("Luis"), Farmer("Cindy"), Farmer("Yeiner")]
}
vehicles = [Car(), Truck()]
farm = Farm("Academlo Farm", farmers, "Mexico")

def farming(farm, animals,change_status=False,):

    farm.farming_status(change_status)

    for animal in animals:
        print(f"{animal.wake_up_animal()} en la granja {farm.name}")
    if farm.status:
        for farmer in  farm.workers["semi_senior"] + farm.workers["senior"]:
            print(farmer.go_to_farm())
            if farmer.seniority == "Senior":
                print(f"{farmer.name} no vendio nada :c")
            else:
                print(f"{farmer.name} {vehicles[0].go_to_town()} a vender la cosecha")
        
        return "Es buen momento"
    else:
        return "Es mal momento"

print(farming(farm,animals,True))