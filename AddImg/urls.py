from django.urls import path, include
from AddImg import views

urlpatterns = [
    path("getImg/",views.addImg,name="addImg"),
]
