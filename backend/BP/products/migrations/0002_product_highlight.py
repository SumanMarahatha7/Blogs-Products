# Generated by Django 3.1.4 on 2021-01-29 07:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='highlight',
            field=models.BooleanField(blank=True, default=False, help_text='You can choose only one product for highlight'),
        ),
    ]
