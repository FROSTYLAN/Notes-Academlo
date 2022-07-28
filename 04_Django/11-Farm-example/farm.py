class Farm:
    def __init__(self, name, workes, address) -> None:
        self.name = name
        self.workers = workes
        self.address = address
        self.__status = False

    @property
    def status(self):
        return self.__status

    def farming_status(self, status:bool=False):
        if status:
            self.__status = True
            return "La granja esta en temporada de cosecha"
        else:
            return "No es buen momento para cosechars"



class Farmer:
    seniority = ["Senior", "Semi Seniro"]
    def __init__(self, name,seniority="Semi Senior") -> None:
        self.name = name
        self.__products = []
        self.seniority = seniority

    def go_to_farm(self):
        return f"{self.name} fue a cosechar"

    
    @property
    def products(self):
        return self.__products

    @products.setter
    def products(self, product):
        self.__products = self.__products + product

    @classmethod
    def how_many_products_has(cls):
        return cls.seniority