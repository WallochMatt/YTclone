# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-zg-+zr+j5j5k5isw&9x5*-59-k^+ql8-+n@ybb83-v@epy^1o3'

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'yt_clone_database',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'password',
        'PORT' : '3306',
        'OPTIONS': {
            'autocommit': True
        }
    }
}