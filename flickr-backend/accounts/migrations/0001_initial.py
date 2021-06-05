# Generated by Django 3.0.5 on 2021-06-04 20:14

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('email', models.EmailField(max_length=60, unique=True, verbose_name='email')),
                ('username', models.CharField(db_index=True, max_length=16)),
                ('first_name', models.CharField(max_length=60, verbose_name='first-name')),
                ('last_name', models.CharField(max_length=60, verbose_name='last-name')),
                ('age', models.PositiveIntegerField(default=0, validators=[django.core.validators.MaxValueValidator(110), django.core.validators.MinValueValidator(10)])),
                ('date_joined', models.DateTimeField(auto_now_add=True, verbose_name='date joined')),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('last_login', models.DateTimeField(auto_now=True, verbose_name='last login')),
                ('is_verified', models.BooleanField(default=False)),
                ('is_admin', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_pro', models.BooleanField(default=False)),
                ('is_followed', models.BooleanField(default=False)),
                ('total_media', models.PositiveIntegerField(default=0)),
                ('fav_count', models.PositiveIntegerField(default=0)),
                ('count_groups', models.PositiveIntegerField(default=0)),
                ('tag_count', models.PositiveIntegerField(default=0)),
                ('galleries_count', models.PositiveIntegerField(default=0)),
                ('photosets_count', models.PositiveIntegerField(default=0)),
                ('profile_pic', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('cover_photo', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('followers_count', models.PositiveIntegerField(default=0, null=True)),
                ('following_count', models.PositiveIntegerField(default=0, null=True)),
                ('login_from', models.CharField(default='email', max_length=255)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Contacts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_create', models.DateTimeField(auto_now_add=True)),
                ('followed', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='follow_followed', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(editable=False, on_delete=django.db.models.deletion.CASCADE, related_name='follow_follower', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
