from platform import mac_ver
from pyexpat import model
from django.db import models

# Create your models here.

# Un sistema de modelos y relaciones donde pueda crear
# Quizzes (Por el momento no es necesario que tengan preguntas)
# Crear personas
# Adignar una persona con un quizz y un puntaje

class Person(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.first_name + " " + self.last_name

class Quizz(models.Model):
    title = models.CharField(max_length=100)
    players = models.ManyToManyField(Person)

    def __str__(self) -> str:
        return self.title



