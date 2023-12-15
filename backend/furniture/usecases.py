from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Wishlist


class NoAuthApiView(APIView):
    permission_classes = [AllowAny]

class AuthApiView(NoAuthApiView):
    permission_classes = [IsAuthenticated]


def get_wishlist(request):
    wishlist_objs = Wishlist.objects.filter(owner=request.user)
    return wishlist_objs[0]
