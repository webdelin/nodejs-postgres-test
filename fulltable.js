const {Client} = require('pg')
const client = new Client({
	user: "postgres",
	password: "",
	host: "localhost",
	port: 5432,
	database: "vue"
})

client.connect()
.then(() => console.log("Connected successfuly"))
.then(() => client.query("insert into users values ($1, $2, $3, $4, $5)",[100, 'Jon', '34876', 'john@john.test', 1] ))
.then(() => client.query("select * from users"))
.then(results => console.table(results.rows))
.catch(e => console.log)
.finally(() => client.end())