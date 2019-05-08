from django.shortcuts import render
from items.models import Item
from items.serializers import ItemSerializer
from rest_framework import generics

class ItemListCreate(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
