bind = '0.0.0.0:8000'
reload = True
pidfile = '/usr/src/app/logs/gunicorn.pid'
accesslog = '/usr/src/app/logs/gunicorn_acess.log'
errorlog = '/usr/src/app/logs/gunicorn_error.log'

# /usr/local/bin/gunicorn -c /usr/src/app/configs/gunicorn_config.py dev07.wsgi
