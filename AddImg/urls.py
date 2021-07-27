from django.urls import path, include
from AddImg import views

urlpatterns = [
    path("add/",views.add,name="add")
]
