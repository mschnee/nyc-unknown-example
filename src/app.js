const app = require('express')()
const bodyParser = require('body-parser')

const testedRoutes = require('./routes/tested')
const untestedRoutes = require('./routes/untested')

app.use(bodyParser.json({limit: '4mb'}))
app.use(testedRoutes)
app.use(untestedRoutes)

module.exports = app
