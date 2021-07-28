import json
import magic
from io import BytesIO
from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib.auth import login as system_login, logout as system_logout, authenticate
from django.core.files.uploadedfile import UploadedFile

from django.shortcuts import redirect

from django.contrib.auth.models import User

from django.views.decorators.http import require_POST, require_GET

# from rest_framework.decorators import api_view
# from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

from Albums.models import *

# Create your views here.


from django.http.multipartparser import MultiPartParser, ChunkIter, parse_header


def BodyLoader(body):
    try:
        return json.loads(body)
    except Exception:
        return {}

@require_POST
@csrf_exempt
def addImg(request):
        request.POST, request._files = MultiPartParser(
            request.META,
            BytesIO(request.body),
            request.upload_handlers,
            request.encoding,
        ).parse()

        title = request.POST.get('title')
        discription = request.POST.get('discription')
        file = request.FILES.get('file')


        if isinstance(file, UploadedFile):
            file_type = magic.from_buffer(file.read(), mime=True)
            if not file_type in ['image/gif','image/png','image/jpeg']:
                return JsonResponse({'status' : 'failed','text':'File Type '}, status=403)
            if file.size > 1000000:
                return JsonResponse({'status': 'failed', 'text': 'File Is Bigger Than 1Mg '}, status=403)

            newAlbum = Albums(
                Title = title,
                img = file,
                description = discription
            )

            newAlbum.save()

            albumId = newAlbum.id


            return JsonResponse({
                'status' : 'success',
                'albumId' : albumId,
                'text' : 'Your Img Saved Successfully'
            })
        else:
            return JsonResponse({'status': 'failed', 'text': 'Error To Handle File Try Again Plz'}, status=400)

@require_POST
@csrf_exempt
def addText(request):
    data = {}

    if request.POST:
        data = request.POST
    elif request.body:
        data = BodyLoader(request.body)

    # return JsonResponse({'l': [{'a_id' : x.id, 'a_title': x.Title} for x in Albums.objects.all()]})


    try:    
        title = data.get('title')
        discription = data.get('discription')
        albumId = data.get('id')

        print(albumId)

        newAlbum = Albums.objects.get(id=albumId)

        newAlbum.Title = title
        newAlbum.discription = discription

        newAlbum.save()

        print(newAlbum)

        return JsonResponse({
                    'status' : 'success',
                    'text' : 'Your Album Saved Successfully'
                })
    except Exception as expt:
        print(expt)
        return JsonResponse({
            'status': 'failed',
            'text': 'There was something wrong with your request plz try again later'
        })


