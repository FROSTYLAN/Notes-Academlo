from distutils import core
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# Create your views here.
from .models import Food, Pet, Dessert
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

def hello_world(request):
    hello = "Hola Gen 11"
    html = f"<html><h1>{hello}</h1></html>"
    return HttpResponse(html)

@api_view(["GET", "POST"])
def hello_world_rest(request):
    if request.method == "POST":
        return Response({}, status=status.HTTP_201_CREATED)
    return Response({
        "message": "Hello world"
    }, status=status.HTTP_200_OK)

@csrf_exempt
def all_fruits(request):
    if request.method == "GET":
        food = Food.objects.all()
        names = food.values_list("name", flat=True)
        result_list_name = []
        for name in names:
            text = f"<li>{name}</li>"
            result_list_name.append(text)
        result_list_string = ""
        for i in result_list_name:
            result_list_string += i
        result_list = f"<ul>{result_list_string}</ul>"
        return HttpResponse(result_list)
    if request.method == 'POST':
        data  = json.loads(request.body)
        nueva = Food(
            name=data.get("name"),
            description=data["description"],
            quantity=data["quantity"]
        )
        nueva.save()
        last_fruit = Food.objects.all().last()
        return JsonResponse({
            "name": last_fruit.name,
            'uuid': last_fruit.uuid
        })

def all_pets(request):
    pet = Pet.objects.all()
    names = pet.values_list()
    result_list_string=""
    for i in names:
        result_list_string += f"<li>{i[1]} - {i[2]} - {i[3]} </li>"
    result_list = f"<ul>{result_list_string}</ul>"
    return HttpResponse(result_list)

def all_desserts(request):
    dessert = Dessert.objects.all()
    names = dessert.values_list()
    result_list_string=""
    for i in names:
        result_list_string += f"<li>{i[1]} - {i[2]} - {i[3]}</li>"
    result_list = f"<ul>{result_list_string}</ul>"
    return HttpResponse(result_list)



from rest_framework.views import APIView

class ListFruits(APIView):
    def get(self, request):
        try:
            food = Food.objects.all()
            values_food = food.values()
            all_food = []
            for f in values_food:
                all_food.append(f)
            return Response({
                "data": {
                    "fruits": all_food
                }
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({
                "error": str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        print(request.data)
        return Response({"data: "})