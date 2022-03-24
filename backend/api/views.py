from rest_framework import viewsets
from django_filters.rest_framework import FilterSet
from django.contrib.auth import get_user_model
from . import models, serializers
from . import filtersets


class UserFilter(FilterSet):
    class Meta:
        model = get_user_model()
        exclude = ['avatar']


class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = serializers.UsersSerializer
    filterset_class = UserFilter


class PostViewSet(viewsets.ModelViewSet):
    queryset = models.Post.objects.all()
    serializer_class = serializers.PostSerializer
    filterset_fields = filtersets.fields


class CommentViewSet(viewsets.ModelViewSet):
    queryset = models.Comment.objects.all()
    serializer_class = serializers.CommentSerializer


class RateViewSet(viewsets.ModelViewSet):
    queryset = models.Rate
    serializer_class = serializers.RateSerializer
