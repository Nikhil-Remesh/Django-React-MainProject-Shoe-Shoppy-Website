from django.shortcuts import render
from rest_framework import viewsets
from .models import brand
from .serializers import Brandserializer
# Create your views here.

class BrandViewSet(viewsets.ModelViewSet):
        queryset= brand.objects.all()
        serializer_class= Brandserializer