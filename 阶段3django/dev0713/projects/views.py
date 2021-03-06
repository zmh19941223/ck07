from django.http import JsonResponse
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework import status
from rest_framework import filters
from rest_framework import mixins
from rest_framework import generics
from rest_framework import viewsets

from .models import Projects
from .serializers import ProjectSerilizer, ProjectModelSerializer
from utils.pagination import PageNumberPagination


# class ListCreateAPIView(
#     mixins.CreateModelMixin,
#     mixins.ListModelMixin,
#     GenericAPIView):
#
#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)
#
#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)


# class ProjectsView(GenericAPIView):
# class ProjectsView(
#     mixins.CreateModelMixin,
#     mixins.ListModelMixin,
#     GenericAPIView):
# class ProjectsView(ListCreateAPIView):
class ProjectsView(generics.ListCreateAPIView):
    """
    a.直接继承Mixin拓展类，拓展类只提供了action方法
    b.action方法有哪些呢？
        list            -->  获取列表数据
        retrieve        --> 获取详情数据
        create          --> 创建数据
        update          --> 更新数据（完整）
        partial_update  --> 更新数据（部分）
        destroy         --> 删除数据
    c.类视图往往只能识别如下方法？
        get   -->  list
        get   -->  retrieve
        post  -->  create
        put   -->  update
        patch -->  partial_update
        delete -->  destroy
    d.为了进一步优化代码，需要使用具体的通用视图XXXAPIView
    """
    queryset = Projects.objects.all()
    serializer_class = ProjectModelSerializer

    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['=name', '=leader', '=id']
    ordering_fields = ['id', 'name', 'leader']

    # 可以在类视图中指定分页引擎类，优先级高于全局
    pagination_class = PageNumberPagination

    # def get(self, request, *args, **kwargs):
    #     # queryset = self.filter_queryset(self.get_queryset())
    #     #
    #     # # 3、调用paginate_queryset方法对查询集对象进行分页
    #     # page = self.paginate_queryset(queryset)
    #     # if page is not None:
    #     #     serializer = self.get_serializer(instance=page, many=True)
    #     #     return self.get_paginated_response(serializer.data)
    #     # serializer = self.get_serializer(instance=queryset, many=True)
    #     # return Response(serializer.data, status=status.HTTP_200_OK)
    #
    #     # a.python中支持多重继承，一个类可以同时继承多个父类
    #     # b.类中的方法和属性是按照__mro__所指定的继承顺序进行搜索
    #     # print(ProjectsView.__mro__)
    #     return self.list(request, *args, **kwargs)

    # def post(self, request, *args, **kwargs):
    #     # serializer = self.get_serializer(data=request.data)
    #     # serializer.is_valid(raise_exception=True)
    #     # serializer.save()
    #     # return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return self.create(request, *args, **kwargs)



# class ProjectsDetailView(
#     mixins.RetrieveModelMixin,
#     mixins.UpdateModelMixin,
#     mixins.DestroyModelMixin,
#     GenericAPIView):
class ProjectsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectSerilizer

    # def get(self, request, *args, **kwargs):
    #     # instance = self.get_object()
    #     # serializer = self.get_serializer(instance=instance)
    #     # return Response(serializer.data, status=status.HTTP_200_OK)
    #     return self.retrieve(request, *args, **kwargs)
    #
    # def put(self, request, *args, **kwargs):
    #     # instance = self.get_object()
    #     # serializer = self.get_serializer(instance=instance, data=request.data)
    #     # serializer.is_valid(raise_exception=True)
    #     # serializer.save()
    #     # return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return self.update(request, *args, **kwargs)
    #
    # def delete(self, request, *args, **kwargs):
    #     # instance = self.get_object()
    #     # instance.delete()
    #     # return Response(status=status.HTTP_204_NO_CONTENT)
    #     return self.destroy(request, *args, **kwargs)


# a.可以继承视图集父类ViewSet
# b.在定义url路由条目时，支持给as_view传递字典参数（请求方法名与具体调用的action方法名的一一对应关系）
# c.ViewSet继承了ViewSetMixin, views.APIView
# d.具备APIView的所有功能
# e.继承ViewSetMixin，所有具备持给as_view传递字典参数（请求方法名与具体调用的action方法名的一一对应关系）
# class ProjectViewSet(viewsets.ViewSet):
# class ProjectViewSet(
#     mixins.ListModelMixin,
#     mixins.RetrieveModelMixin,
#     mixins.CreateModelMixin,
#     mixins.UpdateModelMixin,
#     mixins.DestroyModelMixin,
#     viewsets.ViewSet):

# class ProjectViewSet(
#         mixins.ListModelMixin,
#         mixins.RetrieveModelMixin,
#         mixins.CreateModelMixin,
#         mixins.UpdateModelMixin,
#         mixins.DestroyModelMixin,
#         viewsets.GenericViewSet):
class ProjectViewSet(viewsets.ModelViewSet):
    """
    定义视图集
    """

    # def list(self, request, *args, **kwargs):
    #     pass

    # def retrieve(self, request, *args, **kwargs):
    #     pass

    # def create(self, request, *args, **kwargs):
    #     pass

    # def update(self, request, *args, **kwargs):
    #     pass
    #
    # def partial_update(self, request, *args, **kwargs):
    #     pass
    #
    # def destroy(self, request, *args, **kwargs):
    #     pass

    queryset = Projects.objects.all()
    serializer_class = ProjectSerilizer
