from tornado import ioloop, web, gen, options
from tornado_mysql import pools
import sys

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
		self.redirect("https://mp.weixin.qq.com/s?__biz=MzU2ODA0MDY3NQ==&mid=2247483932&idx=1&sn=5df6cb869c3e749450075fedf185575e&chksm=fc954f90cbe2c686b0b91b530942556e6fd09f89b8a2da18463bc2db553ff2240d404caf3472#rd")


application = web.Application([
	(r"/collect", MainHandler),
])

if __name__ == "__main__":
	options.parse_command_line()
	def run(mid,port):
		print("Process %d start" % mid)
		sys.stdout.flush()
		application.listen(port)
		ioloop.IOLoop.instance().start()
	jobs=list()
	for mid,port in enumerate(range(9010,9014)):
		p=multiprocessing.Process(target=run,args=(mid,port))
		jobs.append(p)
		p.start()