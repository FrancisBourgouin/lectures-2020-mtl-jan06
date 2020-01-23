const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const userRouter = require('./routes/users')
const apiRouter = require('./routes/api')
const methodOverride = require('method-override')

const port = 3000

app.use(express.static('public'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.set('view engine', 'ejs');

const renderPostsList = (req, res, next) => {
  console.log(req.method)
  res.render('home')
}

//Don't do this ! It's to show you that the verb is not definining the action, you are !

app.get('/', renderPostsList)

app.post('/posts', renderPostsList)

app.put('/posts', renderPostsList)

app.delete('/posts', renderPostsList)


app.use('/users', userRouter)
app.use('/api', apiRouter)

app.listen(port, () => console.log(`Express server running on port ${port}`));
