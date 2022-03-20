from rest_framework import viewsets
from . import models
from . import serialaizers


class PhoneViewSet(viewsets.ModelViewSet):
    queryset = models.Phone.objects.all()
    serializer_class = serialaizers.PhoneSerializers
    filterset_fields = ['name', 'id', 'ram__number', "usb__version"]
