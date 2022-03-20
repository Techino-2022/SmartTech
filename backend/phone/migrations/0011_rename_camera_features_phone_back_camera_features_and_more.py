# Generated by Django 4.0.3 on 2022-03-19 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phone', '0010_bluetooth_version'),
    ]

    operations = [
        migrations.RenameField(
            model_name='phone',
            old_name='camera_features',
            new_name='back_camera_features',
        ),
        migrations.AddField(
            model_name='phone',
            name='front_camera_features',
            field=models.TextField(blank=True, null=True),
        ),
    ]