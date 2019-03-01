const {Client} = require('pg')
const client = new Client({
	user: "postgres",
	password: "",
	host: "localhost",
	port: 5432,
	database: "vue"
})

execute()
async function execute(){
	try{
		await client.connect()
		.then(() => console.log("Connected successfuly"))
		//await client.query("insert into users values ($1, $2, $3, $4, $5)",[100, 'Jon', '34876', 'john@john.test', 1])
		const {rows} = await client.query("select * from users")
		console.table(rows)
	}
	catch (ex) {

		console.log(`Something wrong happend ${ex}`)

	}
	finally {

		await client.end()
		console.log("Client disconected successfully")

	}
}