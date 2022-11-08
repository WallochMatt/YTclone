from .models import Comment
from rest_framework import serializers

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'user_id', 'video_id', 'text', 'likes', 'dislikes']
        depth = 1
    