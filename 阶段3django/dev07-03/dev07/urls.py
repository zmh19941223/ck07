"""dev07 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
from django.urls import path, include, re_path

# from projects.views import index, get_project
from projects import views

# 一、什么是路由？
# 1.定义
#    指url与后端视图之间的一一映射关系

# 2.添加
#   1）需要在全局路由文件（urls.py），urlpatterns列表中添加路由条目
#   2）urlpatterns列表条目总数就是路由总数
#   3）urlpatterns列表从上到下进行匹配（路由寻址）
#   4）urlpatterns列表中条目一旦匹配成功，就会终止往下匹配
#   5）urlpatterns列表中条目匹配不成功，就会一直往下匹配
#   6）如果全部条目都匹配不成功，那么会抛出404异常（404页面）

# 3.path函数
#   1）用于定义路由条目
#   2）第一个参数为url路径参数（字符串），路径最前面不添加/，路径最后面需要添加/
#   3）第二个参数为视图函数或者类视图，如果添加的视图函数，无需使用()调用
#   4）如果第二个参数为include，那么会继续进入到子路由中匹配，子路由的匹配规则与全局路由匹配规则一致
#   5）第一个参数可以使用类型转化器
#       <类型转化器:参数名称>
#       默认的类型转化器：int、str、slug、uuid
#       参数名称，在调用视图时，会自动传递给视图函数，需要使用同名的参数接收

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('index/', index),
    # path('index/', views.index),
    # path('get_project/', views.get_project),
    # path('get_project1/', views.get_project1),
    # path('get_project/2/', views.get_project2),

    # path('projects/<int:pk>/', views.get_projects),
    # re_path(r'^projects/(?P<pk>\w{3})/$', views.get_projects),
    # re_path(r'^projects/(?P<pk>\d+)/$', views.get_projects),
    # path('project/put/', views.index),
    # path('project/', include('projects.urls')),
    path('', include('projects.urls')),
]
