database:
	docker run -p  0.0.0.03306:3306 -v mysqlBase:/app/testserver/data --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest 
	docker run -p 6379:6379 -v redisBase:/app/testserver/data --name some-redis -d redis

cf api https://api.cf.us10-001.hana.ondemand.com/