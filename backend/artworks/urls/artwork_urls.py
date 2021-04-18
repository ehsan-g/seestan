from django.urls import path
from artworks.views import artwork_views as views


urlpatterns = [
    path('', views.fetchArtWorks, name='artWorks'),
    path('delete/', views.deleteTheArtwork, name='artwork-delete'),
    path('create/', views.createTheArtWork, name='artwork-create'),
    path('update/<int:pk>/', views.updateTheArtwork, name='artwork-update'),
    path('<str:pk>/', views.fetchTheArtWork, name='theArtWork'),
]
