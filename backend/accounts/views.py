from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from django.contrib.auth import logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


class UnsafeSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return


@csrf_exempt
def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Logged out successfully'}, status=200)
@api_view(['POST'])
@authentication_classes([UnsafeSessionAuthentication])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    
    if user:
        login(request, user)
        return Response({
            "status": "ok", 
            "role": "admin" if user.is_superuser else "user"
        })
    return Response({"error": "Invalid credentials"}, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_my_profile(request):
    user = request.user
    return Response([{
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "role": "Администратор" if user.is_superuser else "Пользователь"
    }])