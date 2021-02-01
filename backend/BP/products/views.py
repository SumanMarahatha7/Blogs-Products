from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from .serializers import ProductSerializer,HighSerializer,CategorySerializer
from .models import Category,Product


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.order_by('-id')
    serializer_class = HighSerializer

class ProductList(generics.ListAPIView):
    queryset = Product.objects.order_by('-id')
    serializer_class = ProductSerializer

class CategoryDetail(generics.ListAPIView):
    serializer_class = ProductSerializer
    def get_queryset(self):
        queryset = self.kwargs['pk']
        return Product.objects.filter(category_id=queryset)


class Show(generics.ListAPIView):
    queryset = Product.objects.filter(highlight=True).order_by('id')
    serializer_class = CategorySerializer

