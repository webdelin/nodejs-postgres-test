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
		await client.query("BEGIN")
		//await client.query("update users set phone = $1", [444]) //Funktioniert

		//const { rows } = await client.query('INSERT INTO users(id) VALUES($1) RETURNING id')
		await client.query('delete from users')
		//await client.query("insert into users(id, name, phone, email, active) values (DEFAULT, 'Gerein', '938467364', 'test@test.test', true)")

		//console.log("Insert a new row")
		await client.query("COMMIT")
	}
	catch (ex){
		console.log(`Failure to execute something  ${ex}`)
		await client.query("ROLLBACK")
	}
	finally{
		await client.end(
			console.log("Cleaned.")
		)
	}
}