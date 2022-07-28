from django.contrib import admin
from .models import Article, Reporter

# Register your models here.

admin.site.register(Reporter)
admin.site.register(Article)