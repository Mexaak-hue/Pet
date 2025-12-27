from django.contrib import admin
from django.urls import path, include  # <-- УБЕДИСЬ, ЧТО ЭТА СТРОКА ЕСТЬ
from cards.urls import router as cards_router
from accounts.views import login_view, get_my_profile, logout_view


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(cards_router.urls)), 
    path('api/objects/', include(cards_router.urls)), 
    path('api/login/', login_view, name='login'),
    path('api/user/me/', get_my_profile, name='user_me'),
    path('api/users/', get_my_profile, name='users_list'), 
    path('api/logout/', logout_view, name='logout'),
]