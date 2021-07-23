from django.urls import path, include
from Albums import views


urlpatterns = [
    path("", views.getPics ,name="api"),
]
