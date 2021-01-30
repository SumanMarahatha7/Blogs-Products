from rest_framework import serializers
from .models import Product,Category

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class HighSerializer(serializers.ModelSerializer):
     # items = ProductSerializer(many=True)

     class Meta:
        model = Category
        fields = ["name"]


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = "__all__"


