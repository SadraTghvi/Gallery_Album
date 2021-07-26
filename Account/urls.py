from django.urls import path, include
from Account import views

urlpatterns = [
    path("signup/", views.signUp, name="signUp"),
]
