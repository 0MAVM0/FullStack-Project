from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
#     TokenVerifyView,
#     TokenBlacklistView
# )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('furniture/', include('furniture.urls')),

    path('api/users/', include('users.urls')),
    # path('api/token/create/', TokenObtainPairView.as_view(),
    #                                             name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), 
    #                                             name='token_refresh'),
    # path('api/token/verify/', TokenVerifyView.as_view(), 
    #                                             name='token_verify'),
    # path('api/token/blacklist/', TokenBlacklistView.as_view(), 
    #                                             name='token_blacklist'),
]

urlpatterns += static(
    settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT
)
urlpatterns += static(
    settings.STATIC_URL,
    document_root=settings.STATIC_ROOT
)
