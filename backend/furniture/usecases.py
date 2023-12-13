from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated


class NoAuthApiView(APIView):
    permission_classes = [AllowAny]

class AuthApiView(NoAuthApiView):
    permission_classes = [IsAuthenticated]
