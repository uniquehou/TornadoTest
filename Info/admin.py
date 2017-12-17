from django.contrib import admin
from .models import *

class StudentAdmin(admin.ModelAdmin):
	list_display = ('name', 'mobile', 'qq', 'section', 'department', 'province', 'city', 'county')
	list_filter = ('section', 'department', 'province', 'city', 'county')
	# search_fields

admin.site.register(Student, StudentAdmin)
