const {Client} = require('pg')
let csv= require('fast-csv')
var fs = require('fs');
var start = new Date().getTime();
const client = new Client({
	user: "wendelin",
	password: "",
	host: "localhost",
	port: 5432,
	database: "csv_import"
})
var stream = fs.createReadStream("/Users/wendelin/Desktop/VUE_PGSQL/csv/datafeed_399251.csv");

csv
.fromStream(stream,{ headers : false })
.on("data", function(data){
     console.log(data.length);
		 //console.log('Daten:', data);
		 //select load_csv_file('testen','/Users/wendelin/Desktop/csv_node_postgres/csv/test1.csv',18);
		 return data.length;
 })
 .on("end", function(){ 
	execute()

	async function execute(){
		try{
			
			await client.connect()
			await client.query("BEGIN")
			//await client.query("update users set phone = 00000000 where id = 24") //Funktioniert
	
			//const { rows } = await client.query('INSERT INTO users(id) VALUES($1) RETURNING id')
			//await client.query('delete from users')
			//await client.query("insert into users(id, name, phone, email, active) values (DEFAULT, 'Gerein', '938467364', 'test@test.test', true)")
			await client.query("select load_csv_file('csv1','/Users/wendelin/Desktop/VUE_PGSQL/csv/datafeed_399251.csv',93)")
	
			console.log("Insert a new row")
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

	var end = new Date().getTime();

	var time = end - start;
		 console.log("Zeit: " + time + " Mls");

 });
