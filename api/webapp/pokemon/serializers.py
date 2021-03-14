from rest_framework import serializers

from .models import Pokemon, PokemonType


class PokemonTypeSerializer(serializers.Field):
    def to_representation(self, value):
        return PokemonType(value).name


class PokemonSerializer(serializers.HyperlinkedModelSerializer):
    primaryType = PokemonTypeSerializer()
    secondaryType = PokemonTypeSerializer()

    class Meta:
        model = Pokemon
        fields = ('number', 'name', 'primaryType', 'secondaryType')
