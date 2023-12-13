from backend.usecases import *
from rest_framework.status import *
from rest_framework.response import Response

from .models import *
from .serializers import *


class FurnitureList(NoAuthApiView):
    def get(self, request, *args, **kwargs):
        furniture = Furniture.objects.all()
        serializer = FurnitureSerializer(furniture, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request):
        serializer = FurnitureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

class FurnitureDetails(NoAuthApiView):
    def get(self, request, pk):
        furniture = Furniture.objects.get(pk=pk)
        serializer = FurnitureSerializer(furniture)
        return Response(serializer.data, status=HTTP_200_OK)


    def put(self, request, pk):
        furniture = Furniture.objects.get(pk=pk)
        serializer = FurnitureSerializer(furniture, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


    def delete(self, request, pk):
        furniture = Furniture.objects.get(pk=pk)
        furniture.delete()
        return Response(status=HTTP_204_NO_CONTENT)