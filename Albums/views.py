import json
from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib.auth import login as system_login, logout as system_logout, authenticate

from django.contrib.auth.models import User

from django.views.decorators.http import require_POST, require_GET

from rest_framework.decorators import api_view
from rest_framework.response import Response

from Albums.serializers import *

from Albums.models import *


# Create your views here.
@api_view(['GET'])
def getPics(request):
    pics = Albums.objects.all()
    serializer = TaskSerializer(pics,many=True)
    return Response(serializer.data)


