from django.shortcuts import render
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Api.models import Product
from Api.serializers import ProductSerializer
# Create your views here.

@csrf_exempt
def productApi(request,id=0):
    if request.method=='GET':
        product = Product.objects.all()
        prodcut_serializer=ProductSerializer(product,many=True)
        return JsonResponse(prodcut_serializer.data,safe=False)
    elif request.method=='POST':
        product_data=JSONParser().parse(request)
        prodcut_serializer=ProductSerializer(data=product_data)
        if prodcut_serializer.is_valid():
            prodcut_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        product_data=JSONParser().parse(request)
        product=Product.objects.get(ProductId=product_data['ProductId'])
        prodcut_serializer=ProductSerializer(product,data=product_data)
        if prodcut_serializer.is_valid():
            prodcut_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        product=Product.objects.get(ProductId=id)
        product.delete()
        return JsonResponse("Deleted Successfully",safe=False)

