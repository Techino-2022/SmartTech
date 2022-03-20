from rest_framework import routers
from .views import PhoneViewSet

router = routers.SimpleRouter()
router.register(r'phones', PhoneViewSet)

urlpatterns = router.urls
