# Generated by Django 3.0.5 on 2021-06-05 21:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('photo', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='sets',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('primary', models.PositiveIntegerField(blank=True)),
                ('count_photos', models.PositiveIntegerField(default=1)),
                ('count_comments', models.PositiveIntegerField(default=0)),
                ('can_comment', models.BooleanField(default=True)),
                ('date_create', models.DateTimeField(auto_now_add=True)),
                ('date_update', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, max_length=1000)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_photoset', to=settings.AUTH_USER_MODEL)),
                ('photos', models.ManyToManyField(blank=True, related_name='sets_photos', to='photo.Photo')),
            ],
        ),
        migrations.CreateModel(
            name='commentss',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contents', models.CharField(max_length=1000)),
                ('date_create', models.DateTimeField(auto_now_add=True)),
                ('date_update', models.DateTimeField(auto_now=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_photoset_comments', to=settings.AUTH_USER_MODEL)),
                ('sets', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comment', to='photosets.sets')),
            ],
        ),
    ]
