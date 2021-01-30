from django.urls import path,include
from . import views

urlpatterns = [

    path('',views.BlogList.as_view()),
    path('<slug:slug>/',views.BlogDetailView.as_view(), name='blog_detail'),
      
]