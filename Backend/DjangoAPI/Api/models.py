from django.db import models

# Create your models here.
class Product(models.Model):
    ProductId = models.AutoField(primary_key=True)
    ProductName = models.CharField(max_length=50)
    Proveedor = models.CharField(max_length=50)
    Existencia = models.CharField(max_length=50)
    DateOfJoining = models.DateField()
    Categoria = models.CharField(max_length=50)
    Descripción = models.CharField(max_length=500)
