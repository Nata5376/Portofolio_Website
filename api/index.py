import os
from portofolio_project.wsgi import application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portofolio_project.settings')

app = application