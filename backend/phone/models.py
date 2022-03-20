from django.db import models


class Ram(models.Model):
    number = models.IntegerField()

    def __str__(self):
        return f"{self.number}GB"


class Phone(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=511)
    date = models.DateField(null=True, blank=True)
    model = models.CharField(max_length=64, default='A')
    ram = models.ForeignKey(Ram, related_name='phone', on_delete=models.PROTECT, null=True)
    price = models.IntegerField()
    back_camera_features = models.TextField(null=True, blank=True)
    front_camera_features = models.TextField(null=True, blank=True)
    image_stabilization = models.CharField(max_length=64, null=True, blank=True)
    back_camera_video_quality = models.CharField(max_length=64, null=True, blank=True)
    front_camera_video_quality = models.CharField(max_length=64, null=True, blank=True)
    pros = models.TextField()
    cons = models.TextField()

    def __str__(self):
        return f"ID: {self.id} -- Name: {self.name} -- Model:{self.model} -- RAM:{self.ram}"


class PhoneImgUrl(models.Model):
    image = models.ImageField(upload_to='images')
    phone = models.ManyToManyField(Phone, related_name='image_url')

    def __str__(self):
        return f"{self.id} -- {self.image}"


class Usb(models.Model):
    version = models.CharField(max_length=32)
    on_to_go = models.BooleanField(default=True)
    phone = models.ManyToManyField(Phone, related_name='usb')

    def __str__(self):
        return f"version: {self.version} -- OTG: {self.on_to_go}"


class Platform(models.Model):
    core_count = models.TextField()
    cpu_chipset = models.TextField()
    gpu_chipset = models.TextField()
    phone = models.ManyToManyField(Phone, related_name='platform')

    def __str__(self):
        return f"{self.cpu_chipset} {self.gpu_chipset}"


class Sound(models.Model):
    jack = models.BooleanField(default=True)
    speaker_quality = models.CharField(max_length=64, null=True, blank=True)
    phone = models.ManyToManyField(Phone, related_name='sound')

    def __str__(self):
        return f"quality: {self.speaker_quality} -- 3.5mm jack: {self.jack}"


class Storage(models.Model):
    size = models.FloatField(default=64)
    technology = models.CharField(max_length=127)
    phone = models.ManyToManyField(Phone, related_name='storage')

    def __str__(self):
        return f"{self.size} - {self.technology}"


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
    os = models.CharField(max_length=15, choices=OS_CHOICES, default='android')
    version = models.CharField(max_length=64)
    interface = models.CharField(max_length=64, null=True, blank=True)
    phone = models.ManyToManyField(Phone, related_name='operating_system')

    def __str__(self):
        return f"{self.os} {self.version} {self.interface}"


class Brand(models.Model):
    name = models.CharField(max_length=64)
    country = models.CharField(max_length=64)
    phone = models.ManyToManyField(Phone, related_name='brand')

    def __str__(self):
        return f"{self.name}"


class Battery(models.Model):
    TYPE_CHOICES = [
        ('pol', 'Lithium Polymer'),
        ('ion', 'Lithium Ion'),
    ]
    TYPE_CHOICES_WIRELESS_CHARGING = [
        ('Yes', 'Supprot Wireless Charging'),
        ('No', 'not Supprot Wireless Charging'),
        ('Unknown', 'not Specified'),
    ]
    capacity = models.IntegerField()
    type_select = models.CharField(max_length=20, choices=TYPE_CHOICES, default='pol')
    removable = models.BooleanField(default=False)
    wireless_charging = models.CharField(max_length=32, choices=TYPE_CHOICES_WIRELESS_CHARGING, default='No')
    features = models.TextField()
    phone = models.ManyToManyField(Phone, related_name='battery')

    def __str__(self):
        return f"capacity: {self.capacity} -- type: {self.type_select} -- removable: {self.removable} -- wireless_charging: {self.wireless_charging}"


class Camera(models.Model):
    is_front_camera = models.BooleanField(default=False)
    pixel_count = models.IntegerField(null=True, blank=True)
    diaphragm = models.DecimalField(max_digits=4, decimal_places=2, null=True, blank=True)
    pixel_size = models.DecimalField(max_digits=4, decimal_places=3, null=True, blank=True)
    usage = models.CharField(max_length=64, null=True, blank=True)
    features = models.TextField(null=True, blank=True)
    camera_model = models.CharField(max_length=64, null=True, blank=True)
    phone = models.ManyToManyField(Phone, related_name='camera')

    def __str__(self):
        return f"ID: {self.id} -- is_front: {self.is_front_camera} -- pixel: {self.pixel_count} -- diaphragm: {self.diaphragm} -- pixel size: {self.pixel_size} -- usuage: {self.usage}"


