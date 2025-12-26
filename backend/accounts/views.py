from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from cards.serializers import UserSerializer 

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_my_profile(request):
    """Возвращает данные текущего залогиненного пользователя"""
    serializer = UserSerializer(request.user)
    return Response(serializer.data)