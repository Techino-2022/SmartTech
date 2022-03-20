# Generated by Django 4.0.3 on 2022-03-20 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phone', '0023_alter_network_nfc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='body',
            name='ip_certificate',
            field=models.CharField(blank=True, max_length=16, null=True),
        ),
        migrations.AlterField(
            model_name='body',
            name='protection',
            field=models.CharField(choices=[('Corning Gorilla Glass 5', 'Gorilla 5'), ('Corning Gorilla Glass 4', 'Gorilla 4'), ('Corning Gorilla Glass 3', 'Gorilla 3'), ('Corning Gorilla Glass 2', 'Gorilla 2'), ('Corning Gorilla Glass 1', 'Gorilla 1'), ('Corning Gorilla Glass Victus+', 'Victus+'), ('Not Specified', 'Unknown')], default='Unknown', max_length=32),
        ),
    ]
