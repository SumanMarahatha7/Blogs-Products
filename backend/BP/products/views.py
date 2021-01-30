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

class CategoryDetail(APIView):
    queryset = Product.objects.order_by('-id')
    def get(self,request,pk):
        queryset = self.queryset.filter(category_id=pk)
        detail = ProductSerializer(queryset, many=True)
        return Response(detail.data)


class Show(generics.ListAPIView):
    queryset = Product.objects.filter(highlight=True).order_by('id')
    serializer_class = CategorySerializer

