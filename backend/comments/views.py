from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request, video_id):
    print(request)
    comments = Comment.objects.filter(video_id=video_id)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


#WITH TOKEN
# @api_view(["POST", "PUT"])
# def