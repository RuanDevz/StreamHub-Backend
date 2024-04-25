const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')


app.use(cors())
const RouterUser = require('./routes/User')
app.use(express.json())

app.use('/user', RouterUser)


db.sequelize.sync().then(() =>{
    app.listen(process.env.PORT || 8080, () =>{
        console.log("servidor rodando...")
    })
})