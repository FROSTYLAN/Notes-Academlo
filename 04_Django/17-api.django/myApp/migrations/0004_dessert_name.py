# Generated by Django 3.2 on 2022-07-23 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0003_dessert_pet'),
    ]

    operations = [
        migrations.AddField(
            model_name='dessert',
            name='name',
            field=models.CharField(default='', max_length=100),
        ),
    ]
