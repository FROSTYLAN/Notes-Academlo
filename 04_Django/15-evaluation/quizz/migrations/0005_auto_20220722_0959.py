# Generated by Django 3.2 on 2022-07-22 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quizz', '0004_person'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='firstName',
            field=models.CharField(default=None, max_length=150),
        ),
        migrations.AlterField(
            model_name='person',
            name='lastName',
            field=models.CharField(default=None, max_length=150),
        ),
    ]