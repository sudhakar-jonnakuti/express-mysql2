# express-mysql2

```
Up application:
docker-compose -f developer.docker-compose.yml up -d

Down application:
docker-compose -f developer.docker-compose.yml down -v --rmi all

Steps to login in Adminer:

1. Open Adminer in the web browser by visiting http://localhost:8080.
2. To log in, fill in the following details
> System : MySQL
> Server : mysql
> Username : admin
> Password : admin
> Database : blog

Note:
Are ORMs really necessary?
let’s dive into three reasons why you should be wary of using ORM.

1. You’re learning the wrong thing
Many people pick up ORM because they don’t want to take the time to learn the underlying SQL

2. Complex ORM calls can be inefficient
This often comes with some inefficiencies when we use ORM to fetch certain data.

3. ORM can’t do everything
Not all queries can be represented as an ORM operation.
When we need to generate these queries, we have to fall back to generating the SQL query by hand.
This often means a codebase with heavy ORM usage will still have a few handwritten queries strewn about it.

So…should I ever use ORMs?
Generally, since ORMs provide a high-level abstraction over a database,
it offers less control than a raw query. And for this reason, it is slower in performance than raw query.

Using connection pools
1. Connection pools help reduce the time spent connecting to the MySQL server
by reusing a previous connection, leaving them open instead of closing when you are done with them.

2. The pool does not create all connections upfront
but creates them on demand until the connection limit is reached.

3. You can use the pool in the same way as connections (using pool.query() and pool.execute()):

// For pool initialization, see above
pool.query("SELECT field FROM table", function(err, rows, fields) {
  // Connection is automatically released when query resolves
});

Docker Compose:-

We have renamed the schema.sql & data.sql files as 1.sql & 2.sql respectively on mounting.
MySQL docker container executes script files from /docker-entrypoint-initdb.d/ folder
in the ascending order of file names.

Reference

NPM : MySql2
https://www.npmjs.com/package/mysql2

Node.js ORMs: Why you shouldn’t use them
https://blog.logrocket.com/node-js-orms-why-shouldnt-use/

Why ORMs Aren't Always a Great Idea
https://dev.to/harshhhdev/why-orms-arent-always-a-great-idea-41kg

mysqljs/sqlstring
https://github.com/mysqljs/sqlstring

Node.js - MySQL Left Join
https://dirask.com/posts/Node-js-MySQL-Left-Join-D7vbE1?posts-list=o0LK7X

MySQL Tutorial
https://www.mysqltutorial.org/

MySQL show status - active or total connections?
https://stackoverflow.com/questions/7432241/mysql-show-status-active-or-total-connections

```
