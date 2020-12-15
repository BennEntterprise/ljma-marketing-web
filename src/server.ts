const express = require('express')
const favicon = require('express-favicon')
const dotenv = require('dotenv')
const path = require('path')
const nodemailer = require('nodemailer')
dotenv.config({ path: './config.env' })

// Initialize an Expresss Application
const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'
const app = express()

app.use(favicon(__dirname +'/../'+ '/ljma-client/build/favicon.ico'))

// the __dirname is the current directory from where the script is running
app.use(express.json())
app.use(express.static(__dirname))

app.use(express.static(path.join(__dirname, '../','ljma-client', 'build')))

// Test Route to Verify Server is Running.
app.get('/ping', function (req:any, res:any) {
  return res.send('pong')
})

app.get('/*', function (req:any, res:any) {
  res.sendFile(path.join(__dirname, '../','ljma-client', 'build', 'index.html'))
})

app.listen(port, () => {
  console.log(`Make sure you rebuilt the project! ---> 'npm run rebuild'`)
  console.log(`Now Listening on: http://${host}:${port}`)
})

process.on('SIGINT', function () {
  console.log('Sigint')
  process.exit(1)
})
