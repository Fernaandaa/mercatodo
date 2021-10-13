from rest_framework import serializers
from Api.models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product 
        fields=('ProductId','ProductName','Proveedor','Existencia','DateOfJoining','Categoria','Descripción')