"""Frontend Views"""
from django.shortcuts import render

def index(request):
    """simple function view to return the template"""
    return render(request, 'frontend/index.html')
