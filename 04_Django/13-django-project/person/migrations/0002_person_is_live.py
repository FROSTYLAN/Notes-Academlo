# Generated by Django 3.2 on 2022-07-08 22:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('person', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='is_live',
            field=models.BooleanField(default=True),
        ),
    ]