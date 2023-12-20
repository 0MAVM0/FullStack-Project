from .models import Furniture
from rest_framework import serializers


class FurnitureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Furniture
        fields = ["name", "description", "price", "color", "image", "category", "quantity"]

class FurnitureSerializerForWishlist(serializers.ModelSerializer):
    class Meta:
        model = Furniture
        fields = ["id", "name", "description", "price", "color", "image", "category", "quantity"]
