from django.urls import path, include
from replies import views

urlpatterns = [path('<int:comment>/', views.get_all_replies),

]