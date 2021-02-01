from django.urls import path
from . import views

urlpatterns = [
    path('',views.CategoryList.as_view()),
    path('productlist/',views.ProductList.as_view()),
    path('<int:pk>/',views.CategoryDetail.as_view()),
    path('highlight',views.Show.as_view()),
]
