from rest_framework import serializers
from .models import brand


class Brandserializer(serializers.ModelSerializer):
    class Meta:
        model = brand
        fields= '__all__'