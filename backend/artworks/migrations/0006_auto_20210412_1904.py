# Generated by Django 3.1.7 on 2021-04-12 19:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('artworks', '0005_auto_20210412_1853'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artwork',
            name='artist',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='artworks.artist'),
            preserve_default=False,
        ),
    ]