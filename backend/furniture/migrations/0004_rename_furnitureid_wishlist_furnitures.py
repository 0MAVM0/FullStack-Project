# Generated by Django 4.2.7 on 2023-12-15 14:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('furniture', '0003_wishlist'),
    ]

    operations = [
        migrations.RenameField(
            model_name='wishlist',
            old_name='furnitureId',
            new_name='furnitures',
        ),
    ]
