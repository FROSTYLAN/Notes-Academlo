# Generated by Django 3.2 on 2022-07-22 05:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quizz', '0002_auto_20220722_0033'),
    ]

    operations = [
        migrations.AddField(
            model_name='quizz',
            name='comments',
            field=models.CharField(default='Sin comentarios', max_length=200),
        ),
    ]