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
            name='group',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('description', models.TextField(blank=True)),
                ('rules', models.TextField(blank=True, null=True)),
                ('rules_is_enabled', models.BooleanField(default=False)),
                ('member_count', models.PositiveIntegerField(default=1)),
                ('pending_members_count', models.IntegerField(default=0)),
                ('pool_count', models.PositiveIntegerField(default=0)),
                ('topic_count', models.PositiveIntegerField(default=0)),
                ('date_create', models.DateTimeField(auto_now_add=True)),
                ('privacy', models.PositiveIntegerField(choices=[(1, 'private'), (2, 'invitation_only'), (3, 'public')])),
                ('eighteenplus', models.BooleanField(default=False)),
                ('invitation_only', models.BooleanField(default=False)),
                ('member_role', models.TextField(blank=True, default='Member')),
                ('admin_role', models.TextField(blank=True, default='Admin')),
            ],
        ),
        migrations.CreateModel(
            name='topic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(max_length=100)),
                ('message', models.TextField()),
                ('count_replies', models.PositiveIntegerField(default=0)),
                ('date_create', models.DateTimeField(auto_now_add=True)),
                ('last_edit', models.DateTimeField(auto_now=True)),
                ('is_sticky', models.BooleanField(default=False)),
                ('notification', models.BooleanField(default=True)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='group_topic', to='group.group')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='topic_owner', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='reply',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField()),
                ('date_create', models.DateTimeField(auto_now_add=True)),
                ('lastedit', models.DateTimeField(auto_now=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reply_owner', to=settings.AUTH_USER_MODEL)),
                ('topic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='group_topic_reply', to='group.topic')),
            ],
        ),
        migrations.CreateModel(
            name='PendingMembers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_send_request', models.DateTimeField(auto_now_add=True)),
                ('message', models.CharField(max_length=100)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='group_join_request', to='group.group')),
                ('pending_member', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='member_join_request', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('group', 'pending_member')},
            },
        ),
        migrations.CreateModel(
            name='Members',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('member_type', models.PositiveIntegerField(choices=[(1, 'member'), (2, 'admin')])),
                ('date_joined', models.DateTimeField(auto_now_add=True)),
                ('photos_count', models.PositiveIntegerField(default=0)),
                ('topic_count', models.PositiveIntegerField(default=0)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='group_join', to='group.group')),
                ('member', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='member_join', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('group', 'member')},
            },
        ),
        migrations.AddField(
            model_name='group',
            name='members',
            field=models.ManyToManyField(related_name='group_member', through='group.Members', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='group',
            name='pending_members',
            field=models.ManyToManyField(blank=True, related_name='group_pending_member', through='group.PendingMembers', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='group',
            name='photos',
            field=models.ManyToManyField(blank=True, related_name='group_photos', to='photo.Photo'),
        ),
    ]
