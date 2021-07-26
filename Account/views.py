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


def BodyLoader(body):
    try:
        return json.loads(body)
    except Exception:
        return {}


@require_POST
def signUp(request):
    if request.user.is_authenticated:
        system_logout(request)
    data = {}

    if request.POST:
        data = request.POST
    elif request.body:
        data = BodyLoader(request.body)

    username = data.get("username")
    password = data.get("password")
    print(username, password)

    try:
        user = User.objects.create_user(username, None, password)
        system_login(request, user)

        return JsonResponse({
            "status": "success",
            "text": "you have successfully Registered In Our Site",
        })
    except Exception as exept:
        print(exept)

        return JsonResponse({
            "status": "failed",
            "text": f"There was an error for making your account {exept}",
        })

@require_GET
def account(request):
    if request.user.is_authenticated:
        return JsonResponse({
            "status":"true",
            "username": request.user.username,
        })
    else:
        return JsonResponse({
            "status":"faile",
            "username": "anonymous",
        })
