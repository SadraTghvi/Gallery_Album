from django.db import models

# Create your models here.
class Albums(models.Model):
    Title = models.CharField(max_length=100,null=True,blank=True)
    img = models.ImageField(null=True,blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.Title or "No Title"
