import http from 'http'
import mongoose from 'mongoose';
/* custom imports */
import app from './app.js'

const uri = "mongodb+srv://serverAndy:Av01aa09@cluster0.nppf9.mongodb.net/Personal_Database?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
mongoose.connect(uri);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to: ${uri}`);
})

const PORT = process.env.PORT || 3002;
const server = http.createServer(app);


server.listen(PORT, () => {
    console.log(`server started to list on port: ${PORT}`);
})
