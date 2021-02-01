from rest_framework import serializers
from .models import Product,Category

class ProductSerializer(serializers.ModelSerializer):
    # photo_url = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = "__all__"
        depth = 1


class HighSerializer(serializers.ModelSerializer):
     # items = ProductSerializer(many=True)

     class Meta:
        model = Category
        fields = ["name","id"]


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = "__all__"


