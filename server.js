var express = require('express')
var axios = require('axios')

var compression = require('compression')

var app = express()
//开启gzip
app.use(compression())

const HomeData = require('./static/mock/index.json')
const CityData = require('./static/mock/city.json')
const DetailData = require('./static/mock/detail.json')

// api 代理
var apiRoutes = express.Router()

apiRoutes.get('/index', (req, res) => {
  res.json({
    errno: 0,
    data: HomeData
  })
})

apiRoutes.get('/city', (req, res) => {
  res.json({
    errno: 0,
    data: CityData
  })
})

apiRoutes.get('/detail', (req, res) => {
  res.json({
    errno: 0,
    data: DetailData
  })
})

app.use('/api', apiRoutes)

app.use(express.static('./dist'));

app.listen(3000, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:3000')
})