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
# Create your views here.

@require_POST
def add(request):
        file = request.FILES.get("file")
        if isinstance(file, UploadedFile):
            file_type = magic.from_buffer(file.read(),mime=True)
            if not file_type in ["image/gif","image/png","image/jpeg"]:
                return JsonResponse({"status" : "failed","text":"File Type "})
            if file.size > 1000000:
                return JsonResponse({"status": "failed", "text": "File Is Bigger Than 1Mg "})

            return JsonResponse({
                "status" : "success"
            })
        else:
            return JsonResponse({"status": "failed", "text": "Error To Handle File Try Again Plz"})
