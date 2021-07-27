from django.urls import path, include
from Account import views

urlpatterns = [
    path("",views.account,name="account"),
    path("signup/", views.signUp, name="signUp"),
    path("logout/", views.logOut, name="logout"),
    path("login/", views.logIn, name="login"),
]

app_name = "account"