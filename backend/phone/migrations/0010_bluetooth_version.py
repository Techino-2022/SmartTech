# Generated by Django 4.0.3 on 2022-03-19 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phone', '0009_remove_platform_processor_size'),
    ]

    operations = [
        migrations.AddField(
            model_name='bluetooth',
            name='version',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
