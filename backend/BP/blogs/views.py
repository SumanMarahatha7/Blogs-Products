from django.shortcuts import render, get_object_or_404
from rest_framework.views import Response
from rest_framework import generics
from .serializers import BlogSerializer
from .models import Blog



class BlogList(generics.ListAPIView):
	queryset = Blog.objects.filter(status=1).order_by('-created_on')
	serializer_class = BlogSerializer




class BlogDetailView(generics.ListAPIView):
	queryset = Blog.objects.filter(status=1)
	serializer_class = BlogSerializer

	def get_queryset(self):
		queryset = self.kwargs['slug']
		return Blog.objects.filter(slug = queryset)




