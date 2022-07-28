from django.contrib import admin
from .models import Food, Pet, Dessert

# Register your models here.

admin.site.register(Food)
admin.site.register(Pet)
admin.site.register(Dessert)