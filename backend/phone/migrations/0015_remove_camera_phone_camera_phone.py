# Generated by Django 4.0.3 on 2022-03-17 10:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phone', '0014_remove_camera_video_quality_phone_video_quality'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='camera',
            name='phone',
        ),
        migrations.AddField(
            model_name='camera',
            name='phone',
            field=models.ManyToManyField(related_name='camera', to='phone.phone'),
        ),
    ]