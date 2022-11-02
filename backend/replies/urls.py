from django.urls import path, include
from replies import views

urlpatterns = [path('<int:comment>/', views.find_replies),

]