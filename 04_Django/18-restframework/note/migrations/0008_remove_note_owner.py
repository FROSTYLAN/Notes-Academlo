# Generated by Django 3.2 on 2022-07-24 20:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('note', '0007_alter_note_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='note',
            name='owner',
        ),
    ]
