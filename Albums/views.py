from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from Albums.serializers import *

from Albums.models import *


# Create your views here.
@api_view(["GET"])
def getPics(request):
    pics = Albums.objects.all()
    serializer = TaskSerializer(pics,many=True)
    return Response(serializer.data)