import email
from django.db import models

# Create your models here.

# Many to Many

class Publication(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.title

class Article(models.Model):
    headline = models.CharField(max_length=100)
    Publication = models.ManyToManyField(Publication)

    def __str__(self) -> str:
        return self.headline


