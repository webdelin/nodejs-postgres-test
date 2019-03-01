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
.then(() => client.query("select * from users where name = $1", ["wendy"]))
.then(results => console.table(results.rows))
.catch(e => console.log)
.finally(() => client.end())