class Sensor(models.Model):
    face_id = models.BooleanField(default=False)
    fingerprint = models.BooleanField(default=False)
    fingerprint_type = models.CharField(max_length=64, null=True, blank=True)
    accelerometer = models.BooleanField(default=False)
    gyroscope = models.BooleanField(default=False)
    proximity = models.BooleanField(default=False)
    compass = models.BooleanField(default=False)
    barometer = models.BooleanField(default=False)
    h2o = models.BooleanField(default=False)
    beat_rate = models.BooleanField(default=False)
    temperature = models.BooleanField(default=False)
    laser = models.BooleanField(default=False, null=True, blank=True)
    phone = models.ManyToManyField(Phone, related_name='sensor')

    def __str__(self):
        return f"{self.id} - fingerprint_type: {self.fingerprint_type} - accelerometer: {self.accelerometer} - gyroscope: {self.gyroscope} - proximity: {self.proximity}"


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
    TYPE_CHOICES_PROTECTION = [
        ('Scratch-resistant ceramic glass, oleophobic coating', 'Ceramic Glass + oleophobic'),
        ('Corning Gorilla Glass 6', 'Gorilla 6'),
        ('Corning Gorilla Glass 5', 'Gorilla 5'),
        ('Corning Gorilla Glass 4', 'Gorilla 4'),
        ('Corning Gorilla Glass 3', 'Gorilla 3'),
        ('Corning Gorilla Glass 2', 'Gorilla 2'),
        ('Corning Gorilla Glass 1', 'Gorilla 1'),
        ('Corning Gorilla Glass Victus+', 'Victus+'),
        ('Not Specified', 'Unknown')
    ]
    protection = models.CharField(max_length=64, choices=TYPE_CHOICES_PROTECTION, default='Unknown')
    ip_certificate = models.CharField(max_length=16, null=True, blank=True)
    always_on_display = models.BooleanField(default=False)
    color = models.ManyToManyField(Color, related_name='body')
    phone = models.OneToOneField(Phone, related_name='body', on_delete=models.PROTECT, null=True)

    def __str__(self):
        return f"ID: {self.id} -- Phone: {self.phone}"


class Material(models.Model):
    frame = models.CharField(max_length=32, null=True, blank=True)
    back_glass = models.CharField(max_length=32, null=True, blank=True)
    front_glass = models.CharField(max_length=32, null=True, blank=True)
    body = models.ManyToManyField(Body, related_name='material')

    def __str__(self):
        return f"ID: {self.id} -- Frame: {self.frame} -- back-glass: {self.back_glass} -- front-glass: {self.front_glass}"


class Network(models.Model):
    TYPE_CHOICES_NFC = [
        ('Yes', 'Have NFC'),
        ('No', 'Have not NFC'),
        ('Unknown', 'not Specified'),
    ]
    nfc = models.CharField(max_length=32, choices=TYPE_CHOICES_NFC, default='Yes')
    radio = models.BooleanField(default=True)
    sim_slot = models.CharField(max_length=128)
    TYPE_CHOICES_INFRARED = [
        ('Yes', 'Have Infrared'),
        ('No', 'Have not Infrared'),
        ('Unknown', 'not Specified'),
    ]
    infrared = models.CharField(max_length=32, choices=TYPE_CHOICES_INFRARED, default='No')
    phone = models.OneToOneField(Phone, related_name='network', on_delete=models.PROTECT, null=True)

    def __str__(self):
        return f"{self.id} {self.phone}"


class Gps(models.Model):
    a_gps = models.BooleanField(default=False)
    bds = models.BooleanField(default=False)
    galileo = models.BooleanField(default=False)
    glonass = models.BooleanField(default=False)
    qzss = models.BooleanField(default=False)
    dual_gps = models.BooleanField(default=False)
    network = models.ManyToManyField(Network, related_name='gps')

    def __str__(self):
        return f"ID: {self.id} -- A-GPS: {self.a_gps} -- BDS: {self.bds} -- GALILEO: {self.galileo} -- GLONASS: {self.glonass} -- QZSS: {self.qzss} -- dual_gps: {self.dual_gps}"


class Wifi(models.Model):
    w_80211a = models.BooleanField(default=False)
    w_80211b = models.BooleanField(default=False)
    w_80211g = models.BooleanField(default=False)
    w_80211n = models.BooleanField(default=False)
    w_80211ac = models.BooleanField(default=False)
    w_802116e = models.BooleanField(default=False)
    dual_band = models.BooleanField(default=False)
    hotspot = models.BooleanField(default=False)
    wifi_direct = models.BooleanField(default=False)
    network = models.ManyToManyField(Network, related_name='wifi')

    def __str__(self):
        return f"{self.id} WIFI"


class Bluetooth(models.Model):
    version = models.FloatField(null=True, blank=True)
    a2dp = models.BooleanField(default=False)
    le = models.BooleanField(default=False)
    aptx = models.BooleanField(default=False)
    edr = models.BooleanField(default=False)
    network = models.ManyToManyField(Network, related_name='bluetooth')

    def __str__(self):
        return f"version: {self.version} -- A2DP: {self.a2dp} -- LE :{self.le} -- aptX: {self.aptx} -- EDR: {self.edr}"


class CellNetwork(models.Model):
    c_2g_bands = models.TextField(null=True, blank=True)
    c_3g_bands = models.TextField(null=True, blank=True)
    c_4g_bands = models.TextField(null=True, blank=True)
    c_5g_bands = models.TextField(null=True, blank=True)
    network = models.ManyToManyField(Network, related_name='cell_network')

    def __str__(self):
        return f"{self.id}"
