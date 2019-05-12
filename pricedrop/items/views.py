"""views.py"""
from django.shortcuts import render
from rest_framework import generics
from items.models import Item
from items.serializers import ItemSerializer

class ItemListCreate(generics.ListCreateAPIView):
    """Item API View"""
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
