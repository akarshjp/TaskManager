const express = require('express');
const app = express();
const routes = require('./routes/task')
const connectdb = require('./db/connect')
require('dotenv').config()
// middlewares
app.use(express.static('./public'))
app.use(express.json())

//routes
const port =3000;

app.use('/api/v1/tasks', routes)

const start = async() =>
{
    try {
        await connectdb(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    }
    catch (error)
    {
        console.log(error);
    }
}
 start()


