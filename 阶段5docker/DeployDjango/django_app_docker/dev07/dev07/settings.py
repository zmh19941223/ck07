"""
Django settings for dev07 project.

Generated by 'django-admin startproject' using Django 3.2.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""
import os
import sys
from pathlib import Path
import datetime

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# apps绝对路径
sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-oay(@i%k!r6lp*0s#*s=9-&%h7_37$5vdl3#x_nog=zksp4us4'

# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = False

# 指定允许使用哪些地址访问当前系统
ALLOWED_HOSTS = ['*']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
    'drf_yasg',

    'projects',
    # 'projects.apps.ProjectsConfig',
    'interfaces',
    'users',
    'testcases',
    'configures',
    'reports',
    'debugtalks',
    'testsuites',
    'envs',
    'summary',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    # 需要添加在CommonMiddleware中间件之前
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'dev07.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'dev07.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

# 指定在全局配置文件settings.py中的DATABASES字典里配置需要连接的数据库信息
DATABASES = {
    # 指定数据库的别名/标签
    # 指定的是django默认使用的数据库
    'default': {
        # 指定当前使用的数据库引擎
        # django.db.backends.mysql、oracle、sqlite3
        # 'ENGINE': 'django.db.backends.sqlite3',
        'ENGINE': 'django.db.backends.mysql',
        # 指定数据库名称，如果使用的是sqlite3，需要指定sqlite3文件的绝对路径
        # 'NAME': BASE_DIR / 'db.sqlite3',
        'NAME': 'mydb',
        'USER': 'root',
        'PASSWORD': '123456',
        'PORT': 3306,
        'HOST': '127.0.0.1'
    }

}

# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'zh-hans'

TIME_ZONE = 'Asia/Shanghai'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# DRF中的解析器（类）
# 1、可以根据请求头中的Content-Type来自动解析参数，使用统一的data属性来获取即可
# 2、默认JSONParser、FormParser、MultiPartParser三个解析器类
# 3、可以在全局配置文件（settings.py）中修改DRF全局参数，把REST_FRAMEWORK作为名称
REST_FRAMEWORK = {
    # 'DEFAULT_PARSER_CLASSES': [
    #     'rest_framework.parsers.JSONParser',
    #     'rest_framework.parsers.FormParser',
    #     'rest_framework.parsers.MultiPartParser'
    # ],

    # DRF中的渲染器（类）
    # 1、可以根据请求头中的Accept参数来自动渲染前端需要的数据格式
    # 2、默认的渲染器为JSONRenderer、BrowsableAPIRenderer
    # 3、如果前端请求头未指定Accept参数或者指定为application/json，那么会自动返回json格式的数据
    # 4、如果前端请求头指定Accept参数为text/html，那么默认会返回可浏览的api页面（api进行管理）
    # 5、可以在DEFAULT_RENDERER_CLASSES中指定需要使用的渲染器
    # 'DEFAULT_RENDERER_CLASSES': [
    #     'rest_framework.renderers.JSONRenderer',
    #     'rest_framework.renderers.BrowsableAPIRenderer',
    # ],

    # 1、在全局DEFAULT_FILTER_BACKENDS指定使用的过滤引擎类（SearchFilter为搜索引擎类）
    'DEFAULT_FILTER_BACKENDS': ['rest_framework.filters.SearchFilter',
                                'rest_framework.filters.OrderingFilter'],
    # 可以在全局使用SEARCH_PARAM修改前端过滤查询字符串参数名称（默认为search）
    # 'SEARCH_PARAM': 'se',

    # 1、在全局settings.py文件，DEFAULT_PAGINATION_CLASS上指定分页引擎类PageNumberPagination
    # 'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'DEFAULT_PAGINATION_CLASS': 'utils.pagination.PageNumberPagination',
    # 2、指定每一页显示的数据条数
    'PAGE_SIZE': 3,

    # 指定用于支持coreapi的Schema
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',

    # 指定使用的认证类
    # a.在全局指定默认的认证类（指定认证方式）
    'DEFAULT_AUTHENTICATION_CLASSES': [
        # 1）指定使用JWT TOKEN认证类
        # 2）在全局路由表中添加obtain_jwt_token路由（可以使用用户名和密码进行认证）
        # 3）认证通过之后，在响应体中会返回token值
        # 4）将token值设置请求头参数，key为Authorization，value为JWT token值
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        # b.Session会话认证
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication'
    ],
    # 指定使用的权限类
    # a.在全局指定默认的权限类（当认证通过之后，可以获取何种权限）
    # 'DEFAULT_PERMISSION_CLASSES': [
        # AllowAny不管是否有认证成功，都能获取所有权限
        # IsAdminUser管理员（管理员需要登录）具备所有权限
        # IsAuthenticated只要登录，就具备所有权限
        # IsAuthenticatedOrReadOnly，如果登录了就具备所有权限，不登录只具备读取数据的权限
    #     'rest_framework.permissions.IsAuthenticated',
    # ],
}

LOGGING = {
    # 指定日志版本
    'version': 1,
    # 指定是否禁用其他日志，False为不禁用
    'disable_existing_loggers': False,
    # 定义日志输出格式
    'formatters': {
        # 简单格式
        'simple': {
            'format': '%(asctime)s - [%(levelname)s] - [msg]%(message)s'
        },
        # 复杂格式
        'verbose': {
            'format': '%(asctime)s - [%(levelname)s] - %(name)s - [msg]%(message)s - [%(filename)s:%(lineno)d ]'
        },
    },
    'filters': {
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    # 指定日志输出渠道（日志输出的地方）
    'handlers': {
        # 指定在console控制台（终端）的日志配置行李箱
        'console': {
            # 指定日志记录等级
            'level': 'DEBUG',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
            'formatter': 'simple'
        },
        # 指定在日志文件的配置信息
        'file': {
            'level': 'INFO',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': os.path.join(BASE_DIR, "logs/mytest.log"),  # 日志文件的位置
            'maxBytes': 100 * 1024 * 1024,
            'backupCount': 10,
            'formatter': 'verbose',
            'encoding': 'utf-8'
        },
    },
    # 定义日志器
    'loggers': {
        # 指定日志器的名称
        'dev07': {  # 定义了一个名为mytest的日志器
            'handlers': ['console', 'file'],
            'propagate': True,
            'level': 'DEBUG',  # 日志器接收的最低日志级别
        },
    }
}

# 指定使用的用户模型类，默认为auth子应用下的User
# AUTH_USER_MODEL = 'users.UserModel'

JWT_AUTH = {
    # 修改JWT TOKEN认证请求头中Authorization value值的前缀，默认为JWT
    # 'JWT_AUTH_HEADER_PREFIX': 'bearer',

    # 指定TOKEN过期时间，默认为5分钟，可以使用JWT_EXPIRATION_DELTA指定
    'JWT_EXPIRATION_DELTA': datetime.timedelta(days=1),

    # 修改处理payload的函数
    'JWT_RESPONSE_PAYLOAD_HANDLER':
        'utils.handle_jwt_response.jwt_response_payload_handler',
}

# CORS_ORIGIN_ALLOW_ALL为True, 指定所有域名(ip)都可以访问后端接口, 默认为False
CORS_ORIGIN_ALLOW_ALL = True

# CORS_ORIGIN_WHITELIST指定能够访问后端接口的ip或域名列表
# CORS_ORIGIN_WHITELIST = [
#     "http://127.0.0.1:8080",
#     "http://localhost:8080",
#     "http://192.168.1.63:8080",
#     "http://127.0.0.1:9000",
#     "http://localhost:9000",
# ]

# 允许跨域时携带Cookie, 默认为False
CORS_ALLOW_CREDENTIALS = True

# 定义存在httprunner工程项目的路径
PROJECT_DIR = os.path.join(BASE_DIR, 'projects_dir')

# 指定用于收集静态文件服务的路径
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
