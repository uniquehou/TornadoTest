from tornado import ioloop, web, gen
from tornado_mysql import pools

POOL = pools.Pool(
	dict(host='localhost', port=3306, user='root', passwd='root', db='tornadotest', charset="utf8"),
	max_idle_connections=100,
	max_recycle_sec=5)

class MainHandler(web.RequestHandler):
	def get(self):
		self.render("../templates/Info/collect.html")

	@web.asynchronous
	@gen.coroutine
	def post(self):
		sql = "insert into info_student(name, student_id, mobile, qq, majors, dialect, `leave`, `province_id`, `city_id`, `county_id`, `department_id`, `minority_id`, `section_id`) \
		values('%s', '%s', '%s', '%s', '%s','%s','%s', %d, %d, %d, %d, %d, %d)" % ( 
			self.get_argument('name'),
			self.get_argument('student_id'),
			self.get_argument('mobile'),
			self.get_argument('qq'),
			self.get_argument('majors'),
			self.get_argument('dialect'),
			self.get_argument('leave'),
			int(self.get_argument('submit_province')),
			int(self.get_argument('submit_city')),
			int(self.get_argument('submit_county')),
			int(self.get_argument('submit_deparment')),
			int(self.get_argument('submit_minority')),
			int(self.get_argument('submit_section'))
		)
		# sql = "select * from info_student"
		# self.write("sql: " + sql)
		cur = yield POOL.execute(sql)
		self.render("../templates/Info/result.html")


application = web.Application([
	(r"/collect", MainHandler),
])

if __name__ == "__main__":
	application.listen(8888)
	ioloop.IOLoop.instance().start()