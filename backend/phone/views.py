from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from . import models
from . import serialaizers
from . import filtersets


class PhoneViewSet(viewsets.ModelViewSet):
    queryset = models.Phone.objects.all()
    serializer_class = serialaizers.PhoneSerializers
    filter_backends = [DjangoFilterBackend]
    filterset_fields = filtersets.fields
