# Generated by Django 4.2.7 on 2023-12-13 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('furniture', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='furniture',
            name='image',
            field=models.ImageField(default='furniture/default.jpg', upload_to='furniture/'),
        ),
    ]