import csv
from platform import mac_ver
from statistics import mode
from django.db import models

# Create your models here.
class Quizz(models.Model):
    title = models.CharField(max_length=150)
    topic = models.CharField(max_length=50, default=None)
    description = models.TextField()
    comments = models.CharField(max_length=200, default="Sin comentarios")

class Person(models.Model):
    firstName = models.CharField(max_length=150, default=None)
    lastName = models.CharField(max_length=150, default=None)

# Quizz(title="algo").save()
# Quizz.objects.create(title="algo")
# python manage.py shell

def users():
    persons = []
    with open(" quizz\quiz_1.csv") as csv_file:
        values = csv.DictReader(csv_file)
        for v in values:
            persons.append(
                {"name": v["First Name"], "last_name": v["Last Name"]}
            )
    return persons

users = users()