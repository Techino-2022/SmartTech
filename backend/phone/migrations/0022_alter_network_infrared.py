# Generated by Django 4.0.3 on 2022-03-20 04:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phone', '0021_alter_battery_wireless_charging'),
    ]

    operations = [
        migrations.AlterField(
            model_name='network',
            name='infrared',
            field=models.CharField(choices=[('Yes', 'Have Infrared'), ('No', 'Have not Infrared'), ('Unknown', 'not Specified')], default='No', max_length=32),
        ),
    ]