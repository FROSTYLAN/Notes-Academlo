from django.shortcuts import render
from rest_framework import generics
# from rest_framework.response import Response
# Create your views here.
from .models import Note
from .serializers import NoteSerializer, NoteSerializerCreate, NoteSerializerCustom, UserSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.models import User

class NoteListAPIView(generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    # Para personalizar el método
    # def list(self, request, *args, **kwargs):
    #    return Response({"message": "Personalizé el error"})

class NoteCreateAPIView(generics.CreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializerCreate

class NoteListCreateAPIView(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NoteRetrieveDestroyAPIView(generics.RetrieveDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NoteRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer



class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    @action(detail=False)
    def all_complete_notes(self, request):
        notes = self.get_queryset()
        notes_complete = notes.filter(status="cp")
        serializer = self.get_serializer_class()
        data = serializer(notes_complete, many=True)
        return Response({"data": data.data})

    @action(detail=False)
    def my_notes_convert(self, request):
        notes = self.get_queryset()
        for note in notes:
            note.title = note.title.upper()
            note.description = note.description.upper()
        serializer = self.get_serializer_class()
        data = serializer(notes, many=True)
        return Response({"data": data.data})

    @action(detail=False)
    def my_notes_convert_custom(self, request):
        notes = self.get_queryset()
        serializer = NoteSerializerCustom
        data = serializer(notes, many=True)
        return Response({"data": data.data})
    

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=True, methods=["get", "post"])
    def my_notes(self, request, pk=None):
        all_notes = Note.objects.filter(owner=pk)
        serializer = NoteSerializer(all_notes, many=True)
        if request.method == "POST":
            request.data["owner"] = pk
            self.serializer_class = NoteSerializer
            self.queryset = Note.objects.all()
            serializer = self.serializer_class
            serializer = serializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({"data": serializer.data})
            else:
                return Response({"Error": serializer.errors})
        return Response({"data": serializer.data})

    
        