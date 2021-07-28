import json
import magic
from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib.auth import login as system_login, logout as system_logout, authenticate
from django.core.files.uploadedfile import UploadedFile

from django.shortcuts import redirect

from django.contrib.auth.models import User

from django.views.decorators.http import require_POST, require_GET

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

from Albums.models import *

# Create your views here.


def BodyLoader(body):
    try:
        return json.loads(body)
    except Exception:
        return {}

@require_POST
@csrf_exempt
def addImg(request):
        file = request.FILES.get("file")
        if isinstance(file, UploadedFile):
            file_type = magic.from_buffer(file.read(),mime=True)
            if not file_type in ["image/gif","image/png","image/jpeg"]:
                return JsonResponse({"status" : "failed","text":"File Type "})
            if file.size > 1000000:
                return JsonResponse({"status": "failed", "text": "File Is Bigger Than 1Mg "})

            newAlbum = Albums(
                Title = " ",
                img = file,
                description = " "
            )

            newAlbum.save()

            albumId = newAlbum.id


            return JsonResponse({
                "status" : "success",
                "albumId" : albumId,
                "text" : "Your Img Saved Successfully"
            })
        else:
            return JsonResponse({"status": "failed", "text": "Error To Handle File Try Again Plz"})

@csrf_exempt
@require_POST
def addText(request):
    data = {}

    if request.POST:
        data = request.POST
    elif request.body:
        data = BodyLoader(request.body)


    try:    
        title = data.get("title")
        discription = data.get("discription")
        albumId = data.get("id")

        newAlbum = Albums.objects.get(id=albumId)

        newAlbum.title = title
        newAlbum.discription = discription

        newAlbum.save()

        return JsonResponse({
                    "status" : "success",
                    "text" : "Your Album Saved Successfully"
                })
    except Exception as expt:
        print(expt)
        return JsonResponse({
            "status": "failed",
            "text": "There was something wrong with your request plz try again later"
        })


