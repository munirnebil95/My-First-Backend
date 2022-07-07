const express = require('express')
const app = express()
const port = 8080
const song = ['Fly me to the Moon', 'New York New York', 'My way']
const basicAuth = require('express-basic-auth')

var staticUserAuth = basicAuth({
    users: {
        'admin' : 'admin'
    },
    challenge: true
})

app.get('/', (req, res) => {
 // res.send('Fly me to the Moon, New York New York, My way').sample()
  res.send(song[Math.floor ( Math.random() * song.length )])
})

app.get('/birth_date', (req, res) => {
    res.send('December 12, 1915')
  })

  app.get('/birth_city', (req, res) => {
    res.send('Hoboken, New Jersey')
  })
  
  app.get('/wives', (req, res) => {
    res.send('Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx')
  })
  
  app.get('/picture', (req, res) => {
    res.send('https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg')
  })

  app.get('/public', (req, res) => {
    res.send('Everybody can see this page')
  })

  app.get('/protected', (req, res) => {
    res.send('Welcome, authenticated client')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


