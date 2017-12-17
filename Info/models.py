from django.db import models

class Department(models.Model):
	name = models.CharField(u'院系名', max_length=100)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = '院系'
		verbose_name_plural = '院系'


class Section(models.Model):
	name = models.CharField(u'部门', max_length=100)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = '部门'
		verbose_name_plural = '部门'


class Province(models.Model):
	name = models.CharField(u'省', max_length=100)

	def __str__(self):
		return self.name


class City(models.Model):
	name = models.CharField(u'市', max_length=100)
	province = models.ForeignKey("Province", on_delete=models.SET_NULL, default=' ', null=True)

	def __str__(self):
		return self.name


class County(models.Model):
	name = models.CharField(u'县', max_length=100)
	city = models.ForeignKey("City", on_delete=models.SET_NULL, default=' ', null=True)

	def __str__(self):
		return self.name


class NativePlace(models.Model):
	province = models.ForeignKey("Province", on_delete=models.SET_NULL, null=True)
	city = models.ForeignKey("City", on_delete=models.SET_NULL, null=True)
	county = models.ForeignKey("County", on_delete=models.SET_NULL, null=True)

	def __str__(self):
		return "%s %s %s" % (self.province, self.city, self.county)


class Minority(models.Model):
	name = models.CharField(u'民族名', max_length=100)


class Student(models.Model):
	name = models.CharField(u'姓名', max_length=30, default=' ')
	student_id = models.CharField(u'学号', max_length=20, default=' ')
	mobile = models.CharField(u'手机号', max_length=11, default=' ')
	qq = models.CharField(u'QQ', max_length=20, default='', blank=True)
	section = models.ForeignKey("Section", on_delete=models.SET_NULL, verbose_name='部门', default=0, null=True)
	department = models.ForeignKey("Department", on_delete=models.SET_NULL, verbose_name='院系', default=0, null=True)
	majors = models.CharField(u"专业", max_length=100, default=' ')
	# native_place = models.ForeignKey("NativePlace",verbose_name="籍贯", on_delete=models.SET_NULL, null=True)
	province = models.ForeignKey("Province", on_delete=models.SET_NULL, null=True, default=0)
	city = models.ForeignKey("City", on_delete=models.SET_NULL, null=True, default=0)
	county = models.ForeignKey("County", on_delete=models.SET_NULL, null=True, default=0)	
	minority = models.ForeignKey("Minority",verbose_name="民族", on_delete=models.SET_NULL, null=True, default=0)

	dialect = models.CharField(u'是否会方言', max_length=100, default='')
	leave = models.CharField(u'是否需请假', max_length=100, default='')

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = '学生'
		verbose_name_plural = '学生'