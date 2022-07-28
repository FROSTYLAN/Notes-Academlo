import uuid
from django.db import models
import uuid

# Create your models here.

class Food(models.Model):
    name = models.CharField(max_length=150)
    quantity = models.IntegerField()
    uuid = models.UUIDField(default=uuid.uuid4)
    description = models.TextField()

class Pet(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    species = models.CharField(max_length=100)

class Dessert(models.Model):
    name = models.CharField(max_length=100, default="")
    ingredients = models.TextField()
    time_cooking = models.IntegerField()