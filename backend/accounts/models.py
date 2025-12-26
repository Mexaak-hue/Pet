from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('ADMIN', 'Admin'),
        ('SECURITY', 'Security'),
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='SECURITY'
    )

    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
