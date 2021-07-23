from django.db import models

# Create your models here.
class Albums(models.Model):
    Title = models.CharField(max_length=100)
    img = models.ImageField(blank=False)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.Title
