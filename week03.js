require("sslkeylog").hookAll();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.h4fs7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {
	if(err) {
		console.log(err.message)
		return
	}
	console.log('Connected to MongoDB');

    client.db('UserDatabase').collection('Faker').insertOne({
        name: 'Duane Nader',
        location:'范宁市',
        avatar: ' https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/346.jpg',
        password: '$2a$10$3bWhco1jayIcunlHe6YqXOMxDaC1xOxMoUAYrSRdGSPV07ehIg3VG',
    }).then(result => {
        console.log(result);
    })
});