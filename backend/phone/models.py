from django.db import models


class Ram(models.Model):
    number = models.CharField(max_length=10)

    def __str__(self):
        return self.number


class Phone(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateTimeField(null=True)
    price = models.IntegerField()
    ram = models.ManyToManyField(Ram, related_name='phone')
    usb = models.CharField(max_length=255)
    cons = models.TextField()
    pros = models.TextField()
    description = models.CharField(max_length=511)

    def __str__(self):
        return f"{self.id} {self.name}"


class PhoneImgUrl(models.Model):
    image = models.ImageField(upload_to='images')
    phone = models.ForeignKey(Phone, on_delete=models.CASCADE, related_name='image_url')

    def __str__(self):
        return self.phone
