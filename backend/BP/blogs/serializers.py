from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ["title","slug","description","author","created_on","status","featured_image"]
        depth = 1