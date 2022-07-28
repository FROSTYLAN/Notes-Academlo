from django.shortcuts import render
from .serializers import UserSerializer, CreateUserSerializer
from .models import CustomUser
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
# Create your views here.

class CustomUserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action == "create":
            return CreateUserSerializer
        else: 
            return UserSerializer

    def get_permissions(self):
        if self.action == "create":
            self.permission_classes = [AllowAny]
            return [permission() for permission in self.permission_classes]
        else:
            self.permission_classes = [IsAuthenticated]
            return [permission() for permission in self.permission_classes]