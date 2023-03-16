const express = require('express')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/posts.routes')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))