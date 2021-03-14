from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ModelViewSet

from .models import Pokemon
from .serializers import PokemonSerializer


class PokemonsGetEndpoint(ModelViewSet):
    serializer_class = PokemonSerializer
    # queryset = Pokemon.objects.all().order_by('number')

    def get_queryset(self):
        queryset = Pokemon.objects.all()
        qs_name = self.request.query_params.get('name')
        if qs_name:
            queryset = queryset.filter(name__icontains=qs_name).order_by('number')

        return queryset
