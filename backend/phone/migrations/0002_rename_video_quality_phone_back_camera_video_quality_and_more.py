# Generated by Django 4.0.3 on 2022-03-19 19:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phone', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='phone',
            old_name='video_quality',
            new_name='back_camera_video_quality',
        ),
        migrations.AddField(
            model_name='phone',
            name='front_camera_video_quality',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='phone',
            name='model',
            field=models.CharField(default='A', max_length=64),
        ),
        migrations.AlterField(
            model_name='material',
            name='body',
            field=models.ManyToManyField(related_name='material', to='phone.body'),
        ),
    ]