from rest_framework import serializers
from . import models


class RamSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Ram
        fields = '__all__'


class PhoneImgUrlSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.PhoneImgUrl
        fields = ['image']


class UsbSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Usb
        exclude = ['phone']


class PlatformSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Platform
        exclude = ['phone']


class SoundSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Sound
        exclude = ['phone']


class StorageSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Storage
        exclude = ['phone']


class OperatingSystemSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.OperatingSystem
        exclude = ['phone']


class BrandSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Brand
        exclude = ['phone']


class BatterySerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Battery
        exclude = ['phone']


class CameraSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Camera
        exclude = ['phone']


class SensorSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Sensor
        exclude = ['phone']


class MaterialSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Material
        exclude = ['body']


class BodySerializers(serializers.ModelSerializer):
    material = MaterialSerializers(many=True)

    class Meta:
        model = models.Body
        exclude = ['phone']


class GpsSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Gps
        exclude = ['network']


class WifiSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Wifi
        exclude = ['network']


class BluetoothSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Bluetooth
        exclude = ['network']


class CellNetworkSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.CellNetwork
        exclude = ['network']


class NetworkSerializers(serializers.ModelSerializer):
    gps = GpsSerializers(many=True)
    wifi = WifiSerializers(many=True)
    bluetooth = BluetoothSerializers(many=True)
    cell_network = CellNetworkSerializers(many=True)

    class Meta:
        model = models.Network
        exclude = ['phone']


class PhoneSerializers(serializers.ModelSerializer):
    image_url = PhoneImgUrlSerializers(many=True)
    usb = UsbSerializers(many=True)
    platform = PlatformSerializers(many=True)
    sound = SoundSerializers(many=True)
    storage = StorageSerializers(many=True)
    operating_system = OperatingSystemSerializers(many=True)
    brand = BrandSerializers(many=True)
    battery = BatterySerializers(many=True)
    camera = CameraSerializers(many=True)
    sensor = SensorSerializers(many=True)
    body = BodySerializers()
    network = NetworkSerializers()

    class Meta:
        model = models.Phone
        fields = '__all__'
