import { connect } from "mongoose";
try {
    const db = await connect('mongodb://uqpane3xxdy11kqrpkiy:t3JgpWYWgiFu3GqdNRAQ@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bphbmwz3zmvo5it?replicaSet=rs0')
    console.log("Conectado a la db: " + db.connection.host)
} catch (error) {
    console.log(error)
}