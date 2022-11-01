from django.urls import path, include
from comments import views


urlpatterns = [path('<str:video_id>/', views.get_all_comments),
path('', views.comments_auth),
]