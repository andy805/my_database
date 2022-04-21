import http from 'http'
import mongoose from 'mongoose';
/* custom imports */
import app from './app.js'

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);


server.listen(PORT, () => {
    console.log(`server started to list on port: ${PORT}`);
})
