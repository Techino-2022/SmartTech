from django.db import models


class Ram(models.Model):
    number = models.IntegerField()

    def __str__(self):
        return f"{self.number}"


class Phone(models.Model):
    pros = models.TextField()
    cons = models.TextField()
    price = models.IntegerField()
    usb = models.CharField(max_length=255)
    date = models.DateTimeField(null=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=511)
    ram = models.ManyToManyField(Ram, related_name='phone')

    def __str__(self):
        return f"{self.id} {self.name}"


class PhoneImgUrl(models.Model):
    image = models.ImageField(upload_to='images')
    phone = models.ForeignKey(Phone, on_delete=models.CASCADE, related_name='image_url')

    def __str__(self):
        return self.phone


class Platform(models.Model):
    core_count = models.CharField(max_length=127)
    cpu_chipset = models.CharField(max_length=127)
    gpu_chipset = models.CharField(max_length=127)
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, related_name='platform')

    def __str__(self):
        return f"{self.phone}={self.cpu_chipset}"


class Sound(models.Model):
    jack = models.BooleanField(default=True)
    speaker_quality = models.CharField(max_length=64)
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, related_name='sound')

    def __str__(self):
        return f"{self.phone} sound"


class Storage(models.Model):
    technology = models.CharField(max_length=127)
    size = models.ManyToManyField(Ram, related_name='storage')
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, related_name='storage')

    def __str__(self):
        return f"{self.phone} storage"


class OperatingSystem(models.Model):
    OS_CHOICES = [
        ('ios', 'IOS'),
        ('android', 'Android'),
        ('bada', 'Bada'),
        ('tizen', 'Tizen'),
        ('symbian', 'Symbian'),
        ('blackberry ', 'Blackberry'),
        ('windows phone', 'Windows'),
    ]
    version = models.CharField(max_length=64)
    os = models.CharField(max_length=15, choices=OS_CHOICES, default='android')
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, related_name='operating_system')

    def __str__(self):
        return f"{self.phone}-{self.os}"


class Brand(models.Model):
    name = models.CharField(max_length=64)
    country = models.CharField(max_length=64)
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, related_name='brand')

    def __str__(self):
        return f"{self.phone}-{self.name}"


class Battery(models.Model):
    TYPE_CHOICES = [
        ('pol', 'Lithium Polymer'),
        ('ion', 'Lithium Ion'),
    ]
    features = models.TextField()
    capacity = models.IntegerField()
    removable = models.BooleanField(default=False)
    wireless_charging = models.BooleanField(default=False)
    type_select = models.CharField(max_length=20, choices=TYPE_CHOICES, default='pol')
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, related_name='battery')

    def __str__(self):
        return f"{self.phone}-{self.type_select}"


class Camera(models.Model):
    features = models.TextField()
    pixel_count = models.IntegerField()
    laser = models.BooleanField(default=False)
    camera_model = models.CharField(max_length=64)
    video_quality = models.CharField(max_length=64)
    image_stabilization = models.CharField(max_length=64)
    pixel_size = models.DecimalField(max_digits=4, decimal_places=3)
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, related_name='camera')

    def __str__(self):
        return f"{self.phone}-{self.camera_model}"


class Sensor(models.Model):
    h2o = models.BooleanField(default=False)
    compass = models.BooleanField(default=False)
    gyroscope = models.BooleanField(default=False)
    beat_rate = models.BooleanField(default=False)
    proximity = models.BooleanField(default=False)
    barometer = models.BooleanField(default=False)
    fingerprint = models.BooleanField(default=False)
    temperature = models.BooleanField(default=False)
    accelerometer = models.BooleanField(default=False)
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, related_name='sensor')

    def __str__(self):
        return f"{self.phone} sensor"


class Color(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name


class Body(models.Model):
    size = models.FloatField()
    weight = models.IntegerField()
    display_features = models.TextField()
    display = models.CharField(max_length=64)
    resolution = models.CharField(max_length=32)
    protection = models.CharField(max_length=32)
    ip_certificate = models.CharField(max_length=16)
    always_on_display = models.BooleanField(default=False)
    color = models.ManyToManyField(Color, related_name='body')
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, related_name='body')

    def __str__(self):
        return f"{self.id} {self.phone} body"


class Material(models.Model):
    frame = models.CharField(max_length=32)
    back_glass = models.CharField(max_length=32)
    front_glass = models.CharField(max_length=32)
    body = models.OneToOneField(Body, on_delete=models.CASCADE, related_name='material')

    def __str__(self):
        return f"{self.body} material"


class Network(models.Model):
    nfc = models.BooleanField(default=False)
    radio = models.BooleanField(default=True)
    sim_slot = models.CharField(max_length=32)
    infrared = models.BooleanField(default=False)
    phone = models.OneToOneField(Phone, on_delete=models.CASCADE, related_name='network')

    def __str__(self):
        return f"{self.id} {self.phone} network"


class Gps(models.Model):
    bds = models.BooleanField(default=False)
    galileo = models.BooleanField(default=False)
    glonass = models.BooleanField(default=False)
    dual_gps = models.BooleanField(default=False)
    network = models.OneToOneField(Network, on_delete=models.CASCADE, related_name='gps')

    def __str__(self):
        return f"{self.network} gps"


class Wifi(models.Model):
    hotspot = models.BooleanField(default=False)
    w_80211a = models.BooleanField(default=False)
    w_80211b = models.BooleanField(default=False)
    w_80211g = models.BooleanField(default=False)
    w_80211n = models.BooleanField(default=False)
    w_80211ac = models.BooleanField(default=False)
    w_802116e = models.BooleanField(default=False)
    wifi_direct = models.BooleanField(default=False)
    network = models.OneToOneField(Network, on_delete=models.CASCADE, related_name='wifi')

    def __str__(self):
        return f"{self.network} wifi"


class Bluetooth(models.Model):
    le = models.BooleanField(default=False)
    edr = models.BooleanField(default=False)
    a2dp = models.BooleanField(default=False)
    aptx = models.BooleanField(default=False)
    network = models.OneToOneField(Network, on_delete=models.CASCADE, related_name='bluetooth')

    def __str__(self):
        return f"{self.network} bluetooth"


class CellNetwork(models.Model):
    c_2g_bands = models.TextField()
    c_3g_bands = models.TextField()
    c_4g_bands = models.TextField()
    c_5g_bands = models.TextField()
    network = models.OneToOneField(Network, on_delete=models.CASCADE, related_name='cell_network')

    def __str__(self):
        return f"{self.network} cell_network"
