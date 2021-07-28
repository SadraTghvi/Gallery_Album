from rest_framework import serializers
from Albums.models import *


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Albums
        fields = '__all__'
