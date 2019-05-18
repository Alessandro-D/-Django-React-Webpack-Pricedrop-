"""
Item Models
"""
from django.db import models

class Item(models.Model):
    """The main Item model
    """
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=2083)
    original_price = models.DecimalField(max_digits=8, decimal_places=2)
    current_price = models.DecimalField(max_digits=8, decimal_places=2)
    date_added = models.DateTimeField(auto_now_add=True)
    price_div = models.CharField(max_length=500, default="default")
