# Generated by Django 4.0.3 on 2022-03-17 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phone', '0016_remove_camera_image_stabilization_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='platform',
            name='processor_size',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]