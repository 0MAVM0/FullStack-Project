from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import *


class NoAuthApiView(APIView):
    permission_classes = [AllowAny]

class AuthApiView(NoAuthApiView):
    permission_classes = [IsAuthenticated]


def get_wishlist(request):
    wishlist_objs = Wishlist.objects.filter(owner=request.user)
    if wishlist_objs.exists():
        return wishlist_objs[0]
    else:
        return None

def set_wishlist(request, furniture_id: int):
    wishlist_objs = Wishlist.objects.filter(owner=request.user)

    if wishlist_objs:
        wishlist = wishlist_objs[0]
    else:
        wishlist = Wishlist.objects.create(owner=request.user)

    furniture = Furniture.objects.get(pk=furniture_id)
    wishlist.furnitures.add(furniture)

def del_furniture_from_wishlist(request, furniture_id: int):
    if wishlist := Wishlist.objects.filter(owner=request.user):
        furniture = Furniture.objects.get(pk=furniture_id)
        wishlist.furnitures.remove(furniture)