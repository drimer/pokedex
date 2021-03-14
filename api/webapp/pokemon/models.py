from enum import Enum

from django.db import models


class PokemonType(Enum):
    BUG = 1
    DARK = 2
    DRAGON = 3
    GROUND = 4
    ELECTRIC = 5
    FAIRY = 6
    FIGHTING = 7
    FIRE = 8
    FLYING = 9
    GHOST = 10
    GRASS = 11
    ICE = 12
    NORMAL = 13
    POISON = 14
    PSYCHIC = 15
    ROCK = 16
    STEEL = 17
    WATER = 18


class Pokemon(models.Model):
    number = models.IntegerField(unique=True, null=False)
    name = models.CharField(unique=True, max_length=100)
    primaryType = models.IntegerField(
        choices=[
            (pokemonType.value, pokemonType.name) for pokemonType in list(PokemonType)
        ]
    )
    secondaryType = models.IntegerField(
        choices=[
            (pokemonType.value, pokemonType.name) for pokemonType in list(PokemonType)
        ],
        null=True,
        blank=True,
    )
