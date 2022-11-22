const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var compression = require('compression')
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const CURRENT_WORKING_DIR = process.cwd()
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const app = express()

//after building to run server
// app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR,
// 'dist')))



//midddleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compression())
app.use(helmet())
app.use(cors())


//routes
app.use('/', authRoutes)
app.use('/', userRoutes)

   


module.exports = app
